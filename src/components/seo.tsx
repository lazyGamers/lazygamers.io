import React from "react";
import * as PropTypes from "prop-types";
import Helmet from "react-helmet";

export interface SEOProps {
    description: string;
    lang: string;
    meta: any[];
    title: string;
}

export class SEO extends React.Component<SEOProps, {}> {
    
    public static propTypes = {
        description: PropTypes.string,
        lang: PropTypes.string,
        meta: PropTypes.arrayOf(PropTypes.object),
        title: PropTypes.string.isRequired,
    };
    
    public static defaultProps = {
        lang: `en`,
        meta: [] as any[],
        description: ``,
    };
    
    public render() {
        const { lang, title, meta, description } = this.props;
        return (
            <Helmet
                htmlAttributes={{
                    lang,
                }}
                title={title}
                titleTemplate={`%s | LazyGamers`}
                meta={[
                    {
                        name: `description`,
                        content: description,
                    },
                    {
                        property: `og:title`,
                        content: title,
                    },
                    {
                        property: `og:description`,
                        content: description,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:card`,
                        content: `summary`,
                    },
                    {
                        name: `twitter:creator`,
                        content: "site.siteMetadata.author",
                    },
                    {
                        name: `twitter:title`,
                        content: title,
                    },
                    {
                        name: `twitter:description`,
                        content: description,
                    },
                ].concat(meta)}
            />
        );
    }
}
