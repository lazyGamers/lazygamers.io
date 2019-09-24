import React from "react";

import aboutPageStyle from "./about.page.module.scss";
import { Layout } from "../../components/layout/layout.component";
import { SEO } from "../../components/seo";
import { Link, navigate } from "gatsby";
import { teams } from "../../../content/about/contributors.content";
import { Contributor } from "../../components/contributor/contributor.component";
import { Social } from "../../components/social/social.component";

export default class AboutPage extends React.Component {
    
    private goToJoinPage() {
        navigate("/join");
    }
    
    public render() {
        return (
            <Layout>
                <SEO title="About"/>
                <div className={`wrapper ${aboutPageStyle.pageHeader}`}>
                    <div className={`content ${aboutPageStyle.headerSection}`}>
                        <h1>About us</h1>
                    </div>
                </div>
                <div className="wrapper">
                    <div className={`content ${aboutPageStyle.condensedContent} ${aboutPageStyle.pageContent}`}>
                        <h2 className="text-center">Who are we?</h2>
                        <p className="text-center">
                            We are an international group of developers and
                            gamers who share interest in designing,
                            developing & playing games. Despite our name, we are
                            not that lazy. Many of our members dedicate their
                            free time into creating game content, implementing
                            those ideas and testing them. We are mostly interested
                            in making historical games, that try to give a player
                            a sense of realism of how things used to be.
                        </p>
                        <p className="text-center">
                            Our main project is to design and implement a historical
                            browser-based game set in middle ages. More info about
                            this project can be found on <a href="#" className="link"> project page (TBD)</a> or
                            through our <Link className="link" to="/news">news reel</Link>.
                        </p>
                        
                        <h2 className={`text-center ${aboutPageStyle.sectionBreak}`}>Interested in what we do?</h2>
                        <p className="text-center">
                            If you are interested in what we do and would like
                            to contribute, don't hesitate to get in contact with us.
                        </p>
                        <div className={aboutPageStyle.contribution}>
                            <button onClick={this.goToJoinPage}>Join us</button>
                        </div>
                        
                        <h2 className={`text-center ${aboutPageStyle.sectionBreak}`}>Our team</h2>
                        
                        <div className={aboutPageStyle.teams}>
                            {teams.map((team, teamIndex) => (
                                <div key={teamIndex}>
                                    <h3 className={`text-center`}>{team.department}</h3>
                                    <div className={aboutPageStyle.teamLead}>
                                        <Contributor contributor={team.lead}/>
                                    </div>
                                    <div className={aboutPageStyle.teamContributors}>
                                        {team.contributors.map((contributor, contributorIndex) => (
                                            <div className={aboutPageStyle.contributor} key={contributorIndex}>
                                                <Contributor contributor={contributor}/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Social/>
            </Layout>
        );
    }
    
}
