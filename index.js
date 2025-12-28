const express = require('express');
require('dotenv').config();
const cookieParser =require ("cookie-parser");
const authRoutes = require('./routes/authRouters');
const notesRouter=require("./routes/notesRouter");
const path = require('path');
const app = express();

// ✅ REQUIRED to read JSON body
app.use(express.json());
app.use(cookieParser());

app.use("/static", express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authRoutes);
app.use("api/notes",notesRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
