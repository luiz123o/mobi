import { Typography, Box } from "../index";

type HeaderProps = {
  title: string;
  description: string;
};

export const Header = ({ description, title }: HeaderProps) => {
  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" color="#424242">
        {title}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        fontWeight="bold"
        color="#424242"
      >
        {description}
      </Typography>
    </Box>
  );
};
