import Add from "../components/add";
import Auth from "../components/auth";

function Catalog() {
  return (
    <div style={{ maxInlineSize: "600px", marginInline: "auto" }}>
      <Auth />
      <h1 style={{ marginBlockEnd: "1.5rem" }}>Catalog</h1>
      <p style={{ marginBlockEnd: "2rem" }}>
        Add items directly to the BikeConnect inventory. Select a category and click Create.
      </p>
      <Add />
    </div>
  );
}

export default Catalog;
