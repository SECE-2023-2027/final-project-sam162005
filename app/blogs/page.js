'use client';

import { useEffect, useState } from 'react';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="p-10 text-center text-lg">Loading blogs...</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>

      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="p-4 border rounded shadow-md dark:bg-gray-800 dark:text-white">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{blog.author}</p>
              <p className="mt-2">{blog.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
