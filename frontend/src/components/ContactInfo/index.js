import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

import "./index.css"

const ContactInfo = (props) => {

    const { contactData, socialMediaData } = props

    const onClickSocialMeida = (path) => {
        window.open(path, "_blank")
    }

    return (
        <div className="contact-information-container">
            <h1 className="contact-info-heading">Contact Information</h1>
            <ul className="contact-information-items-container">
                {contactData.map(each => {
                    const IconComponent = MdIcons[each.iconName];
                    return (
                        <li className="contact-list-item" key={each.id}>
                            <IconComponent className="contact-info-icons" />
                            <div className="contact-item-text-contanier">
                                <h1 className="contact-info-item-heading">{each.label}</h1>
                                <p className="contact-info-item-value">{each.labelValue}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>

            <h1 className="connect-me-social-media-heading">Connect With Me</h1>
            <ul className="connect-icons-container">
                {socialMediaData.map(each => {
                    const IconComponent = FaIcons[each.iconName]
                    return (
                        <li key={each.id} className="connect-icon-item">
                            <button
                                type="button"
                                className="social-media-icons-button"
                                onClick={() => onClickSocialMeida(each.iconPath)}
                            >
                                <IconComponent className="social-media-icons" />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ContactInfo