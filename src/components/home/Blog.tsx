import React from 'react'
import BlogCard from '../card/BlogCard';
import profile from "@/assets/agent/Image (8).png";


const Blog = () => {
//props of blog card
    //     title,
//   description,
//   imageUrl,
//   author,
//   date,
//make a json array of blogs
const blogs = [
  {
    title: "How to Sell a Home in Mexico",
    description:
      "Learn how to sell a home in Mexico with the help of our experts. Discover the best practices and tips for selling your home in Mexico.",
    imageUrl: profile.src,
    author: "Morshed",
    date: "July 1, 2023",
  },
  {
    title: "How to Buy a Home in Mexico",
    description:
      "Learn how to buy a home in Mexico with the help of our experts. Discover the best practices and tips for buying your home in Mexico.",
    imageUrl: profile.src,
    author: "Morshed",
    date: "July 1, 2023",
  },
  {
    title: "How to Find a Home in Mexico",
    description:
      "Learn how to find a home in Mexico with the help of our experts. Discover the best practices and tips for finding your dream home in Mexico.",
    imageUrl: profile.src,
    author: "Morshed",
    date: "July 1, 2023",
  },
];

  return (
    <div className="container mx-auto px-6">
      <h2 className="my-10 secondary-font text-4xl font-bold ">
        Learn Everything About Real Estate
      </h2>
      <div
        className="grid grid-cols-1 
      md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default Blog