const fs = require("fs");
const path = require("path");

class ImageField {
  constructor(folder = "images", fallback = "images/no-image.png") {
    this.folder = folder;
    this.fallback = fallback;
    this.uploadPath = path.join("public/uploads/", this.folder);

    fs.mkdirSync(this.uploadPath, { recursive: true });
  }

  storeFile(file) {
    if (!file) return null;

    const fileName = Date.now() + "-" + file.originalname;
    const fullPath = path.join(this.uploadPath, fileName);

    fs.writeFileSync(fullPath, file.buffer);
    return `${this.folder}/${fileName}`;
  }

  delete(filePath) {
    if (!filePath) return;

    const fullPath = path.join("public/uploads/", filePath);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }

  url(filePath) {
    return filePath ? `/uploads/${filePath}` : `/${this.fallback}`;
  }
}

module.exports = ImageField;
