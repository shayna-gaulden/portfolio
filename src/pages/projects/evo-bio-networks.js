import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Section from "../../components/section";
import { Project1Data1 } from "../../assets/projdata";
import DecorImage from "../../assets/images/jonne-huotari-G5tOM5NINtA-unsplash.jpg";
import { Project1Data2 } from "../../assets/projdata";
import FecundityEq from "../../assets/images/fecundity equation.PNG"
import SurvivalEq from "../../assets/images/survival equation.PNG"

const EvoBioNetwork = () => {
    return(
        <div>
            <Nav/>
            <Title
                title={"Evolution of Biological Networks in Space and Time"}
                subtitle={"Shayna Gaulden | Mar 2020- May 2021 | Python Research Project"}
            />
            <div className="section-gallery">

            <div className="section-container">
                <div className="left">
                    <header className="section-title">
                       Contributors
                   </header>
                </div>
                <div className="right">
                    <body className="section-body">
                        Mentor: Dr. Wes Maciejewski
                        <br />
                        Undergraduates: Shayna Gaulden and Julianne Garcia
                        <br />
                        Sponsors: PUMP, NSF, Award number DMS-1916494
                    </body>
                </div>
            </div>

            {
                Project1Data1.map(el => {
                    return <Section title={el.title}
                        body={el.body} />
                })
            }
            </div>
            <img src={DecorImage} alt="Image not available." className="wide-img" />
            <div className="section-gallery">
            {
                Project1Data2.map(el => {
                    return <Section title={el.title}
                        body={el.body} />
                })
            }
            <div className="section-container">
                <div className="left">
                    <header className="section-title">
                       Fecundity
                   </header>
                </div>
                <div className="right">
                    <body className="section-body">
                        <img src={FecundityEq} alt="Image not available." className="equation-img" />
                    </body>
                </div>
            </div>

            <Section title="Death Process"
                body="A uniformly random number between 1 and 10 is chosen. This number determine how many vertices will be removed from the graph. Vertices are removed from the graph using a random weighted process. The weights for each node, in this case, are the survival weights. Survival weights are assigned based on the assumption that a higher degree has a higher chance of being chosen to die off. This assumption comes from the idea that in higher density areas there would be more competition for resources."
                />

            <div className="section-container">
                <div className="left">
                    <header className="section-title">
                       Survival
                   </header>
                </div>
                <div className="right">
                    <body className="section-body">
                        <img src={SurvivalEq} alt="Image not available." className="equation-img" />
                    </body>
                </div>
            </div>
            </div>

        </div>
    )
}

export default EvoBioNetwork;