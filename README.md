# Warehouse Management System (Strapi Project)

This project is a Warehouse Management System developed using **Strapi**, a headless CMS that simplifies the process of creating and managing APIs. It provides an efficient way to handle and track warehouse operations, including inventory, orders, delivery, notifications, and reporting.

## 🌟 Features

- **Address Management**: Manage customer and supplier addresses effectively.
- **Customer Management**: Keep track of customer details and order history.
- **Delivery Module**: Organize and manage deliveries with ease.
- **Notification System**: Notify customers and workers about order updates and delivery statuses.
- **Inventory Logging**: Monitor stock changes with detailed inventory logs.
- **Order and Order Items**: Efficiently handle orders and their associated items.
- **Product Management**: Add, update, and organize products in the warehouse.
- **Reports**: Generate reports to analyze warehouse performance.
- **Supplier Management**: Manage supplier details and their product offerings.
- **Worker Management**: Assign and manage worker roles and tasks.

## 🚀 Deployment

The project is deployed and live at:

[**Pretty Books - Warehouse Management System**](https://pretty-books-14a0cf3b96.strapiapp.com/)

You can use the provided API endpoints to interact with the system.

## 🛠️ Technology Stack

- **Backend**: [Strapi](https://strapi.io) - A powerful headless CMS.
- **Database**: MySQL
- **Hosting**: Hosted on Strapi's cloud infrastructure.

## 📂 Folder Structure

The project is organized into modules representing core functionalities:

- **api**
  - **address**
  - **customer**
  - **delivery**
  - **notification**
  - **inventory-log**
  - **order-item**
  - **order**
  - **product**
  - **report**
  - **supplier**
  - **worker**

Each module contains the necessary controllers, services, and models to define the API structure for the respective entity.

## 🔧 Setting Up Locally

To run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone git@gitlab.ti.howest.be:ti/2024-2025/s5/ccett/projects/group-01/cms.git
  
2. Install Dependencies:
    ```bash
    Copy code
    npm install

3. Run the Development Server:
    ```bash
    Copy code
    npm run develop

4. Access the local instance at http://localhost:1337.