var admin = require("firebase-admin");
var serviceAccount = require("../config/firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://callkeep-acb19.firebaseio.com",
});

function sendMessageSilent(token) {
  let message = { notification: { title: 'title', body: 'body' }, token: token };

  admin
    .messaging()
    .send(message)
    .then((response) => {
      console.log("Chamada realizada.");
    })
    .catch((error) => {
      console.log("Falha ao realizar chamada.");
    });
}

module.exports = sendMessageSilent;
