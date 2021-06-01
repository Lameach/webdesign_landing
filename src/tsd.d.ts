declare module "*.svg" {
  const content: string;
  export default content;
}

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png' {
  const value: any;
  export default value;
}