import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "The Art of Spice Blending",
      author: "Chef Hania",
      date: "21st May, 2023",
      excerpt:
        "Discover how to create perfect spice blends that will elevate your cooking to restaurant quality.",
      userRating: 0,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Seasonal Ingredients Guide",
      author: "Chef Hifza",
      date: "15th April, 2023",
      excerpt:
        "Learn which ingredients are in season and how to get the most flavor from them in your dishes.",
      userRating: 0,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Healthy Cooking Techniques",
      author: "Nutritionist Ayesha",
      date: "2nd March, 2023",
      excerpt:
        "Explore cooking methods that preserve nutrients while maximizing flavor in your meals.",
      userRating: 0,
    },
  ]);

  // Handle user rating click
  const handleRating = (blogId, ratingValue) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === blogId ? { ...blog, userRating: ratingValue } : blog
      )
    );
  };

  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our <span>blogs</span>
      </h1>

      <div className="blog-container">
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <div className="blog-meta">
                  <span>by {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <p>{blog.excerpt}</p>

                {/* Interactive rating */}
                <div className="rating-manual">
                  {[...Array(5)].map((_, i) => {
                    const ratingValue = i + 1;
                    return (
                      <FaStar
                        key={i}
                        className={`star ${
                          ratingValue <= blog.userRating ? "selected" : ""
                        }`}
                        onClick={() => handleRating(blog.id, ratingValue)}
                      />
                    );
                  })}
                </div>

                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
