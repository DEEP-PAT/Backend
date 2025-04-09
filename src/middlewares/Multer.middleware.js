import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp"); // Specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // Generate a unique filename
        cb(null, file.originalname); // Append the original file extension
    }
});

export const upload = multer({storage:storage})