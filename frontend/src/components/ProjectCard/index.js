import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./index.css"

const ProjectCard = (props) => {
    const { data } = props

    const {
        title,
        description,
        technologiesUsed,
        projectLiveUrl,
        githubUrl,
        projectImageUrl } = data

    const onCheckOutGitHub = () => {
        window.open(githubUrl, "_blank");
    }

    const oncheckOutProject = () => {
        window.open(projectLiveUrl, "_blank");
    }

    return <li className="project-card">
        <img src={projectImageUrl} alt="project-image" className="project-image" />
        <div className="project-card-text-container">
            <h1 className="project-skills-heading">Technologies Used</h1>
            <ul className="project-skills-container">
                {technologiesUsed.split(", ").map((tech, index) => (
                    <li key={index} className="project-skill-item">{tech}</li>
                ))}
            </ul>
            <h1 className="project-name-heading">{title}</h1>
            <p className="project-description">{description}</p>
            <ul className="project-output-visible-container">
                <li className="project-output-visible-item"><button type="button" className="project-output-item-button" onClick={oncheckOutProject}><FaArrowUpRightFromSquare className="output-icon" /></button></li>
                <li className="project-output-visible-item"><button type="button" className="project-output-item-button" onClick={onCheckOutGitHub}><FaGithub className="output-icon" /></button></li>
            </ul>
        </div>
    </li>
}

export default ProjectCard