import { Box, Typography } from "@mui/material";
import "./App.css";
import TextFieldCustom from "./components/TextFieldCustom";
import { useMainContext } from "./context/MainContext";

function App() {
  const { inputValue } = useMainContext();

  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);

  const crypt = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) =>
      textToChars(salt).reduce((a, b) => a ^ b, code);

    return text
      .split("")
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join("");
  };

  return (
    <Box>
      <Typography variant="h3" color="InfoText" sx={{ mb: "50px" }}>
        Type here
      </Typography>
      <TextFieldCustom />
      <Typography variant="h5" mt="50px" sx={{ color: `#${randomColor}` }}>
        {crypt("salt", inputValue)}
      </Typography>
    </Box>
  );
}

export default App;
