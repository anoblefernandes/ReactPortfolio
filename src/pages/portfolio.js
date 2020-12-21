import React from "react";
import Project from "../components/project" 

function Portfolio(){
    return (
<div className="Portfolio">
<Project
name = "Table of Continents"
github = "https://github.com/halowe94/tableOfContinents.git"
deployed = "#"
/>
<Project
name = "Leet PDF"
github = "https://github.com/Project-Three/leet-pdf.git"
deployed = "#"
/>
    </div>
    )
}
export default Portfolio