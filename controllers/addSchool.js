import {connection as db} from "../db.js";

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

  const sql =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  try {
    const [result] = await db.query(sql, [name, address, latitude, longitude]);
    //console.log("Query Result:", result);
    res
      .status(201)
      .json({message: "School added successfully!", schoolId: result.insertId});
  } catch (err) {
    console.error("Error executing query:", err.message);
    res.status(500).json({error: "Internal Server Error"});
  }
};

export default addController;
