import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout";
import Home from "./pages/home";
import Catalog from "./pages/catalog";
import Login from "./pages/login";
import Setup from "./pages/setup";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setup" element={<Setup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
