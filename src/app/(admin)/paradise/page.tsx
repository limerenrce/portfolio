"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Post {
  id: number;
  title: string;
  content: string;
  author: { id: number; name: string };
  tags: string[];
  created_at: number;
}

export default function Paradise() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [deletedPosts, setDeletedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //  Create form state
  const [createTitle, setCreateTitle] = useState("");
  const [createContent, setCreateContent] = useState("");
  const [createTags, setCreateTags] = useState("");

  //  Edit modal state
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editTags, setEditTags] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  //  Modal + Tabs
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"active" | "deleted">("active");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Protect route
  useEffect(() => {
    if (!token) {
      router.push("/nusped");
    } else {
      fetchPosts();
      fetchDeletedPosts();
    }
  }, [router]);

  // Fetch all active posts
  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/blog/read", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("API unavailable");
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (err) {
      console.error("Failed to fetch posts", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Fetch deleted posts
  const fetchDeletedPosts = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/blog/deleted", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("API unavailable");
      const item = await res.json();
      setDeletedPosts(item.posts || []);
    } catch (err) {
      console.error("Failed to fetch deleted posts", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Create post
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:8000/api/v1/blog/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: createTitle,
          content: createContent,
          // author_id: 1,
          author_id: localStorage.getItem("id"),
          tags: createTags.split(",").map((t) => t.trim()),
        }),
      });
      setCreateTitle("");
      setCreateContent("");
      setCreateTags("");
      fetchPosts();
    } catch (err) {
      console.error("Failed to create post", err);
    }
  };

  // Open modal with post data
  const openModal = (post: Post) => {
    setEditId(post.id);
    setEditTitle(post.title);
    setEditContent(post.content);
    setEditTags(post.tags.join(", "));
    setIsModalOpen(true);
  };

  // Update post
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editId) return;

    try {
      await fetch(`http://localhost:8000/api/v1/blog/update/${editId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: editTitle,
          content: editContent,
          tags: editTags.split(",").map((t) => t.trim()),
        }),
      });
      setIsModalOpen(false);
      setEditId(null);
      setEditTitle("");
      setEditContent("");
      setEditTags("");
      fetchPosts();
    } catch (err) {
      console.error("Failed to update post", err);
    }
  };

  // Cancel Edit
  const handleCancelEdit = () => {
    setIsModalOpen(false);
    setEditId(null);
    setEditTitle("");
    setEditContent("");
    setEditTags("");
  };

  // Delete post (soft delete)
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    try {
      await fetch(`http://localhost:8000/api/v1/blog/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
      fetchDeletedPosts();
    } catch (err) {
      console.error("Failed to delete post", err);
    }
  };

  // Restore deleted post
  const handleRestore = async (id: number) => {
    try {
      await fetch(`http://localhost:8000/api/v1/blog/restore/${id}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
      fetchDeletedPosts();
    } catch (err) {
      console.error("Failed to restore post", err);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8000/api/v1/auth/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/nusped");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (loading)
    return (
      <>
        <div className="max-w-5xl mx-auto p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab("active")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "active"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Active Posts
            </button>
            <button
              onClick={() => setActiveTab("deleted")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "deleted"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Deleted Posts
            </button>
          </div>
          <div className="text-center py-10 text-gray-500 min-h-[500]">
            <h2 className="text-2xl font-semibold mb-2">Loading..</h2>
            <p>Please wait, we still make the connection.</p>
          </div>
        </div>
      </>
    );

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("active")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "active"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Active Posts
        </button>
        <button
          onClick={() => setActiveTab("deleted")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "deleted"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Deleted Posts
        </button>
      </div>

      {error ? (
        <div className="text-center py-10 text-gray-500 min-h-[300]">
          <h2 className="text-2xl font-semibold mb-2">No Data Available</h2>
          <p>The API connection failed, but you can still access the panel.</p>
        </div>
      ) : (
        <>
          {/* Create Post Form (only in Active tab) */}
          {activeTab === "active" && (
            <form
              onSubmit={handleCreate}
              className="p-6 bg-gray-50 rounded-xl shadow-md mb-8"
            >
              <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
              <input
                value={createTitle}
                onChange={(e) => setCreateTitle(e.target.value)}
                placeholder="Title"
                className="w-full p-2 border rounded mb-3"
                required
              />
              <textarea
                value={createContent}
                onChange={(e) => setCreateContent(e.target.value)}
                placeholder="Content"
                className="w-full p-2 border rounded mb-"
                required
              />
              <input
                value={createTags}
                onChange={(e) => setCreateTags(e.target.value)}
                placeholder="Tags (comma separated)"
                className="w-full p-2 border rounded mb-3"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Create Post
              </button>
            </form>
          )}

          {/* Active Posts */}
          {activeTab === "active" && (
            <div className="space-y-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 border rounded-lg bg-white shadow-sm"
                >
                  <h2 className="text-xl font-bold">{post.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    By {post.author?.name || "Unknown"} | Created on{" "}
                    {post.created_at}
                  </p>
                  <p className="text-gray-700 mb-3 line-clamp-4">
                    {post.content}
                  </p>
                  <div className="flex gap-2 mb-3">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 rounded-lg"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => openModal(post)}
                      className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500 text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Deleted Posts */}
          {activeTab === "deleted" && (
            <div className="space-y-6">
              {deletedPosts.length === 0 && (
                <p className="text-gray-500">No deleted posts.</p>
              )}
              {deletedPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 border rounded-lg bg-gray-100 shadow-sm"
                >
                  <h2 className="text-xl font-bold text-gray-600">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    By {post.author?.name || "Unknown"}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleRestore(post.id)}
                      className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 text-white"
                    >
                      Restore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/*  Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
            <form onSubmit={handleUpdate}>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Title"
                className="w-full p-2 border rounded mb-3"
                required
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="Content"
                className="w-full p-2 border rounded mb-3"
                required
              />
              <input
                value={editTags}
                onChange={(e) => setEditTags(e.target.value)}
                placeholder="Tags (comma separated)"
                className="w-full p-2 border rounded mb-3"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
