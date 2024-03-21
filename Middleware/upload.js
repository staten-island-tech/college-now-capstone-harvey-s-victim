    const path = require("path");
    const multer = require("multer");
    const multerOptions = {
      storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "Uploads");
        },
        filename: function (req, file, cb) {
          cb(null, Date.now() + path.extname(file.originalname));
        },
      }),
      fileFilter: function (req, file, next) {
        //can also set limit in multer
        const isPhoto = file.mimetype.startsWith("image/");
        if (isPhoto) {
          next(null, true); //callback function, first value is error, second value gets passed on if no error
        } else
          ({
            message: "That filetype is not allowed",
          }),
            false;
      },
    };

    const upload = multer(multerOptions)

    module.exports.send = (req, res, next) => {
      return upload.single("photo")(req, res, () => {
        try {
           if(!req.file){
          res.json({ success: false, msg: "Please upload a valid file"})
        }
        next()
        } catch (error) {
          res.status(500).json(error)
        }
      })
    }