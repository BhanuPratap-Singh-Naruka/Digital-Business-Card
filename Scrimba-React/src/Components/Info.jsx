const Info = () => {
  return (
    <div className="info">
      <h3>Bhanu Pratap</h3>
      <p className="title">Frontend Developer</p>
      <p className="website">
        <a href="#">bahnu.website</a>
      </p>
      <div className="btn">
        <button className="email" id="email-btn">
          <a href="#">
            <i class="fa-solid fa-envelope"></i>Email
          </a>
        </button>
        <button className="linkdin">
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>Linkdin
          </a>
        </button>
      </div>

      <div className="info-section">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          repellat omnis doloremque quia aperiam, ducimus ullam eaque. Eius
          esse, est aliquam nihil fugiat molestiae sint possimus praesentium
          voluptates, animi sed?
        </p>

        <h2>Interests</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          consequuntur esse veniam nam mollitia itaque exercitationem quos
          nesciunt consectetur sapiente.
        </p>
      </div>
    </div>
  );
};

export default Info;
