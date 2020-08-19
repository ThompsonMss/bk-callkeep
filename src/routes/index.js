function routes(route) {
  route.get("/", (req, res) => {
    const { token } = req.query;
    res.render("Home/index", { token: token });
  });
}

module.exports = routes;
