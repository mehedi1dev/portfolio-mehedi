import React from "react";

const blogPosts = [
  {
    title: "Unlocking React’s Potential with the Container-Presenter Pattern",
    date: "October 03, 2024",
    excerpt:
      "As developers, we’ve all faced that moment when our React components begin to balloon in size. You start with a simple component, handling both logic and presentation, and then, over...",
    link: "https://medium.com/@mehedi1dev/unlocking-reacts-potential-with-the-container-presenter-pattern-003ff25aeb02",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*eX3hsOvj30rt4mfLvBFAYw.jpeg",
  },
  {
    title: "My Journey from JavaScript to TypeScript: A Developer’s Evolution",
    date: "October 01, 2024",
    excerpt:
      "As a web developer, JavaScript was my go-to language for a long time. It’s flexible and allowed me to build projects quickly. But as I took on larger projects, I started facing challenges...",
    link: "https://medium.com/@mehedi1dev/my-journey-from-javascript-to-typescript-a-developers-evolution-79a2a77ae9a3",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*LajtlweguogWtbDKk2KHRQ.jpeg",
  },
  {
    title: "More are coming soon!",
    date: "Near future",
    excerpt: "Just wait & see",
    link: "#",
    image:
      "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg",
    disable: true,
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
        <p className="text-gray-600 mb-4 text-justify">{post.excerpt}</p>
      </div>
      {!post.disable && (
        <a
          href={post.link}
          className="text-gray-700 hover:text-gray-900 font-semibold"
          target="_blank"
        >
          Read More →
        </a>
      )}
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
              href="https://medium.com/@mehedi1dev"
              className="inline-flex items-center text-gray-700 hover:text-gray-900"
              target="_blank"
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
