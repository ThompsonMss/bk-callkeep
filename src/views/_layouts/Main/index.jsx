const React = require("react");
const makeStyle = require("./styles");

function Main({ children }) {
  const styles = makeStyle();

  return (
    <html lang="pt" style={styles.hb}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <title>Chamadas nativas com React Native.</title>
      </head>
      <body style={styles.hb}>
        <div>{children}</div>
      </body>
    </html>
  );
}

module.exports = Main;
