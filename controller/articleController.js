const index = async (req, res) => {
    res.render("admin/articles/article", { title: "Articals" });
};
const addArticalPage = async (req, res) => {
    res.render("admin/articles/add-article", { title: "Add Artical" });
};

const updateArticalPage = async (req, res) => {
    res.render("admin/articles/update-article", { title: "Update Artical" });
};

module.exports = { index, addArticalPage, updateArticalPage };