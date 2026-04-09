# E-commerce Platform 🛍️

## 1. Project Overview
Vanes is a comprehensive e-commerce web application tailored for the fashion industry. The platform is designed to provide an optimized, responsive user interface for shoppers, coupled with a secure, highly functional Content Management System (CMS) for inventory administration.

---

## 2. High-Level Requirements (HLR)
The High-Level Requirements define the system's broad capabilities, user roles, and business objectives.

### 2.1. User Roles & Authorization
* **HLR-01 (Guest User):** The system shall allow unauthenticated users to browse the product catalog, view detailed product pages, read reviews, and use the recommendation engine.
* **HLR-02 (Registered Customer):** The system shall allow users to register, authenticate, and maintain a session to manage their data.
* **HLR-03 (System Administrator):** The system shall provide a restricted-access CMS backend for administrators to perform Create, Read, Update, and Delete (CRUD) operations on the product database.

### 2.2. Core System Modules
* **HLR-04 (Authentication System):** A secure login/registration system using encrypted passwords and session tokens.
* **HLR-05 (Inventory Management CMS):** A centralized dashboard for real-time stock and product information updates.
* **HLR-06 (Dynamic Storefront):** A responsive front-end application that dynamically renders product data fetched from the backend database.
* **HLR-07 (Cross-Selling Engine):** A logic-driven module ("Complete the Look") that queries the database for complementary items based on predefined relationship tags or categories.

### 2.3. Non-Functional Requirements (NFR)
* **HLR-08 (Responsiveness):** The user interface must be fully responsive, scaling appropriately across desktop, tablet, and mobile breakpoints.
* **HLR-09 (Performance):** Product images must be optimized to ensure page load times remain under 3 seconds.

---

## 3. Low-Level Requirements (LLR)
The Low-Level Requirements detail the exact technical specifications, input validations, UI states, and API behaviors for each interface.

### 3.1. Authentication Module (Login & Register Views)
* **LLR-AUTH-01 (Input Fields):** Both forms must render `Email` (type: email) and `Password` (type: password) fields.
* **LLR-AUTH-02 (Email Validation):** The system shall validate the email input against the RFC 5322 regex standard. Invalid inputs must trigger an inline error: *"Please enter a valid email address."*
* **LLR-AUTH-03 (Password Security):** The password field must enforce a minimum of 8 characters. Characters must be masked (`***`) during input.
* **LLR-AUTH-04 (Button States):** The "Enter the account" button shall remain in a disabled state until both fields contain characters.
* **LLR-AUTH-05 (Error Handling):** Upon receiving a `401 Unauthorized` response from the server, the UI must display: *"Invalid credentials. Please try again."*

### 3.2. Admin Dashboard (Master View - Products)
* **LLR-ADMIN-01 (Data Table Rendering):** The system shall perform a `GET` request to the `/api/products` endpoint and map the response payload to a data table.
* **LLR-ADMIN-02 (Table Columns):** The table must bind and display the following data points: `ID` (UUID/Integer), `Image` (Thumbnail URL), `Name` (String), `Category` (String), `Price` (Float, formatted as currency), and `Sizes` (Array of Strings).
* **LLR-ADMIN-03 (Delete Action):** Clicking the "Delete" icon must trigger a confirmation modal warning the admin before executing the `DELETE` API call, to prevent accidental data loss.
* **LLR-ADMIN-04 (Empty State):** If the database is empty, the table must display a placeholder text: *"No products found. Add a new product to get started."*

### 3.3. Product Management (Create & Update Views)
* **LLR-PROD-01 (Form Schema):** The product form must strictly enforce the following data schema:
  * `Product Name`: String, Max 100 characters, Required.
  * `Category`: String, Dropdown selection (e.g., Dress, Jacket, Jeans), Required.
  * `Price`: Float, Min value: 0.01, Required.
  * `Available Sizes`: Array of Strings (e.g., ["36", "38", "40"]), Required.
  * `Image`: File upload, Max size: 5MB, Accepted formats: `.jpg`, `.png`, Required.
* **LLR-PROD-02 (Update Pre-population):** When navigating from the Master View via the "Edit" button, the system must pass the Product ID to the form and execute a `GET /api/products/{id}` request to pre-fill all input fields with the existing data.
* **LLR-PROD-03 (API Submission):** Clicking "Save Product" must package the form data into a JSON payload (or FormData for images) and send a `POST` request (for new products) or a `PUT/PATCH` request (for edits).

### 3.4. Customer Storefront (Presentation View)
* **LLR-FRONT-01 (Hero Section):** The hero banner must cover the top viewport and include a primary Call-to-Action (CTA) button routing to the `/shop` route.
* **LLR-FRONT-02 (Category Routing):** The "Featured Categories" cards must act as routing links, appending query parameters to the URL (e.g., clicking "Dresses" routes to `/shop?category=dresses`).
* **LLR-FRONT-03 (Newsletter Validation):** The Newsletter subscription input at the footer must validate for a correct email format before allowing the "Subscribe" API `POST` request to execute.

### 3.5. Product Catalog (Shop View)
* **LLR-SHOP-01 (Grid Mapping):** The application shall map through the products array and render individual card components containing: `Image`, `Name`, `Category`, and `Price`.
* **LLR-SHOP-02 (Sorting UI):** The utility bar must include a Dropdown component allowing users to sort the mapped array by Price (Ascending/Descending).
* **LLR-SHOP-03 (Dynamic Routing):** Clicking a product card must route the user to `/product/{id}`, passing the unique ID to the Detail View.

### 3.6. Product Details (Detail View)
* **LLR-DETAIL-01 (Component Rendering):** The Detail View must fetch data based on the URL ID parameter and render the full-resolution image, title, price, and descriptive text.
* **LLR-DETAIL-02 (Cross-Selling Engine Logic):** The "Complete the Look" section must automatically query the database for 3 products that share a relationship tag (e.g., `related_to: {product_id}`) or belong to predefined complementary categories (e.g., if viewing a Dress, fetch 1 Jacket, 1 Belt, 1 pair of Shoes).
* **LLR-DETAIL-03 (Cross-Selling Layout):** The recommended items must be displayed in a horizontal flex container at the bottom of the viewport.
