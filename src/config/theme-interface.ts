import "styled-components";

declare module "styled-components" {
    export type ThemeInterface =  {
        readonly colors: {
            readonly cosmicLatte: string;
            readonly white: string;
            readonly burntSienna: string;
        };
    };
}

