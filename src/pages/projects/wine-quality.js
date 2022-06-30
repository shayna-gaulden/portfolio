import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Footer from "../../components/footer";
import Report from "../../assets/images/wine-quality/Wine_Quality_Math261A.pdf"

const WineQuality = () => {
    return(
        <div>
            <Nav/>
            <Title
                title={"Wine Quality Prediction"}
                subtitle={"Shayna Gaulden | Deceember 2021 | Regression Modeling in R"}
            />
            <div className="column">
            <a href="https://github.com/shayna-gaulden/wine-quality" target="_blank" rel="noreferrer" className="github-link">
                Project Code on Github.
            </a>

            <a href={Report} target="_blank" rel="noreferrer" className="github-link">
                    Download Full PDF Report.
            </a>
            </div>

            <div className="proj-detail-box">
            <header className="mid-title">Introduction</header>
            Contributors of this project include Shayna Gaulden and Tien Nguyen. 
            This project seeks to create a regression model to predict the wine
            quality of red variants of the Portuguese ”Vinho Verde” wine from a data
            set including 11 variables that can be used as regressors and 1 variable
            that rates the quality of the wine to be used as the predictor variable.

            <header className="mid-subtitle">Variables</header>
            <li>Y = Quality: The quality of the wine rated on a scale that goes from 3-7.</li>
            <li>X1 = Fixed Acidity</li>
            <li>X2 = Volatile Acidity</li>
            <li>X3 = Citric Acidity</li>
            <li>X4 = Residual Sugar</li>
            <li>X5 = Chlorides</li>
            <li>X6 = Free Sulfur Dioxide</li>
            <li>X7 = Density</li>
            <li>X8 = pH</li>
            <li>X9 = Sulphates</li>
            <li>X10 = Alcohol</li>
            
            <header className="mid-title">Preparing the Data</header>
            The data has 1599 data points for each variable which seemed to be a sufficient
            enough amount to safely split the data into a training set and a testing set.
            All the model fitting was done exclusively on the data split into the training
            set while at the end two final models were chosen to be tested with the testing
            set of data. The data was split using a 20% testing and 80% training rule so in
            the end 1279 data points from each variable were used for training and the rest
            reserved for testing.
            
            <header className="mid-title">Simple Linear Regression Model</header>
            This model is fit to all available variables.
            <br/><br/>
            Y = X1 + X2 + X3 + X4 + X5 + X6 + X7 + X8 + X9 + X10 + e
            <header className="mid-subtitle">Fitted Model</header>
            Y = 36.89 + 0.06X1 − 1.20X2 − 0.34X3 + 0.02X4 − 1.59X5 − 0.002X6 − 33.96X7 − 0.23X8 + 0.85X9 + 0.30X10
            <header className="mid-subtitle">Model Adequacy</header>
            Right away there are potential problems with the estimated coefficients. The range
            of ratings for quality of wine in our data go from 3 to 8 on what we assume to be a
            1 to 10 scale, but our intercept is 36.89 and only one of our variables has an estimate
            coefficient of 33.96 which might cause some unpredictable behavior. We looked at our
            model summary and ANOVA table to find the R squred, R squared adjusted, and MSRES to determine if the
            model is a good fit for the data.
            <hr/>

            <div className="table">
                <div className="table-column">
                    <div className="table-header">
                        R square
                    </div>
                    <div className="table-box">
                        0.3736
                    </div>
                </div>
                <div className="table-column">
                    <div className="table-header">
                        R square adjusted
                    </div>
                    <div className="table-box">
                        0.3687
                    </div>
                </div>
                <div className="table-column">
                    <div className="table-header">
                        MSRES
                    </div>
                    <div className="table-box">
                        0.415
                    </div>
                </div>
            </div>
            <br/>

            The R2 value shows that approximately 37%
            of the variation in the data can be explained
            by the regression model. This number is not
            very high. To learn more about this model the
            underlying assumptions of a simple linear
            regression model needed to be checked. To do
            this we looked at the model’s residuals.

            
            </div>

            <Footer />
        </div>
    )
}

export default WineQuality;