import "./index.css"

const ExperienceCard = (props) => {
    const { data } = props
    const { companyName
        , role, duration,
        roleDescription } = data

    return (
        <li className="experience-card-bg">
            <h1 className="experience-name">{companyName}</h1>
            <p className="experience-role">{role}</p>
            <p className="experience-duration">{duration}</p>
            <p className="experience-role-description">{roleDescription}</p>
        </li>
    )
}

export default ExperienceCard