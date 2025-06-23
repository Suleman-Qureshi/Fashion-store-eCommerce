"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const WishlistContext = createContext();
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
const toggleWishlist = async (product) => {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    alert("Please login to add items to wishlist!");

    window.location.href = "/login";
    return;
  }
  const exists = wishlist.find((p) => p.itemNo === product.itemNo);
  const updatedWishlist = exists
    ? wishlist.filter((p) => p.itemNo !== product.itemNo)
    : [...wishlist, product];
  setWishlist(updatedWishlist);
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

  try {
    await axios.post("http://localhost:5000/api/notification", {
      userId,
      message: `${exists ? "❌ Removed" : "⭐ Added"} ${product.description || product.title || "a product"} ${
        exists ? "from" : "to"
      } wishlist`,
      type: exists ? "error" : "success",
    });
  } catch (error) {
    console.error("❌ Error sending wishlist notification:", error);
  }
};
  const isWished = (productName) => wishlist.some(p => p.itemNo === productName);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWished }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);