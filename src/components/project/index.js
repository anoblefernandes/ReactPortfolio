import React from "react";

function Project({name, github, deployed}){
    return (
<div className="Project">
<div className="card">
  <div className="card-body">
    <div className = "row">
{name}
    </div>
    <div className = "row">
<a href={github}>GitHub Repo</a>
</div>
<div className = "row">
<a href={deployed}>Deployed Application</a>
</div>
  </div>
</div>
    </div>
    )
}
export default Project