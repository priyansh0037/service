"use client";
import React, { useEffect, useState } from "react";
import getCategory from "../../.././_services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategorySideBar = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory , setSelectedCategory] = useState()

  const params = usePathname()



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
  }, []);

useEffect(()=>{
params && setSelectedCategory(params.split("/")[2])
},[params])

  return (
    <div className=" ">
      <h2 className="font-bold mb-3 text-lg ">Categories</h2>
      <div>
        {categoryList.map((category, index) => (
          <Link href={`/search/${category.name}`} key={index} className={`hover:opacity-75 flex  p-3 rounded-lg mb-3 cursor-pointer md:mr-12 font-semibold hover:text-zinc-400 hover:shadow-md gap-3 items-center ${selectedCategory === category.name && "border-[2px]"}`}>
            <Image  src={category.icon.url} alt="image" width={35} height={35} />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySideBar;
