const categoryPage = async (req, res) => {
    res.render("admin/categories/category", { title: "Category" });
}


const addCategoryPage = async (req, res) => {
    res.render("admin/categories/add-category", { title: "Add Category" });
}

const updateCategoryPage = async (req, res) => {
    res.render("admin/categories/update-category", { title: "Update Category" });
}

module.exports = {
    categoryPage,
    addCategoryPage,
    updateCategoryPage
}   