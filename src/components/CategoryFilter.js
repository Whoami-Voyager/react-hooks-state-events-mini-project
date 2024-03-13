import React, { useState, useTransition } from "react";

function CategoryFilter({ category }) {

  // const [drain, setCategory] = useState("All");
  // const handleCategoryClick = (filter) => {
  //   setCategory(filter);
  // };
  // const filteredItems = category.filter((item) => {
  //   if (drain === "All") {
  //     return true;
  //   }
  //   return item === drain;
  // });

  const dropDown = category.map((filters, index) => {
    return <button key={index} onClick={ {}}>{filters}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {dropDown}
    </div>
  );
}

export default CategoryFilter;
