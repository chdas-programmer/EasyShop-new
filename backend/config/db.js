// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log(`Successfully connnected to mongoDB 👍`);
//   } catch (error) {
//     console.error(`ERROR: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({ path: ".env" });

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "EasyShop",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};

export default dbConnection;
