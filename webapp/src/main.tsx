import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./main.css";
import Home from "./pages/home";
import Friends from "./pages/friends";
import Catalog from "./pages/catalog";
import Marketplace from "./pages/marketplace";
import Layout from "./layout";
import Bike from "./pages/bikeView";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/bike" element={<Bike />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
