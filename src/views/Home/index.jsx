const React = require("react");

const MainLayout = require("../_layouts/Main");

const makeStyle = require("./styles");

function Home(props) {
  const [token, setToken] = React.useState(props.token);

  const styles = makeStyle();

  return (
    <MainLayout>
      <div style={styles.container}>
        <div>
          <span style={styles.title}>Call</span>
          <span style={styles.titleNotBound}>Keep</span>
        </div>

        <div style={styles.containerForm}>
          <form style={styles.form}>
            <span style={styles.label}>Seu token firebase: </span>
            <textarea
              placeholder="Insira o seu token"
              style={styles.input}
              rows="5"
              cols="40"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <button style={styles.button}>Realizar chamada</button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

module.exports = Home;
