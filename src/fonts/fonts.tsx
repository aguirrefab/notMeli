import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: "Proxima Nova";
            src: url("/src/assets/fonts/proximanova-light.woff2");
            font-weight: 100;
        }

        @font-face {
            font-family: "Proxima Nova";
            src: url("/src/assets/fonts/proximanova-regular.woff2");
            font-weight: normal;
        }

        @font-face {
            font-family: "Proxima Nova";
            src: url("/src/assets/fonts/proximanova-semibold.woff2");
            font-weight: 500;
        }
        `}
  />
);

export default Fonts;