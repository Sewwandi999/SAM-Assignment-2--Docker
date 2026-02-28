const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve Assignment 1 frontend
app.use(express.static(path.join(__dirname, "src/public")));

// Health check (optional but useful)
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const healthRoutes = require("./src/routes/health.routes");
app.use("/api", healthRoutes);