import { URL } from "../config/app";

export const imageUrl = (path) => {
  const baseURL = URL || "http://localhost:5000/api";

  if (!path) {
    return `${baseURL}/images/no-image.png`;
  }

  return `${baseURL}/uploads/${path}`;
};
