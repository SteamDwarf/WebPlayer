declare module '*.css' {
    const classNames: Record<string, string>;
    export default classNames;
}
declare module '*.scss' {
    const classNames: Record<string, string>;
    export default classNames;
}
declare module "*.png" {
    const value: any;
    export = value;
}
declare module "*.jpg" {
    const value: any;
    export = value;
}