import { TextField } from "@mui/material";
import { useMainContext } from "../context/MainContext";

function TextFieldCustom() {
  const { inputValue, setInputValue } = useMainContext();
  return (
    <>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        inputProps={{
          style: {
            color: "white",
          },
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
}

export default TextFieldCustom;
