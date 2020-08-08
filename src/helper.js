import slugify from "slugify";

export const getSlugURL = (title) => {
  return slugify(title, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: false,
  });
};
