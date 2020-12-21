import React from "react";
import resume from "../Assets/documents/ANFresume.pdf"
function Contact(){
    return (
<div className="Contact">
<li>Alan Fernandes</li>
    <li>Email: <a href="mailto:anoblefernandes@gmail.com>anoblefernandes@gmail.com"></a></li>
    <li>(916) 955-0749</li>
    <li><a href="http://www.alanfernandes.com">Website</a></li>
    <li><a href="https://www.linkedin.com/in/alan-fernandes-81032a3/">LinkedIn Profile</a></li>
    <div className="container">
      <a href= {resume} download>Resume</a>
</div>
    </div>
    )
}
export default Contact