const commentPage = async (req, res) => {
    res.render("admin/comments/comments", { title: "Comments" });
};

module.exports = { commentPage };