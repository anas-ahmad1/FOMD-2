import "./OurTeam.css";
import teamMember1 from "../../assets/teamMember1.jpg";
import teamMember2 from "../../assets/teamMember2.jpg";
import teamMember3 from "../../assets/teamMember3.png";
import teamMember4 from "../../assets/teamMember4.jpg";

const OurTeam = () => {
  const partners = [
    {
      id: 1,
      name: "Neal Birak",
      title: "Founder",
      description:
        "A seasoned real estate professional with expertise in buying, selling, and construction.",
      image: teamMember1,
      order: "order-lg-1",
    },
    {
      id: 2,
      name: "Puja Birak",
      title: "Co-Founder",
      description:
        "Dedicated to unlocking every home's potential with a boutique, client-first approach.",
      image: teamMember2,
      order: "order-lg-3",
    },
    {
      id: 3,
      name: "Eagle Star Contracting",
      title: "Exclusive Remodeling Partner",
      description:
        "Over 20 years of craftsmanship, delivering custom renovations with integrity and precision.",
      image: teamMember3,
      order: "order-lg-2",
    },
    {
      id: 4,
      name: "Cathy Grilli",
      title: "Home Staging Partner",
      description:
        "Award-winning Master Stager transforming homes into market-ready showcases.",
      image: teamMember4,
      order: "order-lg-4",
    },
  ];

  return (
    <>
      <section className="d-flex align-items-center bg-custom-dark text-white py-5 py-lg-6 min-vh-75">
        <div className="container py-4 py-lg-5 px-4 px-lg-5 h-100">
          <div className="row g-5 gx-lg-6 gy-lg-6 h-100">
            {partners.map((partner) => (
              <div key={partner.id} className={`col-lg-6 ${partner.order}`}>
                <div className="d-flex align-items-center gap-3 gap-md-4">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="rounded-circle flex-shrink-0 partner-img"
                  />
                  <div className="flex-grow-1">
                    <h3 className="h4 fw-normal mb-1 partner-title">
                      {partner.name}
                    </h3>
                    <p className="text-secondary small mb-2 pb-2 border-bottom border-secondary partner-content">
                      {partner.title}
                    </p>
                    <p className="small text-light mb-0 partner-content">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
