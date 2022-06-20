import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Section from "../../components/section";
import Footer from "../../components/footer";
import { Project3Data1 } from "../../assets/projdata";

const AppAnalysis = () => {
    return(
        <div>
            <Nav/>
            <Title
                title={"Google Play Store App Analysis"}
                subtitle={"Shayna Gaulden | May 2022 | Data Visualization in Matlab"}
            />
            <a href="https://github.com/shayna-gaulden/googleApps-visualization" target="_blank" rel="noreferrer" className="github-link">
                Project Code on Github.
            </a>

            <div className="section-gallery">

            {
                Project3Data1.map(el => {
                    return <Section title={el.title}
                        body={el.body} />
                })
            }
            <header className="mid-page-title">
                Variables
            </header>

            


            </div>

            <Footer />
        </div>
    )
}

export default AppAnalysis;