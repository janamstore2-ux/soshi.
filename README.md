# SOSHI – Premium International Beauty & Skincare E-Commerce Store

> **"Beauty Begins With You."**

**SOSHI** is a complete, production-ready beauty and skincare e-commerce store built for Pakistani customers with international-quality design standards and an expandable architecture.

---

## 🌸 Brand Identity & Values
- **Brand Name:** SOSHI
- **Tagline:** Beauty Begins With You.
- **Category:** Beauty, Skincare, Cosmetics & Personal Care.
- **Brand Personality:** Elegant, Modern, Trustworthy, Premium, Minimalist, Friendly, International.
- **Color Palette:**
  - **Primary:** Soft Blush Pink (`#FCE4EC`)
  - **Secondary:** Pure White (`#FFFFFF`)
  - **Accent:** Rose Gold (`#C58B83`)
  - **Text:** Deep Charcoal (`#292329`)
  - **Secondary Background:** Light Cream (`#FFF8F5`)
  - **Buttons & CTAs:** Elegant Rose Pink (`#D66D91`)

---

## 📦 Brand Collections & Initial 9 Products
SOSHI features 3 iconic brand collections with authentic product specifications and pricing in Pakistani Rupees (PKR):

### 1. NIVEA Collection
1. **Nivea Soft Cream – 200ml** (₨ 1,399, Original: ₨ 1,650) – 15% OFF
2. **Nivea Body Lotion – 400ml** (₨ 1,999, Original: ₨ 2,400) – 17% OFF
3. **Nivea Face Wash – 100ml** (₨ 999, Original: ₨ 1,200) – 17% OFF

### 2. SAEED GHANI Collection
4. **Saeed Ghani Hair Growth Oil – 100ml** (₨ 799, Original: ₨ 950) – 16% OFF
5. **Saeed Ghani Vitamin C Face Wash – 100ml** (₨ 699, Original: ₨ 850) – 18% OFF
6. **Saeed Ghani Rose Water Spray – 120ml** (₨ 380, Original: ₨ 450) – 16% OFF

### 3. POND'S Collection
7. **Pond's Bright Beauty Face Wash – 100g** (₨ 720, Original: ₨ 850) – 15% OFF
8. **Pond's Bright Beauty Serum Cream – 50g** (₨ 1,199, Original: ₨ 1,450) – 17% OFF
9. **Pond's Light Moisturiser – 150ml** (₨ 799, Original: ₨ 950) – 16% OFF

---

## 💳 Payment Options
1. **Cash on Delivery (COD):** Available across Pakistan.
2. **JazzCash Manual Transfer:**
   - **Account Number:** `03475730097`
   - **Account Title:** Fawad Ahmad
   - **Customer Flow:** Displays transfer instructions, accepts customer's 10-12 digit JazzCash Transaction ID (TID), allows screenshot upload, and marks order as `Payment Pending Verification` until confirmed by the admin.
   - **Security Guarantee:** Never asks for MPINs, OTPs, or passwords.

---

## 👤 Store Owner & Contact Information
- **Proprietor & Owner:** Fawad Ahmad
- **Helpline / Phone:** `03045560150`
- **Email:** `ahmadfawadahmad587@gmail.com`
- **JazzCash Payment:** `03475730097`
- **WhatsApp Support:** Direct 1-click WhatsApp integration linked to `03045560150`.

---

## 🛠️ Technology Stack
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + Cormorant Garamond & Plus Jakarta Sans typography
- **Icons:** Lucide React
- **Animations & Effects:** Custom keyframes + Canvas Confetti
- **State Management:** Reactive Store Context with LocalStorage & Supabase sync
- **Database:** Supabase PostgreSQL Schema (`supabase/schema.sql`)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## 🔐 Administrator Authentication & Dashboard

### Dedicated URLs
- **Admin Login:** `/admin/login`
- **Admin Dashboard:** `/admin/dashboard`
- **Customer Storefront:** `/`

### Super Admin Credentials
- **Owner & Super Admin:** Fawad Ahmad
- **Email:** `ahmadfawadahmad587@gmail.com` (or `admin@soshi.pk`)
- **Default Master Key / Password:** `soshiAdmin2026!`
- **Role:** `super_admin` (Full permissions)

### Complete 16 Dashboard Modules
1. **Dashboard:** Live KPI metrics (Revenue, Orders, Products, Customers, Inventory, JazzCash verification queue, weekly sales chart).
2. **Products:** Full CRUD, SKU generation, pricing, discount calculator, image upload to Supabase Storage, brand & category selectors, feature/bestseller flags.
3. **Categories:** Organization of beauty categories (Cleansers, Moisturizers, Body Care, Hair Care, Toners) with item counts.
4. **Brands:** Brand collection hubs (NIVEA, Saeed Ghani, Pond's) with ability to register custom brands dynamically.
5. **Orders:** Order fulfillment, status tracking (Pending, Confirmed, Processing, Shipped, Delivered, Cancelled, Returned), courier assignment, tracking numbers, invoice printing.
6. **Customers:** Directory of customers, contact details, total orders placed, lifetime spend, and geographical locations.
7. **Payments:** Verification of Cash on Delivery (COD) and manual JazzCash payments with TID lookup, screenshot review, and instant approval/rejection.
8. **Inventory:** Real-time stock counts, low stock alerts, sold counts, restock thresholds, and adjustment audit logging.
9. **Reviews:** Verified customer review moderation with 5-star ratings and feedback management.
10. **Coupons:** Creation and toggling of discount coupon codes (percentage and fixed) with usage limits and minimum spend validation.
11. **Promotions:** Homepage flash sale countdown timer control, discount percentage, headline and toggle active/inactive.
12. **Homepage Banners:** Hero banner management with banner image upload, headlines, call-to-action buttons, and target links.
13. **Analytics & Reports:** Executive business intelligence, revenue by brand, payment method ratio, and top customer leaderboard.
14. **Store Settings:** Live management of store business details, owner contacts, standard delivery fee (₨ 200), and free shipping threshold (₨ 2,500).
15. **Admin Users & RBAC:** Security review of administrator permissions and Supabase Row Level Security status.
16. **Activity Logs:** Immutable security trail recording every administrative creation, modification, verification, or deletion.

---

## 🗄️ Database Architecture & Setup (Supabase)

### 1. Execute SQL Migration in Supabase
1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase project dashboard.
3. Paste and run `supabase/schema.sql`. This provisions:
   - All 17 production tables: `profiles`, `admin_users`, `products`, `categories`, `brands`, `customers`, `orders`, `order_items`, `payments`, `reviews`, `coupons`, `promotions`, `banners`, `inventory`, `store_settings`, `shipping_zones`, `activity_logs`.
   - Supabase Storage buckets: `product-images`, `payment-receipts`, `banners`.
   - Stored transactional functions:
     - `confirm_order_and_reduce_stock`: Safe transactional stock reduction when an order is confirmed.
     - `restore_stock_on_order_cancel`: Safe transactional stock replenishment when an order is cancelled or returned.
     - `validate_coupon`: Server-side coupon validator checking minimum order amount and usage limits.
   - Row Level Security (RLS) policies protecting tables from unauthorized access.
   - Initial seed data for NIVEA, Saeed Ghani, Pond's, inventory, and coupons.

### 2. Configure Super Administrator
In the Supabase SQL Editor, run `supabase/setup_admin.sql` to grant Super Admin privileges to Fawad Ahmad (`ahmadfawadahmad587@gmail.com`).

### 3. Environment Variables
Copy `.env.example` to `.env` and fill in your Supabase credentials:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```
*(If credentials are not yet configured, the system operates seamlessly with local persistent offline caching).*
  - Moderate customer reviews
  - Update store contact numbers and shipping policies
