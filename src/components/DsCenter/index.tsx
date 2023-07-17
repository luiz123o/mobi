import { Center } from "./styles";

type CenterProps = {
  children: React.ReactNode;
};

export const DsCenter = ({ children }: CenterProps) => {
  return <Center>{children}</Center>;
};
