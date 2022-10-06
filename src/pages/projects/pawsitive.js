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

            <div className="proj-detail-box">
                <header className="mid-title">Introduction</header>
                    Project partners Shayna Gaulden and Tien Nguyen 
                    create a database for a fake business
                    called PAWsitive Dog Daycare. The business is not real,
                    but is treated as if it is real throughout this process
                    to achieve the best database design. The design process
                    required us to consider the potential needs of a real
                    dog daycare and make decisions as if our company was
                    real. In our scenario, PAWsitive Dog Daycare is a new
                    business with some existing customers. The business is
                    in need of a database that can keep track of their
                    services and operations. The company is in need of
                    software that can manage the day to day operations.

                <header className="mid-title">Process</header>
                The database logical design is created and implemented physically with MySQL. Google Cloud Platform was used to launch an SQL instance to hold the database. A Python script connects to the instance and runs the SQL code to create the database and the schema.
Our business Pawsite Dog Daycare already has some data they are keeping in an excel sheet so we converted that to .csv files and upload it to the database with Python.

Next, we made a web application in Javascript using React JS as a framework with components from Material UI. The web application had login capability with different landing pages for managers, employees, and customers. Other capability includes adding a dog to a customer, enrolling a dog in an available booking, canceling a booking, and more capabilities of the website which can be read about in the PDF report provided.
We implemented an API with Node JS and Express and we used Postman to test our API calls.



            </div>

            <Footer />
        </div>
    )
}

export default Pawsitive;