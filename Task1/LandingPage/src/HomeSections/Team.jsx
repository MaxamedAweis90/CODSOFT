const Team = () => {
  const team = [
    {
      name: "Bob Smith",
      role: "Chief Technology Officer",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Clara Williams",
      role: "Head of Marketing",
      img: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      name: "David Brown",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/men/48.jpg",
    },
  ];

  return (
    <div className="wrapper">
      <section id="team" className="team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.img} alt={member.name} className="team-img" />
                <div className="caption">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
