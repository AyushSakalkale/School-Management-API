# School Management API

![Node.js](https://img.shields.io/badge/Node.js-v14.17.3-green)

![Express](https://img.shields.io/badge/Express-v4.17.1-blue)

## Table of Contents
- [Description](#Description)
- [Features](#Features)
- [Setup Instructions](#Setup-Instructions)
- [Common Issues](#Common-Issues)
- [Contact](#Contact)

## Description
This project is a School Management API built using Node.js, Express.js, and MySQL. The API provides endpoints to manage schools, including adding new schools and listing them based on proximity. It is designed to work with both local and remote MySQL databases and is deployed on Render.

## Features
- **Add School:** Add a new school to the database with name, address, latitude, and longitude.
- **List Schools:** Retrieve a list of all schools, sorted by proximity to a given latitude and longitude.
- **Table Reset:** Reset the schools table, useful for clearing the table during development or testing.

  <img width="1512" alt="Screenshot 2024-08-23 at 8 29 04 PM" src="https://github.com/user-attachments/assets/012ea814-bef5-4a1c-9198-2fcbc0ab6f29">
(if school already present then)
  <img width="1512" alt="Screenshot 2024-08-23 at 8 29 18 PM" src="https://github.com/user-attachments/assets/316b51f1-e800-4a00-8e6e-dcc26cfbdb9d">
  <img width="1512" alt="Screenshot 2024-08-23 at 8 29 45 PM" src="https://github.com/user-attachments/assets/2269aa2a-83e1-4540-ac3d-37e7ac471935">
  <img width="1512" alt="Screenshot 2024-08-23 at 8 27 01 PM" src="https://github.com/user-attachments/assets/7ef772d9-33a8-4aac-81e9-1506571df70f">


## Setup-Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/school-management-api.git
   cd school-management-api

2. **Install Dependencies:**
    ```bash
   npm install

3. **Configure Environment Variables**
   Create a .env file in the root directory...
   ```bash
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   PORT=3000

4. **Running the Application Locally**
   ```bash
   node index.js

## Common-Issues

   MySQL Connection Errors:

   Error: 
   **read ECONNRESET or Can't add new command when connection is in closed state**.

   **Solution**: This could be due to Render’s free tier limitations, such as the
   service spinning down due to inactivity. Use the keepAliveInitialDelay and       
   enableKeepAlive options in the MySQL connection pool configuration to mitigate 
   these issues or redeploy or close connection after try catch block in finally

Backend Storage free limit is only 5mb (Free SQL Database)

## Contact
For any inquiries or issues, please contact [ayushsakalkale30@gmail.com]

