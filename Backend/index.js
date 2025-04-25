import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import queryRoute from "./route/query.route.js"
const app = express();

app.use(cors({
    origin: '*', // Allow all origins for now
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    optionsSuccessStatus: 200
}));

// Handle OPTIONS requests (preflight)
app.options('*', cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}
// Add a root route for testing
app.get('/', (req, res) => {
    res.send('BookStore API is running');
});
// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/query", queryRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});