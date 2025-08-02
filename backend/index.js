const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const issueRoutes = require('./routes/issue.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const app = express();
const dotenv = require('dotenv');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.get('/', (req, res) => {
  res.send('Hello, World!');
}
);
app.use('/api/issues', issueRoutes);
app.use('/api/auth', authRoutes);
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
    
  console.log('Server is running on http://localhost:3000');
}   );
    }).catch(err => {
    console.error('MongoDB connection error:', err);
    });

