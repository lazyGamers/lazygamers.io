import React from "react";

import undefImg from "../../media/images/undef-contributor-image.png";
import { Contributor as ContributorModel } from "../../../content/about/contributors.content";
import contributorStyle from "./contributor.component.module.scss";

// tslint:disable-next-line:no-empty-interface
export interface ContributorProps {
    contributor: ContributorModel;
}

export class Contributor extends React.Component<ContributorProps, {}> {
    
    public render() {
        return (
            <div>
                <div className={contributorStyle.image}>
                    <img src={this.props.contributor.image ? this.props.contributor.image : undefImg}
                        alt={this.props.contributor.name}/>
                </div>
                <div className={contributorStyle.name}>
                    {this.props.contributor.name}
                </div>
                <div className={contributorStyle.job}>
                    {this.props.contributor.job}
                </div>
            </div>
        );
    }
    
}
