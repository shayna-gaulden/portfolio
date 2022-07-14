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
            <a href={Resume} target="_blank" rel="noreferrer" className="github-link">
                    Download PDF Resume.
            </a>
            <div className="title-container">
                <header className="mid-title">
                Hey there! I’m a graduate student studying Data Science and Statistics in San Jose, CA. Check out my projects below!
                </header>
            </div>



            <div className="margin-cont">
                <text className="home-title">
                    Projects
                </text>
                <hr className="basic"/>
            </div>
            
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
            <Footer />
        </div>
    )
}

export default Home;