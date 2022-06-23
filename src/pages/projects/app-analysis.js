import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Section from "../../components/section";
import Footer from "../../components/footer";
import { Project3Data1 } from "../../assets/projdata";
import Type_1 from "../../assets/images/playstore/app_type.png";
import Content_Rating_1 from "../../assets/images/playstore/content_rating.png";
import ProjImg from "../../components/proj-img";
import Report from "../../assets/images/playstore/Math 250 Report.pdf"

const AppAnalysis = () => {
    return(
        <div>
            <Nav/>
            <Title
                title={"Google Play Store App Analysis"}
                subtitle={"Shayna Gaulden | May 2022 | Data Visualization in Matlab"}
            />

            <div className="column">
            <a href="https://github.com/shayna-gaulden/googleApps-visualization" target="_blank" rel="noreferrer" className="github-link">
                Project Code on Github.
            </a>

            <a href={Report} target="_blank" rel="noreferrer" className="github-link">
                Download Full PDF Report.
            </a>

            </div>

            <div className="proj-detail-box">
                <header className="mid-title">Data Summary</header>
                The Google Play Store Apps data set can be found on Kaggle.
                It was originally webscraped by a user Lavanya Gupta;
                a Computer Science graduate at Carnegie Mellon University.
                <br/><br/>
                There are originally 10841 instances (applications) and 13 variables.
                <br/><br/>
                <header className="mid-subtitle">Variables Used in Analysis</header>
                <li>Rating: The average user rating, (scale from 0-5).</li>
                <li>Reviews: The number of user reviews for the app.</li>
                <li>Size: The size of the application in MB and KB.</li>
                <li>Installs: The number of user downloads/installations for the app.</li>
                <li>Price: The price of the application.</li>
                <li>Category: Category that the app belongs to.</li>
                <li>Type: Specifies whether the app is a free or a paid application.</li>
                <li>Content Rating: Age group the app is targeted at.</li>
                <li>Genre: The genre for an app can belong to multiple genres apart from its category.</li>

                <header className="mid-title">Data Cleaning</header>
                <header className="mid-subtitle">Missing Values</header>
                All applications with missing values were removed from analysis, there were 1474 apps with missing ratings, 1 with missing reviews, and 1 missing a content rating.
                <header className="mid-subtitle">Invalid Entries</header>
                Removing any application whose size is not a number but is listed as 'varies with device'.
            </div>

            <Footer />
        </div>
    )
}

export default AppAnalysis;