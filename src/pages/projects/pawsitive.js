import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Footer from "../../components/footer";
import Report from "../../assets/images/pawsitive/pawsitive-report.pdf"

const Pawsitive = () => {
    return(
        <div>
            <Nav/>
            <div className="space"/>
            <Title
                title={"A Database for Pawsitive Dog Daycare"}
                subtitle={"Shayna Gaulden | May 2022 | SQL Database Design and Deployment"}
            />
            <div className="column">
                <a href="https://github.com/shayna-gaulden/pawsitive" target="_blank" rel="noreferrer" className="github-link">
                    Project Code on Github.
                </a>

                <a href={Report} target="_blank" rel="noreferrer" className="github-link">
                    Download Full PDF Report.
                </a>
            </div>


            <Footer />
        </div>
    )
}

export default Pawsitive;