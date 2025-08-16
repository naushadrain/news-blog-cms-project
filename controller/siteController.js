// Controller
const index = (req, res) => {
  // Render by view name, not path
  res.render("index",{title:"Home"});
};

// EXPORT IT!
module.exports = { index };
