import React from "react";
import Nav from "../components/nav";
import ProjPreview from "../components/proj-preview";
import BlogPreview from "../components/blog-preview";
import { ProjectData, BlogData } from "../assets/projdata";
import Footer from "../components/footer";
import Resume from "../assets/images/Shayna Gaulden resume.pdf"
import LinkedinLogo from "../assets/images/LI-In-Bug.png"
import Githublogo from "../assets/images/GitHub-logo.png"

const Home = () => {
    return (
      <div>
        <Nav />
        <div className="space" />

        <div className="margin-div">
          <div className="title-container">
            <div className="rowgap">
              <header className="title">Shayna Gaulden</header>
              <div />
              <a
                href="https://www.linkedin.com/in/shayna-gaulden-490a01140/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedinLogo} className="logo" />
              </a>
              <a
                href="https://github.com/shayna-gaulden"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Githublogo} className="logo" />
              </a>
            </div>

            <header className="subtitle">
              2023 Master in Data Science at San Jose State University |
              Research Intern @ NASA
            </header>
          </div>

          <div className="blurb-container">
            <header className="blurb">
              Hey there! I am a new 2023 graduate from the Data Science program
              at San Jose State University, CA. Check out my projects below!
            </header>
          </div>
          <div className="margin-cont">
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <div className="button-54">Download PDF Resume</div>
            </a>
          </div>
          <br />
          <br />
          <br />

          <div className="margin-cont">
            <text className="home-title">Projects</text>
          </div>
        </div>
        <hr className="basic" />
        <div className="projects-container">
          {ProjectData.map((el) => {
            return (
              <ProjPreview
                img={el.img}
                title={el.title}
                subtitle={el.subtitle}
                link={el.link}
                date={el.date}
                skills={el.skills}
              />
            );
          })}
        </div>

        <br />
        <br />
        <br />
        <br />

        {/* <div className="margin-div">
          <text className="home-title">Blog Posts</text>
        </div>
        <hr className="basic" />

        <div className="projects-container">
          {BlogData.map((el) => {
            return (
              <ProjPreview
                img={el.img}
                title={el.title}
                subtitle={el.subtitle}
                link={el.link}
              />
            );
          })}
        </div> */}

        <br />
        <br />
        <br />
        <br />

        <div className="margin-div">
          <text className="home-title">Skills</text>
        </div>
        <hr className="basic" />
        <div className="margin-div">
          <div className="skills-box">
            <div className="skill-button">Python</div>
            <div className="skill-button">Matlab</div>
            <div className="skill-button">Java</div>
            <div className="skill-button">MySQL</div>
            <div className="skill-button">MongoDB</div>
            <div className="skill-button">Regression Analysis</div>
            <div className="skill-button">Data Visualization</div>
            <div className="skill-button">Data Processing</div>
            <div className="skill-button">Dimension Reduction Techniques</div>
            <div className="skill-button">Machine Learning Techniques</div>
            <div className="skill-button">Natural Language Processing</div>
            <div className="skill-button">Text Classification</div>
            <div className="skill-button">Image Classification</div>
            <div className="skill-button">Database Management</div>
            <div className="skill-button">Excel</div>
            <div className="skill-button">Research</div>
            <div className="skill-button">R</div>
            <div className="skill-button">Web Developement</div>
          </div>
        </div>

        <Footer />
      </div>
    );
}

export default Home;