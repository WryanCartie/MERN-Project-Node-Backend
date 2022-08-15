const multer = require('multer')

const MINE_TYPE_MAP = {
    'image.jpg':'jpg',
    'image.jpeg':'jpeg',
    'image.png':'png'
}
const fileUpload = multer({
    limits: 50000,
    storage: multer.diskStorage({
        destination :(req,res,file) =>{
            cb('null','uploads/images')
        },
        filename: (req,file,cb) =>{
            const ext = MINE_TYPE_MAP(file.mimetype)
            cb(nullm,uuid()+'.'+ext)
        }
    })
})

module.exports = fileUpload