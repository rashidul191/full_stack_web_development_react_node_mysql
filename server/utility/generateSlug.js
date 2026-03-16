const slugify = require("slugify");

const generateUniqueSlug = async (Model, title) => {
  let slug = slugify(title, { lower: true, strict: true });

  let existing = await Model.findOne({ where: { slug } });

  let count = 1;

  while (existing) {
    const newSlug = `${slug}-${count}`;
    existing = await Model.findOne({ where: { slug: newSlug } });

    if (!existing) {
      slug = newSlug;
      break;
    }

    count++;
  }

  return slug;
};

module.exports = generateUniqueSlug;
