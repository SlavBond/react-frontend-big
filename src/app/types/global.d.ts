// чтоб typescript нормально читал classes из modules // https://stackoverflow.com/questions/41336858/how-to-import-css-modules-with-typescript-react-and-webpack
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png'

declare module '*.svg' {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGAElement>>
  export default SVG;
}

// настраиваем чтоб typescript видел глобальные перемыные которые мы прокидавем через webpack с помощью плагина new webpack.DefinePlugin

declare const __IS_DEV__: boolean;
