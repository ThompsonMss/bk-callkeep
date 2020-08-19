function makeStyle() {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100vh",
    },

    title: {
      fontSize: "60px",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    titleNotBound: {
      fontSize: "60px",
      textTransform: "uppercase",
    },

    containerForm: {
      marginTop: "60px",
    },

    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "350px",
    },

    label: {
      fontSize: "18px",
    },
    input: {
      height: "80px",
      width: "350px",
      border: "1px solid #3E3E3E",
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "4px",
      resize: "none",
      fontFamily: "Poppins, sans-serif",
    },
    button: {
      height: "50px",
      width: "372px",
      borderRadius: "4px",
      border: "1px solid #4834d4",
      backgroundColor: "#686de0",
      color: "#FFF",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontFamily: "Poppins, sans-serif",
      cursor: "pointer",
    },
  };
}

module.exports = makeStyle;
