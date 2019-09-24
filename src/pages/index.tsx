import React from "react";
import { SEO } from "../components/seo";
import { graphql, navigate} from "gatsby";
import { Layout } from "../components/layout/layout.component";
import { Social } from "../components/social/social.component";
import { ContactForm } from "../components/contact-form/contact-form.component";

import indexPageStyle from "./index.page.module.scss";
import { QueryMarkdownModel } from "../models/template.models";
import { NewsExtract } from "../components/news-extract/news-extract.component";

// tslint:disable-next-line:no-empty-interface
export interface IndexPageProps extends QueryMarkdownModel {

}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
    
    constructor(props: any) {
        super(props);
        
        this.goToJoinPage = this.goToJoinPage.bind(this);
    }
    
    private goToJoinPage() {
        navigate("/join");
    }
    
    public render() {
        return (
            <Layout menuTheme="light">
                <SEO title="Home"/>
                <div className={`wrapper ${indexPageStyle.pageHeader}`}>
                    <div className={`content ${indexPageStyle.headerSection}`}>
                        <h1>Coding & Gaming</h1>
                        <p className={indexPageStyle.subtitle}>
                            For those who love to code games and play with code
                        </p>
                        <div className={indexPageStyle.contribution}>
                            <button onClick={this.goToJoinPage}>Join us</button>
                        </div>
                    
                    </div>
                </div>
                <div className="wrapper">
                    <div className={`content ${indexPageStyle.newsSection}`}>
                        <h1>Latest news</h1>
                        {this.props.data.allMarkdownRemark.nodes.map((news, index) => (
                            <div key={index} className={indexPageStyle.newsExtract}>
                                <NewsExtract title={news.frontmatter.title} path={news.frontmatter.path}
                                    description={news.excerpt as string} date={news.frontmatter.date}/>
                            </div>
                        ))}
                    </div>
                </div>
                <Social/>
                <ContactForm/>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
  query pageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
      nodes {
        frontmatter {
          date
          title
          path
        }
        excerpt(pruneLength: 400)
      }
    }
  }
`;
