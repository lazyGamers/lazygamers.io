
export interface Contributor {
    name: string;
    job: string;
    github?: string;
    image?: any;
}

export interface Team {
    department: string;
    lead: Contributor;
    contributors: Contributor[];
}

export const teams: Team[] = [
    {
        department: "Development",
        lead: {
            name: "John Smith",
            job: "CTO"
        },
        contributors: [
            {
                name: "John Smith",
                job: "Developer"
            },
            {
                name: "John Smith",
                job: "Developer"
            },
            {
                name: "John Smith",
                job: "Developer"
            },
            {
                name: "John Smith",
                job: "Developer"
            },
            {
                name: "John Smith",
                job: "Developer"
            },
            {
                name: "John Smith",
                job: "Developer"
            },
            {
                name: "John Smith",
                job: "UX Designer"
            }
        ]
    },
    {
        department: "Game content",
        lead: {
            name: "John Smith",
            job: "Chief Design Officer"
        },
        contributors: [
            {
                name: "John Smith",
                job: "Content designer"
            },
            {
                name: "John Smith",
                job: "Content designer"
            },
            {
                name: "John Smith",
                job: "Content designer"
            }
        ]
    }
];
