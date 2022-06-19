import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Section from "../../components/section";
import Footer from "../../components/footer";
import { Project2Data1 } from "../../assets/projdata";

const WineQuality = () => {
    return(
        <div>
            <Nav/>
            <Title
                title={"Wine Quality Prediction"}
                subtitle={"Shayna Gaulden | Deceember 2021 | Regression Modeling in R"}
            />
            <a href="https://github.com/shayna-gaulden/wine-quality" target="_blank" rel="noreferrer" className="github-link">
                Project Code on Github.
            </a>

            <div className="section-gallery">

            {
                Project2Data1.map(el => {
                    return <Section title={el.title}
                        body={el.body} />
                })
            }
            </div>

            <Footer />
        </div>
    )
}

export default WineQuality;