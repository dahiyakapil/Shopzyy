export const generateSlug = (text) => {
    return text
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[\s\W-]+/g, "-") // replace spaces and non-word chars with -
        .replace(/^-+|-+$/g, "");  // remove starting/ending -
};
