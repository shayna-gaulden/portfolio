import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Section from "../../components/section";
import Footer from "../../components/footer";
import { NNCData, Project3Data1 } from "../../assets/projdata";
import Type_1 from "../../assets/images/playstore/app_type.png";
import Content_Rating_1 from "../../assets/images/playstore/content_rating.png";
import ProjImg from "../../components/proj-img";
import Report from "../../assets/images/playstore/Math 250 Report.pdf"
import StickyHeadTable from "../../components/table";
import ContentRatingOutlierIMG from "../../assets/images/playstore/Content Rating Outliers.png"
import Distribution from "../../components/distribution";
import { DistData } from "../../assets/projdata";
import CatCounts from "../../assets/images/playstore/cat counts.png"
import GenreCounts from "../../assets/images/playstore/genre counts.png"
import CatandGenreGroups from "../../assets/images/playstore/cat and genre grouped together.png"
import Bigplot from "../../components/bigplot";
import { BoxplotData } from "../../assets/projdata";
import AllNumeric from "../../assets/images/playstore/all numeric.png"

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
                was removed and then prices were also converted to type double. The 'Genre' variable
                had some sub-genres included in an entry. they had a structure of "main genre; sub genre"
                so it was easy to remove everything after the semi-colon ";".

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
                removed. From the frequency plot below we can see how small those
                two content rating categories are compared to the other types.
                <br /><br />
                <img src={ContentRatingOutlierIMG} alt="Image not available." className="proj-img" />

                <header className="mid-title">Distribution and Statistics of Numeric Variables</header>
                The distribution of each numeric variable is compared to its
                log tranformed distribution because of how skewed and extreme the data is.
                A log transformation will smooth out some of the extreme values bringing the range
                of the data closer together.

                <div className="column">
                    {
                        DistData.map(el => {
                            return <Distribution
                                title={el.title}
                                dist={el.dist}
                                log={el.log}
                                table={el.table}
                                text={el.text} />
                        })
                    }

                </div>

                <header className="mid-title">Single Categorical Variables</header>
                <div className="row">
                    <img src={CatCounts} alt="Image not available." className="dist-graph" />
                    <img src={GenreCounts} alt="Image not available." className="dist-graph" />
                </div>
                The above plots show the number of applications in each category
                and in each genre. "Family", "Game", "Tools" and "Medical" are the top 4 categories of
                apps in the Google Play App store. The top 4 genres, "tools", "Education",
                "Entertainment" and "action" are not meaningful by themselves, because
                the genres are specific to each category. For example the "Action" genre is only for
                apps in the "Game" category.
                <img src={CatandGenreGroups} alt="Image not available." className="large-img" />
                The above graph groups together the counts of applications
                by each genre in the categories "Game", "Family", and "Tools" respectively.
                From the graph we can see that the "Game" category has several different
                genres the number one genre being "Action", in the "Family" category the top
                genre is "Education" and finally the "Tools" category only has one genre
                which is "Tools". Comparing this graph the the graph that shows
                the top genres for all applications we can see why tools would be the top genre
                despite it being only 3rd top category, because there are no other
                genres in that category to divide the applications into.

                <header className="mid-title">Box plots</header>
                The following section shows graphs 1 numeric variable compared to 1 categorical variable.
                The following numeric variables were shown with a log tranformation because of
                the earlier analysis: Intalls and reviews.
                Note that the categories variable was shortened into
                the top 4 categories, "Family", "Game", "Medical" and "Tool" with every other
                application outside of those categories being put into a new category called "Other".
                {
                    BoxplotData.map(el => {
                        return <Bigplot
                            title={el.title}
                            plot={el.plot}
                            text={el.text} />
                    })
                }

                <header className="mid-title">All Numeric Variables</header>
                <img src={AllNumeric} alt="Image not available." className="large-img" />
                <br/>
                When comparing the number of installations directly to the number of reviews there is indeed a strong positive correlation and a linear relationship. This makes sense intuitively that apps that have more installations have also been reviewed more. For rating and number of reviews there is somewhat of a positive correlation similar to the graph comparing rating to the number of installations. While an app can have a high rating with a low number of reviews or a low number of installations it seems that most apps with many reviews or many installations also have a high rating. This could be due to the fact that apps with a higher rating could be attracting more people who may be more likely to install and then review them. The variables rating and log transformed size have a higher density of larger apps having high ratings. We can also see that apps with a higher price tend to be larger sized apps, with a lower number of installations, and a lower number of reviews, but higher ratings.

                <header className="mid-title">Plots of 2 Numeric and 1 Categorical Variable</header>
                Although the plot with all the numeric data has already been observed above, the following
                plots also visualize which points belong to the different groups of categorical variables.
                {
                    NNCData.map(el => {
                        return <Bigplot
                            title={el.title}
                            plot={el.plot}
                            text={el.text} />
                    })
                }

            </div>

            <Footer />
        </div>
    )
}

export default AppAnalysis;