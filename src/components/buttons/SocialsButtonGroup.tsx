import { Instagram, Linkedin, GitHub } from 'react-feather'
import '../../styles/SocialsButtonGroup.scss'

interface SocialsButtonGroupProps {
    instagram?: string
    linkedin?: string
    github?: string
}

export function SocialsButtonGroup(props: SocialsButtonGroupProps) {
    return (
        <div className="socials-button-group-container">
            {props.instagram && (
                <a
                    className="social-button-icon"
                    href={props.instagram}
                    target="_blank"
                >
                    <Instagram />
                </a>
            )}
            {props.linkedin && (
                <a
                    className="social-button-icon"
                    href={props.linkedin}
                    target="_blank"
                >
                    <Linkedin />
                </a>
            )}
            {props.github && (
                <a
                    className="social-button-icon"
                    href={props.github}
                    target="_blank"
                >
                    <GitHub />
                </a>
            )}
        </div>
    )
}

export default SocialsButtonGroup
