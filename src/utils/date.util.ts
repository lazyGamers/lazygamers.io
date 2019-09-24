
export class DateUtil {
    
    private static pad(num: number): string {
        if (num < 10) {
            return `0${num}`;
        }
        return num.toString(10);
    }
    
    public static formatDate(date: Date): string {
        return `${DateUtil.pad(date.getDate())}.${DateUtil.pad(date.getMonth() + 1)}.${date.getFullYear()}`;
    }
    
}
