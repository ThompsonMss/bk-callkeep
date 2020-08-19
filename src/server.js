const app = require("express")();
const cors = require("cors");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(cors());

const routes = require("./routes");

routes(app);

app.listen(process.env.PORT | 5000, () => console.log("Server started."));
