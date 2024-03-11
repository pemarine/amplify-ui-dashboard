
// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, Divider, Typography } from '@mui/material';


// ==============================|| CUSTOM MAIN CARD ||============================== //
import React, { ReactNode, RefAttributes } from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

interface MainCardProps extends RefAttributes<HTMLDivElement> {
    border?: boolean;
  boxShadow?: boolean;
  children: ReactNode;
  content?: boolean;
  contentClass?: string;
  contentSX?: SxProps<Theme>;
  darkTitle?: boolean;
  secondary?: ReactNode;
  shadow?: string;
  sx?: SxProps<Theme>;
  title?: string;
}

const MainCard: React.ForwardRefRenderFunction<HTMLDivElement, MainCardProps> = (
    {
    border = false,
    boxShadow,
    children,
    content = true,
    contentClass = '',
    contentSX = {},
    darkTitle,
    secondary,
    shadow,
    sx = {},
    title,
    //component,
    ref,
    ...others
  },
) => {
  const theme = useTheme();

  return (
    <Card
      {...others}
      sx={{
        border: border ? '1px solid' : 'none',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[300] + 98,
        ':hover': {
          boxShadow: boxShadow
            ? shadow ||
              (theme.palette.mode === 'dark' ? '0 2px 14px 0 rgb(33 150 243 / 10%)' : '0 2px 14px 0 rgb(32 40 45 / 8%)')
            : 'inherit'
        },
        ...sx
      }}
    >
      {!darkTitle && title && <CardHeader sx={contentSX} title={title} action={secondary} />}
      {darkTitle && title && (
        <CardHeader sx={contentSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />
      )}
      {title && <Divider />}
      {children}
    </Card>
  );
};

export default React.forwardRef(MainCard);