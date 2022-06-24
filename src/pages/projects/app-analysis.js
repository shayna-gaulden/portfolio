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
import StickyHeadTable from "../../components/table";
import ContentRatingOutlierIMG from "../../assets/images/playstore/Content Rating Outliers.png"

const AppAnalysis = () => {
    return (
        <div>
            <Nav />
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
                <br /><br />
                There are originally 10841 instances (applications) and 13 variables.
                <br /><br />
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
                <header className="mid-subtitle">Special Characters & Data Types</header>
                All numbers in the data set needed to be a type double, but some variables needed
                to be cleaned before they could be converted. The 'Size' variable had a mix of KB and MB sizes, so all KB and MB sizes were separated and the 'mb' or 'kb' chars were removed.
                Next the sizes were converted to type double and KB sizes were converted to MB and the sizes were added back to the data set as a new variable "Size_MB".
                The 'Installs' variable had larger numbers rounded down which were denoted with a '+' for example, '1,000,000 +' all the '+'
                characters were removed and the Installs data was converted to type double. From the 'Price' variable the '$' character
                was removed and then prices were also converted to type double.

                <header className="mid-title">Outliers</header>
                <header className="mid-subtitle">Price</header>
                It was discovered that the price variable had a range between 0 and $400.
                That is a very high price for an applicaiton so it was further investigated.
                All but 17 applications had a price under $40 out of those 17 apps, 2 of them
                were $80 and $15 of them were between $299.99 and $399.99. The two apps that
                were cheaper in the group were both medical apps and the other 15 had some
                variation of "I am Rich" in the title. A quick Google search showed that the
                original "I am Rich" app was released for the IOS store as an art installation
                that cost $999.99 and had no purpose. All 17 applications were removed from analysis
                and they can be seen in the table below.
                <br /><br /><br /><br />
                <StickyHeadTable />
                <br /><br />
                <header className="mid-subtitle">Content Rating</header>
                Only 1 application has a content rating of "unrated" and two applications
                have a content rating of "Adults only 18+" so all of those apps are
                removed.
                <img src={ContentRatingOutlierIMG} alt="Image not available." className="proj-preview-img" />

            </div>

            <Footer />
        </div>
    )
}

export default AppAnalysis;