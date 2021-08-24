export class Utils {
    public static formatString(string: string, ...args: string[]) {
        for (let i = 0; i < args.length; i++) {
            string.replace(`${i}`, args[i]);
        }
        return string;
    }
}
export const FormatString = (string: string, ...args: string[]) {
    for (let i = 0; i < args.length; i++) {
        string.replace(`${i}`, args[i]);
    }
    return string;
}