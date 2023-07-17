import { Card } from "./styles";

export type CardProps = {
  children: React.ReactNode;
};

export const DsCard = ({ children }: CardProps) => {
  return <Card elevation={1}>{children}</Card>;
};
