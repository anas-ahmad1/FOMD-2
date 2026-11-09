import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => (
  <main
    style={{
      background: "#1e2020",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "6rem 1.5rem",
      fontFamily: '"Quicksand", sans-serif',
    }}
  >
    <Helmet>
      <title>Page Not Found | Post Oak Realty Advisors</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <h1 style={{ fontWeight: 300, fontSize: "3rem" }}>404</h1>
    <p>Sorry, we couldn&apos;t find that page.</p>
    <Link to="/" style={{ color: "white", textDecoration: "underline" }}>
      Back to home
    </Link>
  </main>
);

export default NotFound;
