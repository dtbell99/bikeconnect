import { Link } from "react-router";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
      <section className="hero-card text-center" style={{ paddingBlock: "4rem" }}>
        <h1>Welcome to BikeConnect</h1>
        <p style={{ maxWidth: "600px", marginInline: "auto", fontSize: "1.2rem" }}>
          The modern platform connecting cyclists, local communities, and premium gear catalogs. Log in to track your setups or explore local gear.
        </p>
        <div className="flex-center gap-md" style={{ marginBlockStart: "1.5rem" }}>
          <Link to="/login" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/catalog" className="btn btn-secondary">
            Browse Catalog
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-center">Designed for the Modern Rider</h2>
        <p className="text-center" style={{ maxWidth: "500px", marginInline: "auto", marginBlockEnd: "3rem" }}>
          Everything you need to keep your bike setups in check and connect with local cycling catalogs.
        </p>
        
        <div className="grid-features">
          <div className="feature-box">
            <span className="feature-icon" aria-hidden="true">🚴</span>
            <h3>Connect</h3>
            <p>
              Link up with riders in your city, discover local group rides, and share route recommendations.
            </p>
          </div>
          
          <div className="feature-box">
            <span className="feature-icon" aria-hidden="true">⚙️</span>
            <h3>Gear Catalog</h3>
            <p>
              Browse and filter the latest road, mountain, gravel bikes, parts, and apparel from elite catalogs.
            </p>
          </div>
          
          <div className="feature-box">
            <span className="feature-icon" aria-hidden="true">🔧</span>
            <h3>Bike Setup</h3>
            <p>
              Manage your bikes, track component mileage, and plan maintenance logs all in one place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
