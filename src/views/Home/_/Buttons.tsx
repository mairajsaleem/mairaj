import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export function Buttons() {
  return (
    <Stack spacing={5} direction="row" sx={{ m: 2 }}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
