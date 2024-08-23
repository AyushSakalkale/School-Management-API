import {connection as db} from "../db.js";

const createSchoolsTable = async () => {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      latitude FLOAT NOT NULL,
      longitude FLOAT NOT NULL
    );
  `;
  try {
    await db.query(createTableSQL);
  } catch (err) {
    console.error("Error creating table 'schools':", err.message);
    throw new Error("Table creation failed");
  }
};

const addController = async (req, res) => {
  const {name, address, latitude, longitude} = req.body;

  if (
    !name ||
    !address ||
    typeof latitude !== "number" ||
    typeof longitude !== "number"
  ) {
    return res.status(400).json({error: "Invalid input data"});
  }

  try {
    await createSchoolsTable();

    const checkSQL = "SELECT * FROM schools WHERE name = ? AND address = ?";
    const [existingSchool] = await db.query(checkSQL, [name, address]);

    if (existingSchool.length > 0) {
      return res
        .status(409)
        .json({message: "This school is already in the database."});
    }

    const insertSQL =
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    const [result] = await db.query(insertSQL, [
      name,
      address,
      latitude,
      longitude,
    ]);

    res
      .status(201)
      .json({message: "School added successfully!", schoolId: result.insertId});
  } catch (err) {
    console.error("Error executing query:", err.message);
    res.status(500).json({error: "Internal Server Error"});
  }
};

export default addController;
