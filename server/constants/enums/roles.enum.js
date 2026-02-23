const Roles = {
  NONE: 0,
  ADMIN: 1,
  USER: 2,
  MANAGER: 3,

  // isValid(value) {
  //   return [0, 1, 2, 3].includes(value);
  // },

  // getName(value) {
  //   return Object.keys(this).find((key) => this[key] === value);
  // },
};

Object.freeze(Roles);

module.exports = { Roles };
