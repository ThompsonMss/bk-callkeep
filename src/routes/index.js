import { sendMessageSilent } from "../remote/firebaseRemote";

function routes(route) {
  route.post("/call", (req, res) => {
    const { token } = req.body;

    try {
      if (!token) {
        throw new Error("O token é obrigatório.");
      }

      sendMessageSilent(token);

      res.status(200).json({ sucesso: "Chamada enviada." });
    } catch (error) {
      res.json({ error: error });
    }
  });
}

module.exports = routes;
