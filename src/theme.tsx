import { Theme } from "@aws-amplify/ui-react";
/*
const theme: Theme = {
  name: "my-theme",
  tokens: {
    colors: {
      font: {
        primary: { value: "#0d1a26" },
        // ...
      },
      background: { secondary: "#f5f8fa" },
    },
  },
};

export default theme;
*/

const lightTheme: Theme = {
  name: "light-theme",
  tokens: {
    colors: {
      font: {
        primary: { value: "#0d1a26" }, // light theme font color
      },
      background: { secondary: { value: "#f5f8fa" } }, // light theme background color
    },
  },
};

const darkTheme: Theme = {
  name: "dark-theme",
  tokens: {
    colors: {
      font: {
        primary: { value: "#ffffff" }, // dark theme font color
      },
      background: { secondary: { value: "#0d1a26" } }, // dark theme background color
    },
  },
};

const getTheme = (themeName: string) => {
  switch (themeName) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};
export default getTheme;