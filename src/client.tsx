import { StrictMode } from "react";
import { hydrate, render } from "react-dom";

import { Routes } from "@/config";
import { enableMapSet } from "immer";
enableMapSet();

function Client() {
  return (
    <StrictMode>
      <Routes />
    </StrictMode>
  );
}

const app = document.querySelector("#app") as Element;

if (app.hasChildNodes()) hydrate(<Client />, app);
else render(<Client />, app);
