const CommonStatus = {
  InActive: 0,
  Active: 1,

  // isValid(value) {
  //   return [0, 1, 2, 3].includes(value);
  // },

  // getName(value) {
  //   return Object.keys(this).find((key) => this[key] === value);
  // },
};

Object.freeze(CommonStatus);

module.exports = { CommonStatus };
