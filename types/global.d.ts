// for style loaders
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module '*.scss' {
  const styles: {[className: string]: string};
  export = styles;
}
