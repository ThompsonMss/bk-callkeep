const app = require("express")();
const cors = require("cors");

app.use(cors());

const routes = require("./routes");

routes(app);

app.listen(process.env.PORT | 5000, () => console.log("Server started."));
