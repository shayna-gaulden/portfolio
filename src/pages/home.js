import React from "react";
import Nav from "../components/nav";
import Title from "../components/title";
import ProjPreview from "../components/proj-preview";
import { ProjectData } from "../assets/projdata";

const Home = () => {
    return(
        <div>
            <Nav/>
            <Title
                title={"Shayna Gaulden"}
                subtitle={"2023 Master in Data Science at San Jose State University"}
            />
            <div className="title-container">
                <header className="title">
                Hey there! I’m a student studying Data Science and Statistics in San Jose, CA. Check out my projects below!
                </header>
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
        </div>
    )
}

export default Home;