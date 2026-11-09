// Add a new blog by pasting an entry at the TOP of this array (newest first).
//
// {
//   id: "unique-slug",                       // unique, lowercase, no spaces
//   title: "Blog title",
//   author: "Neal Birak",
//   date: "2025-11-01",                      // YYYY-MM-DD
//   thumbnail: "/blog-thumbs/my-blog.webp",  // file placed in /public/blog-thumbs, or a full URL
//   pdfUrl: "https://example.com/my-blog.pdf", // external URL, or "/blog-pdfs/x.pdf" if hosted in /public
//   description: "1-2 keyword-rich sentences. Shown on the card and used for SEO.",
//   keywords: ["sell house Houston", "low commission realtor"], // used for SEO meta + JSON-LD
// },
const blogs = [];

export default blogs;
