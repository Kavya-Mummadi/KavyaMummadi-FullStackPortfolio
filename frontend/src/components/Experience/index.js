import ExperienceCard from '../ExperienceCard'

import "./index.css"

const Experience = (props) => {
    const { experienceData } = props
    return (
        <div className="experience-bg">
            <h1 className="experience-heading">My <span className="experience-heading-highlight">Experience</span></h1>
            <p className="experience-description">Applying knowledge, creating value, shaping experiences.</p>
            <ul className="experience-list-container">
                {
                    experienceData.map(eachExperience => (<ExperienceCard key={eachExperience.id} data={eachExperience} />))
                }

            </ul>
        </div>
    )
}


export default Experience