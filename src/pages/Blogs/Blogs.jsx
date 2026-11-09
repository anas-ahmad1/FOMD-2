import { Helmet } from "react-helmet";
import blogs from "../../data/blogs";
import "./Blogs.css";

const SITE = "https://postoakrealtytx.com";
const absolute = (u) => (u && u.startsWith("/") ? `${SITE}${u}` : u);

const formatDate = (iso) => {
  const d = new Date(`${iso}T00:00:00`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
};

const Blogs = () => {
  const allKeywords = [
    "Houston real estate blog",
    "selling a home in Houston",
    ...blogs.flatMap((b) => b.keywords || []),
  ].join(", ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Post Oak Realty Advisors Blog",
    url: `${SITE}/blogs`,
    publisher: { "@type": "Organization", name: "Post Oak Realty Advisors" },
    blogPost: blogs.map((b) => ({
      "@type": "BlogPosting",
      headline: b.title,
      description: b.description,
      datePublished: b.date,
      author: { "@type": "Person", name: b.author },
      image: absolute(b.thumbnail),
      url: absolute(b.pdfUrl),
      keywords: (b.keywords || []).join(", "),
    })),
  };

  return (
    <>
      <Helmet>
        <title>Blog | Houston Real Estate Tips | Post Oak Realty Advisors</title>
        <meta
          name="description"
          content="Houston real estate insights from Post Oak Realty Advisors: tips on selling your home, low commission realtor services, cash offers and more."
        />
        <meta name="keywords" content={allKeywords} />
        <link rel="canonical" href={`${SITE}/blogs`} />
        <meta property="og:title" content="Blog | Post Oak Realty Advisors" />
        <meta
          property="og:description"
          content="Houston real estate insights and tips from Post Oak Realty Advisors."
        />
        <meta property="og:url" content={`${SITE}/blogs`} />
        <meta property="og:site_name" content="Post Oak Realty Advisors" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="blogs-page">
        <header className="blogs-header">
          <h1>Blog</h1>
          <p>Real estate insights from the Post Oak Realty Advisors team.</p>
        </header>

        {blogs.length === 0 ? (
          <p className="blogs-empty">New articles are coming soon.</p>
        ) : (
          <div className="blogs-grid">
            {blogs.map((b) => (
              <a
                key={b.id}
                className="blog-card"
                href={b.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Read: ${b.title} (PDF)`}
              >
                <div className="blog-thumb">
                  <img src={b.thumbnail} alt={b.title} loading="lazy" />
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span>{b.author}</span>
                    <span aria-hidden="true">•</span>
                    <time dateTime={b.date}>{formatDate(b.date)}</time>
                  </div>
                  <h2>{b.title}</h2>
                  <p>{b.description}</p>
                  <span className="blog-link">Read article (PDF) &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Blogs;
