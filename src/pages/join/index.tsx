import React from "react";

import joinPageStyle from "./join.page.module.scss";
import { Layout } from "../../components/layout/layout.component";
import { Social } from "../../components/social/social.component";
import { ContactForm } from "../../components/contact-form/contact-form.component";
import { NavUtil } from "../../utils/nav.util";
import { GITHUB_URL } from "../../../content/footer/social.content";
import infoLazyGamers from "../../media/images/info-lazygamers.png";
import { SEO } from "../../components/seo";

export default class JoinPage extends React.Component {
    
    private jumpToForm(): void {
        NavUtil.jumpToContactForm();
    }
    
    private openInfo(): void {
        if (typeof window !== "undefined") {
            window.location.href = "mailto:info@lazygamers.io";
        }
    }
    
    public render() {
        return (
            <Layout>
                <SEO title="Join us"/>
                <div className={`wrapper ${joinPageStyle.pageHeader}`}>
                    <div className={`content ${joinPageStyle.headerSection}`}>
                        <h1>Interested in joining us?</h1>
                    </div>
                </div>
                
                <div className={`wrapper`}>
                    <div className={`content ${joinPageStyle.condensedContent} ${joinPageStyle.contactContent}`}>
                        <p>
                            There are multiple ways you can get in contact with us:
                        </p>
                        <div className={joinPageStyle.contactOptions}>
                            <div className={joinPageStyle.contactOption}>
                                <span className={joinPageStyle.box}/>
                                <span>
                                    Contact us using form
                                    {" "}<span className={`link`} onClick={this.jumpToForm}>below</span>
                                    .
                                </span>
                            </div>
                            <div className={joinPageStyle.contactOption}>
                                <span className={joinPageStyle.box}/>
                                <span className="d-flex align-items-center">
                                    Send us an email to
                                    <img alt="info" style={{ marginLeft: "5px", cursor: "pointer"}}
                                        src={infoLazyGamers} onClick={this.openInfo}/>
                                </span>
                            </div>
                            <div className={joinPageStyle.contactOption}>
                                <span className={joinPageStyle.box}/>
                                <span>Help contributing at our
                                    {" "}<a className={`link`} target="_blank"
                                        rel="noreferrer noopener" href={GITHUB_URL}>
                                        GitHub page
                                    </a>
                                    .
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Social/>
                <ContactForm/>
            </Layout>
        );
    }
    
}
