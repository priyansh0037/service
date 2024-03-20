import Image from "next/image";
import Link from "next/link";
import React from "react";




const CategoryList = ({categoryList}) => {
  return (
    <div className="mt4 mx-4 md:mx-20 lg:mx-52 grid grid-cols-1 md:grid-cols-3 gap-4">
      {categoryList.length > 0 ? (
        categoryList.map((category, index) => (
          <Link href={`/search/${category.name}`}
            key={index}
            className="flex gap-4 flex-col items-center justify-center bg-zinc-200 py-4 cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg flex-wrap"
          >
            <Image src={category.icon.url} alt="image" width={35} height={35} />
            <h2>{category.name}</h2>
          </Link>
        ))
      ) : (
        <>
            {[1,2,3].map((item,index)=>(
                <div key={index} className="h-[105px] w-full bg-zinc-300 animate-pulse rounded-lg"></div>
                
                ))}
                </>
      )}
    </div>
  );
};

export default CategoryList;
