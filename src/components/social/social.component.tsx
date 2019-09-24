import React from "react";
import { socialLinks } from "../../../content/footer/social.content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import socialStyle from "./social.component.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export class Social extends React.Component {
    
    public render() {
        return (
            <div className="wrapper dark-bg">
                <div className={`content ${socialStyle.socialLinks}`}>
                    {socialLinks.map((link, index) => (
                        <div key={index} className={socialStyle.socialLink}>
                            <a href={link.url} target="_blank" rel="noreferrer noopener">
                                <FontAwesomeIcon icon={["fab", link.icon] as IconProp} title={link.title}/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    
}
