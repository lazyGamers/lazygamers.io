import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/layout/layout.component";
import { TemplateModel } from "../models/template.models";
import { Social } from "../components/social/social.component";

import newsTemplateStyle from "./news.template.module.scss";
import { DateUtil } from "../utils/date.util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SEO } from "../components/seo";

export default class NewsTemplate extends React.Component<TemplateModel, {}> {
    
    public render() {
        const {markdownRemark} = this.props.data;
        const {frontmatter, html} = markdownRemark;
        
        return (
            <Layout menuTheme="dark">
                <SEO title={frontmatter.title}/>
                <div className={`wrapper`}>
                    <div className={`content ${newsTemplateStyle.newsContent} ${newsTemplateStyle.condensedContent}`}>
                        <div>
                            <Link to="/news" className="link">
                                <FontAwesomeIcon icon={["fas", "arrow-left"]} />
                                <span style={{marginLeft: "8px"}}>Back to news</span>
                            </Link>
                        </div>
                        <h1>{frontmatter.title}</h1>
                        <small>{DateUtil.formatDate(new Date(frontmatter.date))}</small>
                        <div dangerouslySetInnerHTML={{__html: html}} />
                    </div>
                </div>
                <Social/>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
