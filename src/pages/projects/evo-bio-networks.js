import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";

const EvoBioNetwork = () => {
    return(
        <div>
            <Nav/>
            <Title
                title={"Evolution of Biological Networks in Space and Time"}
                subtitle={"Shayna Gaulden | Mar 2020- May 2021 | Python Research Project"}
            />
            <div className="title-container">
                <header className="title">
                Hey there! I’m a student studying Data Science and Statistics in San Jose, CA. Check out my projects below!
                </header>
            </div>
        </div>
    )
}

export default EvoBioNetwork;