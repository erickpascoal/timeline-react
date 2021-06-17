import { Container, Item, ItemHeader } from "./styles";

export interface LineProps {
  variant: "left" | "right";
  icon: string;
  title: string;
  date: string;
  description: string;
}

export function Line({ variant, icon, title, date, description }: LineProps) {
  return (
    <Container variant={variant}>
      <Item variant={variant}>
        <i className={icon}></i>

        <ItemHeader>
          <strong>{title}</strong>
          <p>{date}</p>
        </ItemHeader>

        <p>{description}</p>
      </Item>
    </Container>
  );
}
