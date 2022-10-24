import React, { ReactElement, useState } from 'react'
import SocialsButtonGroup from './../components/buttons/SocialsButtonGroup'

export default function Leads(): ReactElement {
    return (
        <div className="leads-container">
            Test
            <SocialsButtonGroup
                instagram="https://www.instagram.com/"
                linkedin="https://www.linkedin.com/feed/"
                github="https://github.com/"
            />
        </div>
    )
}
