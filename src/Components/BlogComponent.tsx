import React from "react";

const blogPosts = [
  {
    title: "Mastering React Hooks",
    date: "June 15, 2023",
    excerpt:
      "Dive deep into React Hooks and learn how to effectively manage state and side effects in your applications. We'll cover useState, useEffect, useContext, and custom hooks.",
    link: "#",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Node.js Best Practices for 2023",
    date: "May 22, 2023",
    excerpt:
      "Explore the latest best practices for Node.js development. From async/await patterns to security considerations, elevate your server-side JavaScript skills.",
    link: "#",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "TypeScript Tips and Tricks",
    date: "April 10, 2023",
    excerpt:
      "Unlock the full potential of TypeScript with these advanced tips and tricks. Learn about utility types, conditional types, and how to write more robust code.",
    link: "#",
    image: "https://via.placeholder.com/300x200",
  },
];

const BlogCard: React.FC<{ post: (typeof blogPosts)[0] }> = ({ post }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
      </div>
      <a
        href={post.link}
        className="text-gray-700 hover:text-gray-900 font-semibold"
      >
        Read More →
      </a>
    </div>
  </div>
);

export const BlogComponent: React.FC = () => {
  return (
    <>
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/blog"
              className="inline-flex items-center text-gray-700 hover:text-gray-900"
            >
              View More Posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogComponent;
