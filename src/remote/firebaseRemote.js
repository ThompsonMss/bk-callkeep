var admin = require("firebase-admin");
var serviceAccount = require("../config/firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://callkeep-acb19.firebaseio.com",
});

export function sendMessageSilent(token) {
    
  const message = {
    data: {
      call: true,
    },
    token: token,
  };

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
