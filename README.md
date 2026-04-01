# 🎯 A-6 Digital Tools Buying Website

## 📌 Project Overview

A modern and responsive digital tools marketplace where users can browse premium products, add them to a cart, and proceed to checkout. The application provides a smooth user experience with dynamic UI updates, cart management, and clean design based on Figma.

---

## 🚀 Features

### 🛒 1. Smart Cart सिस्टम

* Add products to cart instantly
* Remove individual items from cart
* Cart count updates in real-time in the navbar
* মোট দাম (Total Price) automatically calculated
* "Proceed to Checkout" clears the entire cart

---

### 🔄 2. Product & Cart Toggle System

* দুইটি button (Products / Cart) ব্যবহার করে section switch করা যায়
* Default view → Products section
* Cart initially shows empty message

---

### 🎨 3. Clean UI & Responsive Design

* Fully responsive (Mobile, Tablet, Desktop)
* Figma-based design implementation
* Smooth and modern UI using Tailwind CSS & DaisyUI

---

### 🔔 4. Toast Notifications

* Add to cart → Success message
* Remove product → Alert message
* Checkout → Confirmation message
  (using React-Toastify)

---

## 📦 Product Data

Products are loaded dynamically from a JSON file.

Each product includes:

* id
* title
* description
* price
* billing (monthly / one-time)
* badge (e.g., Popular, Best Seller)
* features (array)
* image

---

## ⚙️ Technologies Used

* React.js
* Tailwind CSS
* DaisyUI
* JavaScript (ES6+)
* React-Toastify
* JSON

---

## 🧩 Functionalities

### ✅ Add to Cart

Users can add any product to the cart, and it updates instantly.

### ❌ Remove from Cart

Each cart item has a remove button to delete it individually.

### 💰 Total Price Calculation

All selected product prices are summed dynamically.

### 🧾 Checkout System

Clicking "Checkout":

* Clears all cart items
* Resets total price
* Updates UI instantly

---

## 📱 Responsive Design

* Mobile friendly
* Tablet optimized
* Desktop layout with 3-column product grid

---

## 🌟 Optional Features Implemented

* Real-time cart count update
* Dynamic UI re-render on state change
* Clean component-based architecture

---

## 📂 GitHub Repository

👉 Add your repository link here

## 🌐 Live Site

👉 Add your live site link here

---

## 📝 Notes

* Meaningful content used (no lorem ipsum)
* Clean and maintainable code structure
* Minimum 8 meaningful Git commits

---

## 👨‍💻 Developer

Abdus Salam
Frontend Web Developer (React.js)
