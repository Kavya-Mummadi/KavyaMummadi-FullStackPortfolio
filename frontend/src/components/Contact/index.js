import { Component } from "react"
import { MdSend } from "react-icons/md"
import emailjs from "@emailjs/browser"
import ContactInfo from "../ContactInfo"

import "./index.css"

class Contact extends Component {
    state = {
        name: "",
        mail: "",
        message: "",
        sending: false,
    }

    onChangeInput = (field, value) => this.setState({ [field]: value })

    onClickSocialMeida = (iconPath) => window.open(iconPath, "_blank")

    onSendMessage = (event) => {
        event.preventDefault()
        const { name, mail, message } = this.state
        const now = new Date();
        const userTime = now.toLocaleString("en-IN", {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        });

        if (!name.trim() || !mail.trim() || !message.trim()) return

        this.setState({ sending: true })

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                { name, mail, message, time: userTime },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                alert("✅ Message sent successfully🎉!")
                this.setState({ name: "", mail: "", message: "", sending: false })
            })
            .catch((err) => {
                console.log(err)
                alert("❌ Failed to send message!!. Please try again.")
                this.setState({ sending: false })
            })
    }

    render() {
        const { name, mail, message, sending } = this.state
        const { contactDetails, socialMediaDetails } = this.props

        return (
            <div className="contact-me-bg" id="contact">
                <h1 className="contact-me-main-heading">Get In <span className="contact-me-heading-highlight">Touch</span></h1>
                <div className="get-in-touch-details-container">
                    <ContactInfo contactData={contactDetails} socialMediaData={socialMediaDetails} />
                    <div className="user-detials-bg">
                        <h1 className="form-heading">Send a Message</h1>
                        <form onSubmit={this.onSendMessage}>
                            <div className="form-labels-container">
                                <label className="label-heading">Your Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => this.onChangeInput("name", e.target.value)}
                                    className="user-input-container"
                                    placeholder="Enter Your Name ..."
                                    required
                                />
                            </div>

                            <div className="form-labels-container">
                                <label className="label-heading">Your Email</label>
                                <input
                                    type="email"
                                    value={mail}
                                    onChange={(e) => this.onChangeInput("mail", e.target.value)}
                                    className="user-input-container"
                                    placeholder="Enter Your Email ..."
                                    required
                                />
                            </div>

                            <div className="form-labels-container">
                                <label className="label-heading">Your Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => this.onChangeInput("message", e.target.value)}
                                    className="user-input-container"
                                    placeholder="Hi, I'd like to talk about ..."
                                    rows="4"
                                    required
                                />
                            </div>

                            <div className="form-button-container">
                                <button type="submit" className="form-button" disabled={sending}>
                                    {sending ? "Sending..." : "Send Message"} <MdSend className="send-icon" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
