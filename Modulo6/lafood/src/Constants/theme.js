import { primaryColor, primaryNeutralColor, secondaryColor, secondaryNeutralColor } from "./colors";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  
  palette: {
    primary: {
      light: primaryNeutralColor,
      main: primaryColor,
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: secondaryNeutralColor,
      main: secondaryColor,
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;