const settingPage = async (req, res) => {
    res.render("admin/settings", { title: "Settings" });
}

module.exports = { settingPage }