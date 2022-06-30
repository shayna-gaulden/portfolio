import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Section from "../../components/section";
import { Project1Data1 } from "../../assets/projdata";
import DecorImage from "../../assets/images/evo-bio-net/jonne-huotari-G5tOM5NINtA-unsplash.jpg";
import { Project1Data2 } from "../../assets/projdata";
import FecundityEq from "../../assets/images/evo-bio-net/fecundity equation.PNG"
import SurvivalEq from "../../assets/images/evo-bio-net/survival equation.PNG"
import Img1 from "../../assets/images/evo-bio-net/cd11 0.PNG"
import Img2 from "../../assets/images/evo-bio-net/cd11 1.PNG"
import Img3 from "../../assets/images/evo-bio-net/cd11 2.PNG"
import Img4 from "../../assets/images/evo-bio-net/cd11 3.PNG"
import ProjImg from "../../components/proj-img";
import Footer from "../../components/footer";

const EvoBioNetwork = () => {
    return (
        <div>
            <Nav />
            <Title
                title={"Evolution of Biological Networks in Space and Time"}
                subtitle={"Shayna Gaulden | Mar 2020- May 2021 | Python Research Project"}
            />
            <a href="https://github.com/shayna-gaulden/graphing-dispersal-death-processes" target="_blank" rel="noreferrer" className="github-link">
                Project Code on Github.
            </a>
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

            <header className="mid-page-title">Sample of Iterations</header>

            <div className="gallery">
                <ProjImg img={Img1} fig="Figure 1. Initial graph with 500 vertices randomly dispersed." />
                <ProjImg img={Img2} fig="Figure 2. Graph with 4833 vertices after 1,000 iterations." />
                <ProjImg img={Img3} fig="Figure 3. Graph with 7171 vertices after 10,000 iterations." />
                <ProjImg img={Img4} fig="Figure 4. Graph with 7842 vertices after 100,000 iterations." />
            </div>
                
                <br/><br/><br/>
            <Section title="Results"
            body="What was discovered from the graph iterations is that there appeared
            to be a honey-comb pattern forming naturally from small clusters of points.
            The distance between these points, and the average degree all were dependent on
            the formulas used in the death and birth process."/>

            <Footer />
        </div>
    )
}

export default EvoBioNetwork;