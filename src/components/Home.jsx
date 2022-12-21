import React from "react";
import PageLayout from "./PageLayout";
import { defaultBlogs, defaultTable } from "../data";
import { defaultFurniture } from "../data/furniture";
import BlogCard from "./BlogCard";
import FurnitureCard from "./FurnitureCard";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageLayout navBg="#FBEBB5">
      <main className=" Home">
        <section className="hero">
          <div className="hero-text-wrapper">
            <span className="hero-text1">Rocket single seater</span>
            <span>Shop Now</span>
          </div>
          <img src="/hero-chair.png" alt="hero-chair" />
        </section>
        <section className="table-section">
          {defaultTable.map((table, tableIndex) => (
            <div className="table" key={`table${tableIndex}`}>
              <img src={`/${table.img}.png`} alt="table-img" />
              <span>{table.name}</span>
              <Link to="/shop" className="view-more">
                View More
              </Link>
            </div>
          ))}
        </section>
        <section className="furniture-section">
          <h3>Top Picks For You</h3>
          <span>
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </span>
          <div className="furniture-container">
            {defaultFurniture.map((furniture, fIndex) => (
              <FurnitureCard {...furniture} key={fIndex} />
            ))}
          </div>
          <span>View More</span>
        </section>
        <section className="asgard">
          <img src="/asgard-sofa.png" alt="asgard-sofa" />
          <div className="asgard-text-wrapper">
            <span className="text-medium24">New Arrivals</span>
            <span>Asgaard Sofa</span>
            <button>Order Now</button>
          </div>
        </section>
        <section className="blog-section">
          <h3>Our Blogs</h3>
          <span>
            Find a bright ideal to suit your taste with our great selection
          </span>
          <div className="blogs">
            {defaultBlogs.map((blog, blogIndex) => (
              <BlogCard {...blog} key={blogIndex} />
            ))}
          </div>
          <span>View All Post</span>
        </section>
        <section className="follow-section">
          <h3>Our instagram</h3>
          <span>Follow our store on Instagram</span>
          <button>follow us</button>
        </section>
      </main>
    </PageLayout>
  );
};

export default Home;
