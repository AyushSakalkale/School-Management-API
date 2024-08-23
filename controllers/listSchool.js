import {connection as db} from "../db.js";

//reference of formulas taken from gfg
const haversine = (lat1, lon1, lat2, lon2) => {
  function toRad(x) {
    return (x * Math.PI) / 180;
  }

  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const listSchool = async (req, res) => {
  const {latitude, longitude} = req.body;

  const userLat = parseFloat(latitude);
  const userLon = parseFloat(longitude);
  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({error: "Invalid input data"});
  }

  const sql = "SELECT * FROM schools";

  try {
    const [results] = await db.query(sql);
    results.forEach((school) => {
      school.distance = haversine(
        userLat,
        userLon,
        school.latitude,
        school.longitude
      );
    });

    results.sort((a, b) => a.distance - b.distance);

    res.status(200).json(results);
  } catch (err) {
    console.error("Error executing query:", err.message);
    res.status(500).json({error: "Internal Server Error"});
  }
};

export default listSchool;
