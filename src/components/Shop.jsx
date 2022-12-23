import React from "react";
import PageLayout from "./PageLayout";
import PageHeader from "./PageHeader";
import ServicesInfo from "./ServicesInfo";
import { defaultFurniture } from "../data/furniture";
import FurnitureCard from "./FurnitureCard";
import Pagination from "./Pagination";

const Shop = () => {
  return (
    <PageLayout navBg="#fff">
      <PageHeader title="Shop" />
      <div className="wrapper grid grid-cols-4 px-[6.19rem]">
        {Array(16)
          .fill(defaultFurniture[1])
          .map((furniture, fIndex) => (
            <FurnitureCard {...furniture} key={fIndex} />
          ))}
      </div>
      <div className="pagination-container pt-[7.31rem] pb-[5.75rem]">
        <Pagination />
      </div>
      <ServicesInfo />
    </PageLayout>
  );
};

export default Shop;
