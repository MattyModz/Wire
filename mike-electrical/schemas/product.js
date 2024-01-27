export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "commerical",
      title: "Planning",
      type: "array",
      of: [{ type: "reference", to: { type: "planning" } }],
    },
    {
      name: "domestic",
      title: "Domestic",
      type: "array",
      of: [{ type: "reference", to: { type: "domestic" } }],
    },
    {
      name: "industrial",
      title: "Industrial",
      type: "array",
      of: [{ type: "reference", to: { type: "industrial" } }],
    },
  ],
};
