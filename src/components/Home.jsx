import React from "react";
import PageLayout from "./PageLayout";
import { defaultTable } from "../data";

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
        <section className="asgard">
          <img src="/asgard-sofa.png" alt="asgard-sofa" />
          <div className="asgard-text-wrapper">
            <span className="text-medium24">New Arrivals</span>
            <span>Asgaard Sofa</span>
            <button>Order Now</button>
          </div>
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
