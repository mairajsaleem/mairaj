import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Layout } from "./components";
import { themes } from "./utils";
import { BrowserRouter as Router } from "react-router-dom";
import { AllRoutes } from "@utils";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={themes[1]}>
        <CssBaseline />
        <Layout>
          <AllRoutes />
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
