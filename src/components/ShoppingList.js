import React, { useState } from "react";
import Item from "./Item";
import itemData from "../data/items";
import Filter from "./Filter"; // ✅ import Filter component

function ShoppingList() {
  const [items, setItems] = useState(itemData);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // Filter items based on category
  const itemsToDisplay = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <main className="ShoppingList">
      {/* ✅ Pass the callback properly */}
      <Filter onCategoryChange={handleCategoryChange} />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </main>
  );
}

export default ShoppingList;