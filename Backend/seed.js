import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./model/book.model.js";
import books from "./books.json" assert { type: 'json' };

dotenv.config();


mongoose.connect(process.env.MongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(async () => {
        console.log('Connected to MongoDB...');
        await Book.deleteMany({});
        console.log('Old data deleted.');

        await Book.insertMany(books);
        console.log('Books seeded successfully!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    })
    .finally(() => {
        mongoose.connection.close();
    });
