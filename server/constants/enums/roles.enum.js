const Roles = {
  NONE: 0,
  ADMIN: 1,
  USER: 2,
  MANAGER: 3,
};

const RoleLabels = Object.fromEntries(
  Object.entries(Roles).map(([key, value]) => [
    value,
    key.charAt(0) + key.slice(1).toLowerCase(),
  ]),
);

module.exports = { Roles, RoleLabels };
