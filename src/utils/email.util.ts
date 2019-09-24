export interface EmailData {
    name: string;
    email: string;
    message: string;
    "form-name"?: string;
    itsatrap?: string;
}

export class EmailUtil {
    
    public static sendEmail(data: EmailData): Promise<void> {
        
        return new Promise<void>((resolve, reject) => {
            const request = new Request("/");
            const headers = new Headers();
            headers.append("Content-Type", "application/x-www-form-urlencoded");
            const options: RequestInit = {
                method: "POST",
                headers,
                body: EmailUtil.encodeData(data)
            };
            
            fetch(request, options).then((res: Response) => {
                resolve();
            }).catch((err: any) => {
                reject(err);
            });
        });
    }
    
    private static encodeData(data: any): string {
        return Object.keys(data)
            .filter(key => {
                return data[key] !== undefined;
            })
            .map(key => {
                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
            }).join("&");
    }
    
}
