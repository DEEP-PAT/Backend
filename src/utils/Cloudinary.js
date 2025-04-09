import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw new Error('No file path provided');
        }
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        })
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); // Delete the file if upload fails from local storage
        console.error('Error uploading to Cloudinary:', error.message);
        return null;
    }
}



export { uploadOnCloudinary };