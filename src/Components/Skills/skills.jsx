import "./skills.css"

import nodejs from "../../Image/node js.png"

function Skills(){
    return(
        <>
        <div className="skills-container">
            <h1>Skills</h1>
            <h2>Programming Languages</h2>
            <div className="skills-program">
                
                <div className="skills-set" title="C"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C"/></div>
                <div className="skills-set" title="Python"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python"/></div>
                <div className="skills-set" title="Java"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java"/></div>
                <div className="skills-set" title="Javascript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/></div>
            </div>
            <h2>UI</h2>
            <div className="skills-program">
                
                <div className="skills-set" title="FIGMA"><img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma"/></div>
                
            </div>
            <h2>Front-end</h2>
            <div className="skills-program">
                
                <div className="skills-set" title="HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML"/></div>
                <div className="skills-set" title="CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"/></div>
                <div className="skills-set" title="React JS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"/></div>
            </div>
            <h2>Back-End</h2>
            <div className="skills-program">
                <div className="skills-set" title="NODE JS"><img src={nodejs} alt="nodejs"/></div>
                <div className="skills-set" title="Express JS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" /></div>
            </div>
            
            <h2>DataBase</h2>
            <div className="skills-program">
                <div className="skills-set" title="MongoDB"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"/></div>
            </div>
        </div>
        </>
    );
}

export default Skills;