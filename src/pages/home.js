import React from "react";
import Nav from "../components/nav";
import Title from "../components/title";
import ProjPreview from "../components/proj-preview";
import { ProjectData } from "../assets/projdata";
import Footer from "../components/footer";
import Resume from "../assets/images/Shayna Gaulden resume.pdf"


const Home = () => {
    return(
        <div>
            <Nav/>
            <div className="space"/>
            <Title
                title={"Shayna Gaulden"}
                subtitle={"2023 Master in Data Science at San Jose State University"}
            />
            
            <div className="blurb-container">
                <header className="blurb">
                Hey there! I’m a graduate student studying Data Science and Statistics in San Jose, CA. Check out my projects below!
                </header>
            </div>

            <div className="margin-cont">
            <a href={Resume} target="_blank" rel="noreferrer" className="github-link">
                <div className="button-54">
                    Download PDF Resume
                </div>
            </a>
            </div>
            <br/><br/><br/>

            <div className="margin-cont">
                <text className="home-title">
                    Projects
                </text>
            </div>
            <hr className="basic"/>
            
            <div className="projects-container">
            {
                ProjectData.map(el => {
                    return <ProjPreview img={el.img}
                        title={el.title}
                        subtitle={el.subtitle}
                        link={el.link}/>
                })
            }
            </div>
            <br/>
            <br/><br/><br/>

            <div className="margin-cont">
                <text className="home-title">
                    Skills
                </text>
                </div>
                <hr className="basic"/>
                <div className="margin-cont">
            <div className="skills-box">
                
            </div>
            </div>

            <Footer />
        </div>

        
    )
}

export default Home;