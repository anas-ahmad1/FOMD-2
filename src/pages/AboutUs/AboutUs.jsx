import teamMember1 from "../../assets/teamMember1.webp";
import teamMember2 from "../../assets/teamMember2.webp";
import teamMember3 from "../../assets/teamMember3.webp";
import teamMember4 from "../../assets/teamMember4.webp";
import { Helmet } from "react-helmet";
import socialImage from "../../assets/logo.webp";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Neal Birak",
      image: teamMember1,
      description:
        "Neal Birak is a seasoned passionate real estate professional and co-founder of Flip On My Dime, bringing years of experience in buying, selling, developing and investing in homes. Known for his honesty, integrity, and boutique approach, Neal provides personalized guidance that helps homeowners maximize equity, navigate complex sales, and make confident, informed decisions. He also has extensive knowledge of construction and design and has been consulting on new construction projects, giving him a unique ability to evaluate properties and advise clients on renovations or investments. Beyond real estate, Neal is an active community leader and youth coach, dedicated to mentoring and giving back, and he approaches everything he does with passion, energy, and unwavering commitment. Neal's mission is to make buying or selling a home stress-free, profitable, and personal, while positively impacting the community along the way.",
    },
    {
      id: 2,
      name: "Puja Birak",
      image: teamMember2,
      description:
        "Puja Birak is a dedicated real estate professional and co-founder of Flip On My Dime, committed to providing a boutique, ethical, and highly personalized experience for every client. Puja has a sharp eye for unlocking a home's full potential through strategic renovations, ensuring clients not only sell but sell smart. Known for a hands-on approach, Puja often invests personal time and resources into properties to maximize client returns, elevating homes so they stand out in the market. With a background in counseling, Puja brings strong interpersonal skills to every transaction and leverages this expertise in extensive, strategic negotiations that protect client interests. Passionate, dedicated, and attentive, Puja tailors strategies to each client's unique needs, providing guidance, care, and expertise that make every real estate journey smooth, profitable, and stress-free.",
    },
    {
      id: 3,
      name: "Eagle Star",
      image: teamMember3,
      description:
        "Eagle Star Contracting is the exclusive home remodeling partner for our clients, specializing in custom interior and exterior renovations. With over 20 years of experience, they bring meticulous craftsmanship, attention to detail, and reliable service to every project. Eagle Star Contracting provides tailored solutions and expert guidance to ensure your home reaches its full potential. As our trusted partner, they combine integrity, professionalism, and exceptional skill to deliver beautiful, lasting results every time.",
    },
    {
      id: 4,
      name: "Cathy Grilli",
      image: teamMember4,
      description:
        "Cathy Grilli is an award-winning home staging company based in Seabrook, Texas. She is one of only two certified Master Stagers in the state of Texas. Before establishing Funkswank Design, Cathy gained hands-on experience by flipping houses, which gave her a deep understanding of how staged homes can significantly enhance buyer appeal. This expertise allows her to transform vacant or underwhelming spaces into inviting, market-ready environments that help properties sell faster and at top dollar.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          About Us | Flip on My Dime — Ethical, Low Commission Realtors in
          Houston
        </title>

        <meta
          name="description"
          content="Flip on My Dime is a Houston-based, ethical real estate company offering low-commission realtor services, fair cash offers, and full-service renovation-to-sale solutions. Meet the team committed to transparency, value, and helping homeowners sell for top dollar."
        />

        <meta
          name="keywords"
          content="ethical real estate company, low commission realtor Houston, full service realtor low fees, fair honest cash offer, cash home buyers Houston, renovate before you sell, sell your home for less commission, Houston real estate experts"
        />

        <link rel="canonical" href="https://fliponmydime.com/about-us" />

        <meta
          property="og:title"
          content="Meet the Team: The Ethical, Low Commission Realtors of Flip on My Dime"
        />
        <meta
          property="og:description"
          content="Learn about Neal, Puja, and our partners. We are Houston's trusted real estate experts committed to transparency, value, and maximizing your home sale profit."
        />
        <meta property="og:url" content="https://fliponmydime.com/about-us" />
        <meta property="og:site_name" content="Flip on My Dime" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Houston Real Estate Experts: Meet the Flip on My Dime Team"
        />
        <meta
          name="twitter:description"
          content="Our co-founders and partners bring expertise in renovations, low commission sales, and ethical real estate investing to every client."
        />
        <meta name="twitter:image" content={socialImage} />

        <script type="application/ld+json">
          {`{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Flip on My Dime",
      "url": "https://fliponmydime.com/about-us",
      "telephone": "+1-713-497-6931",
      "description": "Flip on My Dime is a Houston-based real estate company offering low commission realtor services, cash home purchases, and renovation-first selling strategies with transparent fees.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Clear Lake City",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "areaServed": ["Houston","Pearland","Friendswood","Clear Lake","League City","Sugar Land"],
      "sameAs": ["https://fliponmydime.com/"]
    }`}
        </script>
      </Helmet>
      <div className="container py-5">
        <h1
          className="text-center text-white display-5"
          style={{
            margin: "6rem 0",
            fontFamily: "Quicksand, sans-serif",
            textTransform: "uppercase",
          }}
        >
          About Our Team
        </h1>

        {teamMembers.map((member, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={member.id} className="row align-items-center mb-5 pb-4">
              <div
                className={`col-12 col-lg-4 text-center mb-4 mb-lg-0 ${
                  !isEven ? "order-lg-last" : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle img-fluid"
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="col-12 col-lg-8 px-4 px-sm-2 px-md-0">
                <h2
                  className="mb-4 text-white text-center text-lg-start"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  {member.name}
                </h2>
                <p
                  className="text-white"
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  {member.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AboutUs;
