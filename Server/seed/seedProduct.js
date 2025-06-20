import mongoose from "mongoose";
import Product from "../models/Product.js";
const URI="mongodb+srv://suleman9999:99Suleman99@e-commers-project-1.q1opgch.mongodb.net/";
const seedDatabase = async () => {
  try {
    // 1. Connect to MongoDB
    console.log(`Connecting to MongoDB...`);
    await mongoose.connect(URI);
    console.log("✅ Connection successful!");

    // 2. Clear the existing products
    console.log("🧹 Deleting all products...");
    await Product.deleteMany({});
    console.log("✅ Products deleted.");

    // 3. Prepare your product data
const products=[
    {
    name: "Nike Air Max",
    label: "Footwear",
    category: "men",
    color:"red",
    price: 120,
    imgSrc1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDI%3D",
    rating: 4.8,
    reviews: 34,
    new: false,
    tags: ["sale", "men"],
    discount: { oldPrice: 150, offer: 20 }
  },
  {
    name: "Air Jordan 12",
    label: "Footware",
    category: "men",
    color: "red",
    price: 99,
    imgSrc1: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVkJTIwc2hvZXN8ZW58MHx8MHx8fDI%3D",
    rating: 4.6,
    reviews: 21,
    new: false,
    tags: ["feature", "men"]
  },
  {
    name: "Nike Air Force 1",
    label: "Footwear",
    color: "red",
    category: "men",
    price: 50,
    imgSrc1: "https://images.unsplash.com/photo-1745578865096-0f51e5ac3213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVkJTIwc2hvZXN8ZW58MHwyfDB8fHwy",
    rating: 4.4,
    reviews: 16,
    tags: ["men"]
  },
  {
    name: "Converse All Star High",
    label: "Footwear",
    color: "black",
    category: "men",
    price: 100,
    imgSrc1: "https://images.unsplash.com/photo-1565379793984-e65b51b33b37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwc2hvZXN8ZW58MHwyfDB8fHwy",
    rating: 4.9,
    reviews: 101,
    new: true,
    tags: ["new", "electronics"]
  },
  {
    name: "Sneakers",
    label: "Footwear",
    color: "black",
    category: "men",
    price: 220,
    imgSrc1: "https://images.unsplash.com/photo-1568628607745-3419d5b8f3a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwc2hvZXN8ZW58MHwyfDB8fHwy",
    rating: 4.8,
    reviews: 76,
    tags: ["sale"],
    discount: { oldPrice: 260, offer: 15 }
  },
  {
    name: "Nike Sneakers",
    label: "Footware",
    color: "black",
    category: "men",
    price: 60,
    imgSrc1: "https://images.unsplash.com/photo-1568450799101-ed4f8a096c9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwc2hvZXN8ZW58MHwyfDB8fHwy",
    rating: 4.5,
    reviews: 45,
    new: true,
    tags: ["feature", "new"]
  },
  {
    name: "Men’s Formal Shirt",
    label: "Clothing",
    category: "men",
    color: "gray",
    price: 35,
    imgSrc1: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvcm1hbCUyMHNoaXJ0fGVufDB8MnwwfHx8Mg%3D%3D",
    rating: 4.2,
    reviews: 9,
    tags: ["men"]
  },
  {
    name: "Women’s Handbag",
    label: "Accessories",
    category: "women",
    price: 89.99,
    imgSrc1: "/images/women/handbag.jpg",
    rating: 4.7,
    reviews: 51,
    tags: ["women", "sale"],
    discount: { oldPrice: 120, offer: 25 }
  },
  {
    name: "Modern Chair",
    label: "Furniture",
    category: "home",
    price: 149.99,
    imgSrc1: "/images/furniture/chair.jpg",
    rating: 4.3,
    reviews: 67,
    tags: ["home"]
  },
  {
    name: "Cotton Hoodie",
    label: "Clothing",
    category: "men",
    price: 44.99,
    imgSrc1: "/images/men/hoodie.jpg",
    rating: 4.5,
    reviews: 22,
    new: true,
    tags: ["new", "men"]
  },
  {
    name: "Elegant Dress",
    label: "Clothing",
    category: "women",
    price: 79.99,
    imgSrc1: "/images/women/dress.jpg",
    rating: 4.9,
    reviews: 87,
    new: true,
    tags: ["new", "fashion"]
  },
  {
    name: "Sneakers",
    label: "Footwear",
    category: "men",
    price: 110,
    imgSrc1: "/images/men/shoes.jpg",
    rating: 4.6,
    reviews: 37
  },
  {
    name: "Elegant Watch",
    label: "Accessories",
    category: "men",
    price: 310,
    imgSrc1: "/images/men/watch.jpg",
    rating: 4.8,
    reviews: 105,
    tags: ["premium"]
  },
  {
    name: "Bluetooth Earbuds",
    label: "Electronics",
    category: "electronics",
    price: 150,
    imgSrc1: "/images/electronics/earbuds.jpg",
    rating: 5,
    reviews: 150,
    tags: ["feature", "top"]
  },
  {
    name: "Canvas Backpack",
    label: "Bags",
    category: "men",
    price: 52,
    imgSrc1: "/images/accessories/backpack.jpg",
    rating: 4.4,
    reviews: 12
  },
  {
    name: "Winter Coat",
    label: "Clothing",
    category: "women",
    price: 130,
    imgSrc1: "/images/women/coat.jpg",
    rating: 4.5
  },
  {
    name: "Gaming Mouse",
    label: "Electronics",
    category: "electronics",
    price: 122,
    imgSrc1: "/images/electronics/mouse.jpg",
    rating: 5,
    reviews: 89,
    tags: ["feature", "sale"],
    discount: { oldPrice: 140, offer: 10 }
  },
  {
    name: "Dark Lamp",
    label: "Lighting",
    category: "home",
    price: 49,
    imgSrc1: "/images/home/lamp.jpg",
    rating: 4.8,
    reviews: 71,
    tags: ["sale"],
    discount: { oldPrice: 55, offer: 12 }
  },
  {
    name: "Kids Jacket",
    label: "Clothing",
    category: "kids",
    price: 34.99,
    imgSrc1: "/images/kids/jacket.jpg",
    rating: 4.3,
    reviews: 14
  },
  {
    name: "Kids Sneakers",
    label: "Footwear",
    category: "kids",
    price: 29.99,
    imgSrc1: "/images/kids/sneakers.jpg",
    rating: 4.7,
    reviews: 18
  },
  {
    name: "USB-C Hub",
    label: "Electronics",
    category: "electronics",
    price: 21,
    imgSrc1: "/images/electronics/hub.jpg",
    rating: 5,
    reviews: 112,
    discount: { oldPrice: 22, offer: 5 }
  },
  {
    name: "Portable Charger",
    label: "Electronics",
    category: "electronics",
    price: 109,
    imgSrc1: "/images/electronics/powerbank.jpg",
    rating: 5,
    reviews: 66,
    new: true,
    tags: ["new"]
  },
  {
    name: "Office Desk",
    label: "Furniture",
    category: "home",
    price: 200,
    imgSrc1: "/images/furniture/desk.jpg",
    rating: 3.9,
    reviews: 32
  },
  {
    name: "T-shirt",
    label: "Clothing",
    category: "men",
    price: 19.99,
    imgSrc1: "/images/men/t-shirt.jpg",
    rating: 4.2
  },
  {
    name: "Wool Scarf",
    label: "Accessories",
    category: "women",
    price: 23,
    imgSrc1: "/images/women/scarf.jpg"
  },
  {
    name: "Girls Dress",
    label: "Clothing",
    category: "kids",
    price: 40,
    imgSrc1: "/images/kids/dress.jpg",
    rating: 4.7
  },
]
while (products.length<26){
    products.push({
        name:`product-${products.length+1}`,
        label:"Misc",
        category:["men","women","kids","electronics","home","accessories"][Math.floor(Math.random()*5)],
        price: Math.floor(Math.random() * 200) + 20,
        imgSrc1: `/images/misc/${Math.floor(Math.random() * 10) + 1}.jpg`,
        rating: (Math.random() * 5).toFixed(1),
        reviews: Math.floor(Math.random() * 100),
        tags: ["sale", "new", "feature"].filter(() => Math.random() > 0.6),    
    })
}
    // 4. (FIXED) Your while loop to add more random products
    // Note the fix: `products.length` and `category`
    while (products.length < 50) { // <-- FIX: 'length' spelling
      products.push({
        name: `Product-${products.length + 1}`,
        label: "Misc",
        category: ["men", "women", "kids", "electronics", "home", "accessories"][Math.floor(Math.random() * 6)], // <-- FIX: 'category' spelling
        price: Math.floor(Math.random() * 200) + 20,
        imgSrc1: `/images/misc/placeholder.jpg`,
        rating: parseFloat((Math.random() * 5).toFixed(1)),
        reviews: Math.floor(Math.random() * 100),
        tags: ["sale", "new", "feature"].filter(() => Math.random() > 0.6),
      });
    }

    // 5. (THE CRITICAL FIX) Insert the data into the database
    console.log(`🌱 Inserting ${products.length} products...`);
    await Product.insertMany(products); // <-- THIS IS THE MISSING LINE!
    console.log("✅ All products were added successfully!");

  } catch (error) {
    // 6. Catch any errors that happen during the process
    console.error("❌ An error occurred while seeding the database:");
    console.error(error);
  } finally {
    // 7. Always close the connection, whether it succeeded or failed
    console.log("Closing database connection...");
    await mongoose.connection.close();
    console.log("✅ Connection closed.");
  }
};

// Run the seeder function
seedDatabase();
