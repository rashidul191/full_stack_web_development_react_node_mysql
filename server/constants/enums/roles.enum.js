const Roles = {
  ADMIN: 0,
  USER: 1,
  MANAGER: 2,
  SELLER: 3,

  // isValid(value) {
  //   return [0, 1, 2, 3].includes(value);
  // },

  // getName(value) {
  //   return Object.keys(this).find((key) => this[key] === value);
  // },
};

Object.freeze(Roles);

module.exports = { Roles };
