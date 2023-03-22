const multer = require('multer')
const { v4: uuid } = require("uuid");
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg'
};

cloudinary.config({
  cloud_name: 'dnljmubda',
  api_key: '966564657964463',
  api_secret: 'OVRAX3WrfccStYBziZ2bVZf7y8k'
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder:'/uploads/images',
    allowedFormats: ['jpg','jpeg','png'],
    transformation: [{width:500,height:500,crop:'limit'}]
  }

})

const fileUpload = multer({storage:storage})


module.exports = fileUpload;
