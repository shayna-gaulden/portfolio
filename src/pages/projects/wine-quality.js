import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Footer from "../../components/footer";
import Report from "../../assets/images/wine-quality/Wine_Quality_Math261A.pdf"
import ScrollableTabsButtonAuto from "../../components/tabs";
import TransScrollableTabsButtonAuto from "../../components/trans-tabs";
import Latex from "react-latex";
const WineQuality = () => {
    return (
        <div>
            <Nav />
            <div className="space"/>
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
                <br /><br />
                <Latex>$Y = X1 + X2 + X3 + X4 + X5 + X6 + X7 + X8 + X9 + X10 +\epsilon$</Latex>
                <header className="mid-subtitle">Fitted Model</header>
                <Latex>$Y = 36.89 + 0.06X1 − 1.20X2 − 0.34X3 + 0.02X4 − 1.59X5 − 0.002X6 − 33.96X7 − 0.23X8 + 0.85X9 + 0.30X10$</Latex>
                <header className="mid-subtitle">Model Adequacy</header>
                Right away there are potential problems with the estimated coefficients. The range
                of ratings for quality of wine in our data go from 3 to 8 on what we assume to be a
                1 to 10 scale, but our intercept is 36.89 and only one of our variables has an estimate
                coefficient of 33.96 which might cause some unpredictable behavior. We looked at our
                model summary and ANOVA table to find the R squred, R squared adjusted, and MSRES to determine if the
                model is a good fit for the data.
                <hr />

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
                <br />

                The R2 value shows that approximately 37%
                of the variation in the data can be explained
                by the regression model. This number is not
                very high. To learn more about this model the
                underlying assumptions of a simple linear
                regression model needed to be checked. To do
                this we looked at the model’s residuals.

                <br /><br />
                <ScrollableTabsButtonAuto />

                The Residuals vs. Time plot has residuals
                who are close to 0 with no strange pattern
                appearing confirming that the variance is
                constant. This indicate
                that there is not a violation for any of the assumptions
                for a simple linear regression model. In the Residuals vs.
                Fitted Values plot, the residuals also seem spread out but
                diagonal lines appear in this graph. These lines
                appear because our response variable quality is
                ordinal. The assumption that the variance is
                normal is being violated as shown by the QQ-plot
                it appears to be close to the normal distribution
                but strays away at both tail ends of the data.
                For the plots of the residuals against all the
                regressors in the model fixed acidity,
                volatile acidity, citric acid, density, PH,
                and alcohol did not look to violate any
                assumptions, although there did appear to be
                some possible outliers showing in these graphs.
                Some of the graphs have a fan shape (see
                residual sugar, chlorides, free sulfur dioxide,
                and sulphates) which violates the assumption of
                constant variance for these variables.

                <header className="mid-title">Transformed Simple Linear Regression Model</header>
                Because of the assumption checking above, it was decided that a log transformation
                could potentially improve variables X4: Residual Sugar, X5: Chlorides,
                X6: Free Sulfure Dioxide, and X9: Sulphates.
                <br /><br />
                <Latex>$Y = X1 + X2 + X3 + log(X4) + log(X5) + log(X6) + X7 + X8 + log(X9) + X10 + \epsilon$</Latex>
                <header className="mid-subtitle">Fitted Model</header>
                <Latex>$Y = 42.90 + 0.07X1 − 1.15X2 − 0.40X3 + 0.10log(X4) − 0.21log(X5) − 0.02log(X6) − 39.56X7 − 0.25X8 + 0.74log(X9) + 0.28X10$</Latex>
                <header className="mid-subtitle">Model Adequacy</header>

                <div className="table">
                    <div className="table-column">
                        <div className="table-header">
                            R square
                        </div>
                        <div className="table-box">
                            0.3823
                        </div>
                    </div>
                    <div className="table-column">
                        <div className="table-header">
                            R square adjusted
                        </div>
                        <div className="table-box">
                            0.3774
                        </div>
                    </div>
                    <div className="table-column">
                        <div className="table-header">
                            MSRES
                        </div>
                        <div className="table-box">
                            0.409
                        </div>
                    </div>
                </div>
                <br />
                In comparison the transformed model has a lower MSRES and higher R2 and R2 adj
                Again the model adequacy needs to be checked.

                <br /><br />
                <TransScrollableTabsButtonAuto />
                Although it is not perfect, it is safe to say
                in all graphs there are no assumptions being violated except the QQ-plot which has not improved.

                <header className="mid-title">Polynomial Order 2 Regression Model</header>
                To find a best fit model that can successfully
                predict wine quality it was decided a polynomial
                of order 2 regression model might be better
                suited. Using the knowledge from the first model
                this model was also fitted with the transformed
                variables. The correlation between all the
                regressor variables and their squares was
                found to be quite high so all the variables
                were centered which reduced the correlation
                drastically. The maximum correlation between
                two different variables after centering was
                0.6850119 and before centering was 0.9999986
                so this was a great improvement. New notation
                is introduced below because the centered
                variables are used throughout this model as well
                as the ones that have been transformed using log.

                <header className="mid-subtitle">Variables</header>
                <li>X1C = X1 − mean(X1)</li>
                <li>X2C = X2 − mean(X2)</li>
                <li>X3C = X3 − mean(X3)</li>
                <li>X4CL = log(X4) − mean(log(X4())</li>
                <li>X5CL = log(X5) − mean(log(X5))</li>
                <li>X6CL = log(x6) − mean(log(X6))</li>
                <li>X7C = X7 − mean(X7)</li>
                <li>X8C = X8 − mean(X8)</li>
                <li>X9CL = log(X9) − mean(log(X9))</li>
                <li>X10C = X10 − mean(X10)</li>
                <header className="mid-subtitle">Full Polynomial Model</header>
                <Latex>$ Y  = X1C + X1C^2 + X2C + X2C^2 + X3C + X3C^2 + X4CL+ X4CL^2
                    $$ + X5CL + X5CL^2 + X6CL + X6CL^2 + X7C + X7C^2 + X8C + X8C^2
                    $$ + X9CL + X9CL^2 + X10C + X10C^2 + \epsilon $</Latex>
                <header className="mid-subtitle">Intercept Only Model</header>
                    <Latex>$Y=1$</Latex>
                <header className="mid-subtitle">Polynomial Model with Selected Variables</header>
                These two models will be used for variable
                selection because not all the variables need
                to be used in the final model. Variable
                selection was performed with forward, backwards
                and stepwise methods. Forward selection started
                with the intercept only model adding in variable
                terms one at a time based on which had the
                highest F statistic value. Once the p-value for
                the F statistic is greater than 0.05 for all
                remaining regressors not in the model no more
                regressors will be added into the model.
                Backwards selection works in a similar way but
                starting with the full polynomial model and
                removing terms with the lowest F statistic.
                The backwards selection method is terminated
                when the p-value for the F statistic is less
                than 0.05 for all regressors in the model.
                Stewise regression method starts with the
                intercept only model and uses both forwards
                and backwards methods to add one regressor
                then check if any need to be removed then add
                this method terminates once the p-value for
                the F statistic is greater than 0.05 for all
                remaining regressors not in the model. In this
                case all three methods of variable selection
                returned the same model which will be called
                Model A.
                <header className="mid-subtitle">Model A</header>
                <Latex>$Y=X2C+X3C+X5CL+X8C+X9CL+X9CL^2+X10C+\epsilon$</Latex>
                <header className="mid-subtitle">Fitted Model A</header>
                <Latex>$Y=5.71-1.04X2C-0.33X3C-0.20X5CL-0.82X8C+0.98X9CL-1.27X9CL^2+0.32X10C$</Latex>
                
                <header className="mid-subtitle">Outliers</header>
                The residual graphs indicate there might be potential
                outliers in the data. To inves- tigate we used
                the diagonals of the H matrix defined as, <br/> 
                H = X(X'X)^(-1)X',
                Where X is a matrix containing all the variables
                used in model A. There are potential influence
                points wherever 2(k+1) is less than the diagonal 
                of H, where k is the number of columns in the X
                matrix, in this case k = 7, and n is the number
                of rows in the X matrix in this case n = 1279.
                For Model A there were 84 influence points found
                which was too many to try every combination of
                exclusion/inclusion in the model. One version
                of Model A, Model A None, was fit with all 84
                influence points removed. Another version
                of Model A, Model A Some, was fit by first creating
                84 models for the 84 influence points, each model
                had a different influence point removed. Then taking
                the influence point from
                each model that had both an increased R squared 
                and a decreased MSRES value and removing all of those
                points at the same time in the new model Model A Some.
                
                <div className="table">
                <div className="table-column">
                        <div className="table-header">
                            Models
                        </div>
                        <div className="table-box">
                            Model A
                        </div>
                        <div className="table-box">
                            Model A None
                        </div>
                        <div className="table-box">
                            Model A Some
                        </div>
                    </div>
                    <div className="table-column">
                        <div className="table-header">
                            R square
                        </div>
                        <div className="table-box">
                            0.3972
                        </div>
                        <div className="table-box">
                            0.3888
                        </div>
                        <div className="table-box">
                            0.3673
                        </div>
                    </div>
                    <div className="table-column">
                        <div className="table-header">
                            R square adjusted
                        </div>
                        <div className="table-box">
                            0.3939
                        </div>
                        <div className="table-box">
                            0.3852
                        </div>
                        <div className="table-box">
                            0.3636
                        </div>
                    </div>
                    <div className="table-column">
                        <div className="table-header">
                            MSRES
                        </div>
                        <div className="table-box">
                            0.399
                        </div>
                        <div className="table-box">
                            0.383
                        </div>
                        <div className="table-box">
                            0.396
                        </div>
                    </div>
                </div>
                <br />
                Removing the outliers decreased the R squared
                value but also decreased the MSRES value so
                it was determined that the outliers should
                stay in the model. It seems cluster analysis
                might be useful to identify if the large
                group of outliers is actually telling us
                something about the data.


                <header className="mid-subtitle">Model Evaluation</header>
            For training set, Ajusted R-squared and MSRES
            are used to evaluate the models. For test set,
            new R-squared, Mean Squared Prediction Error
            (MSPE) and accuracy percentage are used to
            evaluate the models. The accuracy percentage
            comes from a confusion matrix. Because the
            response variable quality is ordinal, in order
            to use the confusion matrix the predicted
            values are rounded so they can be compared
            with the quality test values.

            <div className="table">
            <div className="table-column">
                        <div className="table-header">
                            -
                        </div>
                        <div className="table-header">
                            Model
                        </div>
                        <div className="table-box">
                            A
                        </div>
                    </div>
                    <div className="table-column">
                        <div className="table-header">
                            Train Set
                        </div>
                        <div className="table-header">
                            R square adjusted
                        </div>
                        <div className="table-box">
                            0.393
                        </div>
                    </div>
                    <div className="table-column">
                        <div className="table-header">
                            Train Set
                        </div>
                        <div className="table-header">
                            MSRES
                        </div>
                        <div className="table-box">
                            0.399
                        </div>
                    </div>
                    <div className="table-column">
                        <div className="table-header">
                            Test Set
                        </div>
                        <div className="table-header">
                            R squared
                        </div>
                        <div className="table-box">
                            0.287
                        </div>
                    </div>
                    <div className="table-column">
                        <div className="table-header">
                            Test Set
                        </div>
                        <div className="table-header">
                            MSPE
                        </div>
                        <div className="table-box">
                            0.4478
                        </div>
                    </div>
                    <div className="table-column">
                        <div className="table-header">
                            Test Set
                        </div>
                        <div className="table-header">
                            Accuracy
                        </div>
                        <div className="table-box">
                            57.81%
                        </div>
                    </div>
                </div>
                <br />

                <header className="mid-title">Conclusion</header>
                    Model A has a very low R-squared and R-squared
                    adjusted value. This means that the regressor
                    variables are not able to explain much of the
                    variation in the response variable. This could
                    be due to a need for a non-linear model or a lack
                    of regressor variables that relate to the response
                    variable. I believe that a better way to do this in
                    the future would be to build a larger model that
                    has interaction terms, food and taste typically
                    has a lot more to do with the interaction of
                    ingredients than it does with the ingredients by
                    themselves and I think this would have built a 
                    much better model. 




            </div>
            <Footer />
        </div>
    )
}

export default WineQuality;