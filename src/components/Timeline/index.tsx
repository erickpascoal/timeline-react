import { Line, LineProps } from "./Line";
import { CenterLine, Container } from "./styles";

export interface TimeLineList extends Omit<LineProps, "variant"> {}

interface TimelineProps {
  lines: TimeLineList[];
}

export function Timeline({ lines }: TimelineProps) {
  return (
    <Container>
      <CenterLine>
        <a href="/#" className="scroll-icon">
          <i className="fa fa-chevron-up"></i>
        </a>
      </CenterLine>

      {lines.map((line, index) => (
        <Line
          variant={index % 2 === 0 ? "left" : "right"}
          icon={line.icon}
          title={line.title}
          date={line.date}
          description={line.description}
        />
      ))}
    </Container>
  );
}
