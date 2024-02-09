const multer = require('multer')
const path = require('path')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files')
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
});


const fileFilter = (req, file, cb) => {
    const fileName = path.extname(file.originalname);
    if (["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"].includes(fileName.substring(1))) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only jpeg, jpg, png, files are allowed.'), false);
    }
};

const upload = multer({ storage: storage, limits: { fileSize: 10485760 }, fileFilter });

module.exports = upload;