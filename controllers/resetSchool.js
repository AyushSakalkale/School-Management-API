import {connection as db} from "../db.js";

const resetSchoolsTable = async (req, res) => {
  const dropTableSQL = "DROP TABLE IF EXISTS schools";
  const createTableSQL = `
    CREATE TABLE schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      latitude FLOAT NOT NULL,
      longitude FLOAT NOT NULL
    );
  `;

  try {
    await db.query(dropTableSQL);
    console.log("Table 'schools' dropped successfully.");

    await db.query(createTableSQL);
    console.log("Table 'schools' created successfully.");

    res
      .status(200)
      .json({message: "Schools table has been reset successfully."});
  } catch (err) {
    console.error("Error resetting the 'schools' table:", err.message);
    res.status(500).json({error: "Internal Server Error"});
  }
};

export default resetSchoolsTable;
