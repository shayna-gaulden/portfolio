import React from "react";
import Nav from "../components/nav";
import Title from "../components/title";

const Home = () => {
    return(
        <div>
            <Nav/>
            <Title
                title={"Shayna Gaulden"}
                subtitle={"Soon to be: Master in Data Science at San Jose State University"}
            />
        </div>
    )
}

export default Home;