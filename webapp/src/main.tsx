import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./main.css";
import Home from "./home";
import Friends from "./friends";
import Catalog from "./catalog";
import Marketplace from "./marketplace";
import Layout from "./layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
