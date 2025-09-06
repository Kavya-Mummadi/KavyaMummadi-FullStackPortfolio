import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from "../ProjectCard"

import "./index.css"

const Projects = (props) => {
    const { projectsData } = props

    const onGoToGithub = () => {
        window.open("https://github.com/Kavya-Mummadi", "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <div className="projects-bg">
                <h1 className="projects-heading"> Featured <span className="projects-heading-highlight">Projects</span></h1>
                <p className="projects-description">Explore my recent projects — a showcase of my work and passion. Check out more on my GitHub for full code and contributions.</p>
                <ul className="projects-visible-container">
                    {
                        projectsData.map(eachProject => (<ProjectCard key={eachProject.id} data={eachProject} />))
                    }
                </ul>
                <div className="projects-button-container">
                    <button tpe="button" className="projects-github-button" onClick={onGoToGithub}>Check Out My Github <FaArrowRightLong className="right-arrow-icon" /></button>
                </div>
            </div>
        </>
    )
}


export default Projects