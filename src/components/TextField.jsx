import React from "react";

function TextField() {
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
      />
    </>
  );
}

export default TextField;
