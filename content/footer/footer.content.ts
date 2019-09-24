export interface FooterLink {
    title: string;
    url?: string;
    external?: boolean;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export const footerSections: FooterSection[] = [
    {
        title: "Products",
        links: [
            {
                title: "Feudal Europe"
            }
        ]
    },
    {
        title: "About",
        links: [
            {
                title: "About us",
                url: "/about"
            },
            {
                title: "Contribution",
                url: "/join"
            }
        ]
    }
];
