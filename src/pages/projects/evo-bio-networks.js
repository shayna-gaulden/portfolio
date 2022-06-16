import React from "react";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Section from "../../components/section";
import { EvoBioNetworkData } from "../../assets/projdata";

const EvoBioNetwork = () => {
    return(
        <div>
            <Nav/>
            <Title
                title={"Evolution of Biological Networks in Space and Time"}
                subtitle={"Shayna Gaulden | Mar 2020- May 2021 | Python Research Project"}
            />
            <div className="section-gallery">
            {
                EvoBioNetworkData.map(el => {
                    return <Section title={el.title}
                        body={el.body} />
                })
            }
            </div>
        </div>
    )
}

export default EvoBioNetwork;