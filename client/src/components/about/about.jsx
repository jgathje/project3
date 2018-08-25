import React from "react";

const About = props => {
  return (
    <section className="hero is-primary is-medium parallax">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column about-container1 box">
              <h1 class="about-title">A one-of-a-kind community</h1>
              <h2>
                ArtSpose is a local online marketplace where artists display
                their art by medium and patrons view art.
              </h2>
            </div>
            <div className="column about-container2 box">
              <h1 class="about-title">Support local creators</h1>
              <h2>
                There is no ArtSpose warehouse - just local artists showing the
                things they love. And local patrons and artists searching for
                art by medium to view our artists' work.
              </h2>
            </div>
            <div className="column about-container1 box">
              <h1 class="about-title">Peace of mind</h1>
              <h2>
                Supporting our artists and providing access to their art for
                patrons and other artists in our community is our top priority.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
