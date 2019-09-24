
export interface MarkdownData {
    frontmatter: {
        date: string;
        path: string;
        title: string;
    };
    html: string;
    edges: any;
}

export interface TemplateModel {
    data: {
        markdownRemark: MarkdownData;
    };
}

export interface QueryMarkdownNode {
    frontmatter: {
        date: string;
        title: string;
        path: string;
    };
    html?: string;
    excerpt?: string;
}

export interface QueryMarkdownEdge {
    node?: QueryMarkdownNode;
}

export interface QueryMarkdownModel {
    data: {
        allMarkdownRemark: {
            nodes: QueryMarkdownNode[];
        }
    };
}
