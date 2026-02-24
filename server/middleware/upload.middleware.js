const multer = require("multer");
const fs = require("fs");
const path = require("path");

const uploadFile = (folder = "") => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = path.join(process.cwd(), "public", "uploads", folder);

      fs.mkdirSync(uploadPath, { recursive: true });

      cb(null, uploadPath);
    },

    filename: function (req, file, cb) {
      const uniqueName = Date.now() + "-" + file.originalname;
      cb(null, uniqueName);
    },
  });

  return multer({ storage });
};

module.exports = uploadFile;
