import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
=======
import { ThemeProvider } from "styled-components";

>>>>>>> refs/remotes/origin/main
import theme from "./styles/theme";

import { Details } from "./pages/Details";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <GlobalStyles />
=======
>>>>>>> refs/remotes/origin/main
      <Details />
    </ThemeProvider>
  </React.StrictMode>
);
