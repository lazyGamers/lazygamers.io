import React from "react";

import newsExtractStyle from "./news-extract.component.module.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateUtil } from "../../utils/date.util";

export interface NewsExtractProps {
    path: string;
    title: string;
    description?: string;
    date: string;
    titleSize?: number;
}

export class NewsExtract extends React.Component<NewsExtractProps, {}> {
    
    private static defaultProps: NewsExtractProps = {
        path: "",
        title: "",
        description: "lalalala",
        date: "",
        titleSize: 3
    };
    
    private renderTitle() {
        if (this.props.titleSize && this.props.titleSize === 2) {
            return (
                <h2 className={newsExtractStyle.newsTitle}>
                    {this.props.title}
                </h2>
            );
        }
        return (
            <h3 className={newsExtractStyle.newsTitle}>
                {this.props.title}
            </h3>
        );
    }
    
    public render() {
        return (
            <div className={newsExtractStyle.newsContent}>
                {this.renderTitle()}
                <small>{DateUtil.formatDate(new Date(this.props.date))}</small>
                <p>{this.props.description}</p>
                <div className={newsExtractStyle.moreLink}>
                    <Link to={this.props.path}>
                        <span>Read more</span>
                        <FontAwesomeIcon icon={["fas", "arrow-right"]}/>
                    </Link>
                </div>
            </div>
        );
    }
}
