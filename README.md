Project Title: School Management API


Description
This project is a School Management API built using Node.js, Express.js, and MySQL.
The API provides endpoints to manage schools, including adding new schools and listing them based on proximity.
It is designed to work with both local and remote MySQL databases and is deployed on Render.

Features
Add School: Add a new school to the database with name, address, latitude, and longitude.
List Schools: Retrieve a list of all schools, sorted by proximity to a given latitude and longitude.
Table Reset: Reset the schools table, useful for clearing the table during development or testing.

Prerequisites
Node.js
MySQL Server (Local or Remote)
Render (for deployment)
Git


Setup Instructions


1. Clone the Repository

git clone https://github.com/yourusername/school-management-api.git
cd school-management-api


2. Install Dependencies

npm install


3. Configure Environment Variables
Create a .env file in the root directory and add the following:

DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
PORT=3000


4. Running the Application Locally

node index.js
This will start the Express server and connect to your MySQL database.

Deployment
The project is deployed on Render. Once deployed, the API is accessible via the deployment URL.

Common Issues

MySQL Connection Errors:

Error: read ECONNRESET or Can't add new command when connection is in closed state.
Solution: This could be due to Render’s free tier limitations, such as the service spinning down due to inactivity. 
Use the keepAliveInitialDelay and enableKeepAlive options in the MySQL connection pool configuration to mitigate these issues.
Table Does Not Exist Error:

Error: Table 'sql12727430.schools' doesn't exist.
Solution: Use the API endpoint that resets and creates the schools table.
API Endpoints
Add School
POST /api/addSchool
Adds a new school to the database.

Request Body:

json

{
  "name": "School Name",
  "address": "School Address",
  "latitude": 12.345678,
  "longitude": 98.765432
}
Response:

json

{
  "message": "School added successfully!",
  "schoolId": 1
}
List Schools
GET /api/listSchools
Lists all schools, sorted by proximity to the provided latitude and longitude.

Reset Schools Table
POST /api/resetSchoolsTable
Resets the schools table, deleting all entries and recreating the table structure.

Contributing
Feel free to fork the project and submit pull requests. 
For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.

Contact
For any inquiries or issues, please contact [ayushsakalkale30@gmail.com].
