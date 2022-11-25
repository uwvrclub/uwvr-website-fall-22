import { Instagram, Linkedin, GitHub, Mail, Facebook } from 'react-feather'
import { FaDiscord } from 'react-icons/fa'
import '../styles/css/SocialButtons.css'

interface SocialsButtonsProps {
    instagram?: string
    linkedin?: string
    github?: string
    mail?: string
    facebook?: string
    discord?: string
}

export function SocialButtons(props: SocialsButtonsProps) {
    return (
        <div className="socials-button-group-container">
            {props.instagram && (
                <a
                    className="social-button-icon"
                    href={props.instagram}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Instagram />
                </a>
            )}
            {props.facebook && (
                <a
                    className="social-button-icon"
                    href={props.facebook}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Facebook />
                </a>
            )}
            {props.linkedin && (
                <a
                    className="social-button-icon"
                    href={props.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Linkedin />
                </a>
            )}
            {props.github && (
                <a
                    className="social-button-icon"
                    href={props.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHub />
                </a>
            )}
            {props.mail && (
                <a
                    className="social-button-icon"
                    href={props.mail}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Mail />
                </a>
            )}
            {props.discord && (
                <a
                    className="social-button-icon"
                    href={props.discord}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaDiscord />
                </a>
            )}
        </div>
    )
}

export default SocialButtons
