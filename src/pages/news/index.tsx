import React from "react";

import newsPageStyle from "./news.page.module.scss";
import { Layout } from "../../components/layout/layout.component";
import { SEO } from "../../components/seo";
import { graphql } from "gatsby";
import { QueryMarkdownModel } from "../../models/template.models";
import { NewsExtract } from "../../components/news-extract/news-extract.component";
import { Social } from "../../components/social/social.component";

// tslint:disable-next-line:no-empty-interface
export interface NewsPageProps extends QueryMarkdownModel {

}

export default class NewsPage extends React.Component<NewsPageProps, {}> {

    public render() {
        return (
            <Layout menuTheme="light">
                <SEO title="News"/>
                <div className={`wrapper ${newsPageStyle.pageHeader}`}>
                    <div className={`content ${newsPageStyle.headerSection}`}>
                        <h1>LazyGamers News</h1>
                    </div>
                </div>
                <div className={`wrapper`}>
                    <div className={`content ${newsPageStyle.newsPage} ${newsPageStyle.condensedContent}`}>
                        {this.props.data.allMarkdownRemark.nodes.map((news, index) => (
                            <div key={index} className={newsPageStyle.newsContent}>
                                <NewsExtract path={news.frontmatter.path} title={news.frontmatter.title} titleSize={2}
                                    description={news.excerpt as string} date={news.frontmatter.date}/>
                            </div>
                        ))}
                    </div>
                </div>
                <Social/>
            </Layout>
        );
    }
}
export const newsPageQuery = graphql`
  query newsPageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          date
          title
          path
        }
        excerpt(pruneLength: 800)
      }
    }
  }
`;
