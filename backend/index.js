const express = require("express");

const userRoutes = require("./routes/donationFormRoutes");
const cors = require("cors");
const app = express();
const db = require("./db");
const donationFormRoutes = require("./routes/donationFormRoutes");
const newsletterFormRoutes = require("./routes/newsletterFormRoutes");
app.use(cors());

app.use(express.json());

// Use donation routes
app.use("/", donationFormRoutes);
// Contact form routes
app.use("/", newsletterFormRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
