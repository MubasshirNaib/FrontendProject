
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const CrudExample = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Add a new post
  const addPost = async () => {
    try {
      const response = await axios.post(API_URL, {
        title: newPost.title,
        body: newPost.body,
        userId: 1,
      });
      setPosts([response.data, ...posts]);
      setNewPost({ title: "", body: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  // Update an existing post
  const updatePost = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        title: "Updated Title",
        body: "Updated Body",
      });
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a post
  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>CRUD Example with Search Feature</h1>

      {/* Search Feature */}
      <div>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add New Post */}
      <div>
        <h2>Add New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button onClick={addPost}>Add Post</button>
      </div>

      {/* Display Posts */}
      <h2>Posts</h2>
      {filteredPosts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => updatePost(post.id)}>Update</button>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CrudExample;