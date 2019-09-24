
export interface HeaderLink {
    title: string;
    url: string;
    external?: boolean;
}

export const headerLinks: HeaderLink[] = [
    {
        title: "News",
        url: "/news"
    },
    {
        title: "About",
        url: "/about"
    },
    {
        title: "Join",
        url: "/join"
    }
];
