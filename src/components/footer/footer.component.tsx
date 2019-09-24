import React from "react";
import { Link } from "gatsby";

import footerStyle from "./footer.component.module.scss";

import { FooterLink, footerSections } from "../../../content/footer/footer.content";

export class Footer extends React.Component {
    
    private renderLink(link: FooterLink) {
        if (!link.url || link.url === "#") {
            return (
                <span>{link.title}</span>
            );
        }
        
        if (link.external) {
            return (
                <a href={link.url} title={link.title} target="_blank" rel="noreferrer noopener">{link.title}</a>
            );
        }
        return (
            <Link to={link.url} title={link.title}>{link.title}</Link>
        );
    }
    
    public render() {
        return (
            <div className="wrapper dark-bg">
                <div className="content">
                    <footer>
                        <div className={footerStyle.sections}>
                            {footerSections.map((section, index) => (
                                <div key={index} className={footerStyle.section}>
                                    <div className={footerStyle.sectionTitle}>
                                <span>
                                    {section.title}
                                </span>
                                    </div>
                                    <div className={footerStyle.sectionContent}>
                                        {section.links.map((link, linkIndex) => (
                                            <div className={footerStyle.sectionLink} key={linkIndex}>
                                                {this.renderLink(link)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={footerStyle.trademark}>
                            LazyGamers © {new Date().getFullYear()}
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}
