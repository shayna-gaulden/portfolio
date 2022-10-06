import React from "react";
import Nav from "../components/nav";
import Title from "../components/title";
import ProjPreview from "../components/proj-preview";
import { ProjectData } from "../assets/projdata";
import Footer from "../components/footer";
import SelfImg from "../assets/images/me-beach.jpg"
import Resume from "../assets/images/Shayna Gaulden resume.pdf"
import { height } from "@mui/system";
import LinkedinLogo from "../assets/images/LI-In-Bug.png"

const About = () => {
    return(
        <div>
            <Nav/>
            <div className="about-background">
            <div className="space"/>
            <Title
                title={"About Shayna Gaulden"}
                subtitle={"Graduate student studying Data Science at San Jose State University. Bachelors in Applied Mathematics/Statistics. Machine learning enthusiast."}
            />
            <div className="center">
            <img src={SelfImg} alt="Image not available." className="round-img" />
            </div>
            </div>
            <div style={{height:50}}/>
            <a href={Resume} target="_blank" rel="noreferrer" className="github-link">
                    Download PDF Resume.
            </a>

            <div className="proj-detail-box">
            <div className="column">
            
            <header className="mid-title">
                More about me
                </header>
                Current student (spring 2023 graduation!) with a passion for data science. I am interested in machine learning and pursuing a career
as a machine learning engineer / data scientist. I am strong in both computer science and mathematics, because
I have been careful to take classes throughout my education that honed my mathematic and computer science skills
and knowledge. I am someone who pursues the most efficient solution and works well in a team because I love the
creativity that teamwork facilitates and I am good at synthesising other people's ideas.

<header className="mid-title">
                Contact Me!
                <a href="https://www.linkedin.com/in/shayna-gaulden-490a01140/" target="_blank" rel="noreferrer">
            <img src={LinkedinLogo} className="logo"/>
            </a>
                </header>
                If you are interested in contacting me please reach out to me on Linkedin!
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;