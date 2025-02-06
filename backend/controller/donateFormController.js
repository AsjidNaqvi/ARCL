const pool = require("../db"); // Import the database connection from db.js

// Controller function to handle donation submissions
exports.createDonation = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !phoneNumber || !email) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Insert data into the donations table
    const query =
      "INSERT INTO donations (first_name, last_name, phone_number, email, message) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [firstName, lastName, phoneNumber, email, message];

    // Use the pool from db.js to execute the query
    const result = await pool.query(query, values);

    // Respond with success message and saved data
    res.status(201).json({
      message: "Thank you for your generous donation!",
      donation: result.rows[0],
    });
  } catch (error) {
    console.error("Error saving donation:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the donation." });
  }
};
