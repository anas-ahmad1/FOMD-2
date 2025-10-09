import teamMember1 from "../../assets/teamMember1.jpg";
import teamMember2 from "../../assets/teamMember2.jpg";
import teamMember3 from "../../assets/teamMember3.png";
import teamMember4 from "../../assets/teamMember4.jpg";

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
    <div className="container py-5">
      <h1
        className="text-center text-white display-5 fw-bold"
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
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
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
  );
};

export default AboutUs;
