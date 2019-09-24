import React from "react";
import { SEO } from "../components/seo";
import { Layout } from "../components/layout/layout.component";

export default class NotFoundPage extends React.Component<{}, {}> {
    
    public render() {
        return (
            <Layout>
                <div className="page page-404">
                    <SEO title="404: Not found"/>
                    <h1>404 Error!</h1>
                    <p>Requested page not found!</p>
                </div>
            </Layout>
        );
    }
    
}
