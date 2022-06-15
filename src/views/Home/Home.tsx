import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Buttons } from "./_";

const StyledAppBar = styled(AppBar)(() => ({
  //just to check custom styling
  backgroundColor: "red",
}));

export function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar> */}

      <Buttons />
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h1" color="primary">
        Heading 1
      </Typography>
      <Typography variant="h2">Heading2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body1">body 1</Typography>
      <Typography variant="body2">body 2</Typography>
      <Typography variant="button">button</Typography>
    </Box>
  );
}
