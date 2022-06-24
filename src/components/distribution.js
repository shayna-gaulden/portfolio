import React from "react";

const Distribution = ({dist,log,table,text,title}) => {
    return (
        <div className="column">
            <header className="mid-subtitle">{title}</header>
            <div className="row">
            <img src={dist} alt="Image not available." className="dist-graph" />
            <img src={log} alt="Image not available." className="dist-graph" />
            </div>
            <img src={table} alt="Image not available." className="table-img" />
            <br/>
            {text}
        </div>
    );
}

export default Distribution;