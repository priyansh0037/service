"use client";

import React, { useEffect, useState } from "react";

import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import BusinessList from "./_components/BusinessList"
import getCategory, { getAllBusinessList } from "./_services/GlobalApi";

function page() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  const getCategoryList = async () => {
    try {
      const res = await getCategory();
      // console.log(res);
      setCategoryList(res.categories);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  useEffect(() => {
    getCategoryList();
    getAllBusinessLists();

  }, []);

  const getAllBusinessLists = async () => {
    try {
      const res = await getAllBusinessList()
      // console.log(res.businessLists)
      setBusinessList(res.businessLists);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="">
      <Hero />
      <CategoryList categoryList={categoryList} />
<BusinessList businessList ={businessList} title={"Popular Business"} />      
    </div>
  );
}

export default page;
