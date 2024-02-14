import { Image, useTheme } from "@aws-amplify/ui-react";

const Header = () => {
  const { tokens } = useTheme();

  return (
    <Image
      alt="logo"
      style={{ 
        display: 'block', 
        marginLeft: 'auto', 
        marginRight: 'auto',
        marginBottom: '20px'
      }} 
      width="80%"
      src="/logos/eMarineCoralBlue_Text.svg"
      padding={tokens.space.medium}
    />
  );
}
export default Header;