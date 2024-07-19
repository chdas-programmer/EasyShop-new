// import path from "path";
// import express from "express";
// import multer from "multer";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },

//   filename: (req, file, cb) => {
//     const extname = path.extname(file.originalname);
//     console.log(extname)
//     cb(null, `${file.fieldname}-${Date.now()}${extname}`);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const filetypes = /jpe?g|png|webp/;
//   const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

//   const extname = path.extname(file.originalname).toLowerCase();
//   const mimetype = file.mimetype;

//   if (filetypes.test(extname) && mimetypes.test(mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Images only"), false);
//   }
// };

// const upload = multer({ storage, fileFilter });
// const uploadSingleImage = upload.single("image");


// router.post("/", (req, res) => {
//   uploadSingleImage(req, res, (err) => {
//     if (err) {
//       res.status(400).send({ message: err.message });
//     } else if (req.file) {
//       res.status(200).send({
//         message: "Image uploaded successfully",
//         image: `/${req.file.path}`,
//       });
//     } else {
//       res.status(400).send({ message: "No image file provided" });
//     }
//   });
// });

// export default router;


import express from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary'; // Ensure this path is correct
import { Readable } from 'stream';

// Initialize Express Router
const router = express.Router();

// Configure Multer to use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Function to upload a buffer to Cloudinary
const streamUpload = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      { folder: 'uploads' }, // Optional: specify a folder for Cloudinary
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    Readable.from(file.buffer).pipe(stream);
  });
};

// Route to handle image uploads
router.post('/', upload.single('image'), async (req, res) => {
  try {
    // Check if a file is provided
    if (!req.file) {
      return res.status(400).send({ message: 'No image file provided' });
    }

    // Upload image to Cloudinary
    const result = await streamUpload(req.file);

    // Respond with the Cloudinary image URL
    res.status(200).send({
      message: 'Image uploaded successfully',
      image: result.secure_url, // URL to the uploaded image
    });
  } catch (error) {
    // Handle errors
    res.status(400).send({ message: error.message });
  }
});

export default router;
