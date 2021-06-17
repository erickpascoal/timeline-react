import styled, { css } from "styled-components";
import { LineProps } from ".";

interface ContainerProps extends Pick<LineProps, "variant"> {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${(props) =>
    props.variant === "left" ? "flex-start" : "flex-end"};
`;

export const Item = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 5px;
  width: calc(50% - 40px);
  padding: 20px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    background: #fff;
    top: 28px;
    z-index: -1;
    transform: rotate(45deg);
    ${(props) => itemVariants[props.variant]}
  }

  i {
    position: absolute;
    background: #f2f2f2;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ff7979;
    font-size: 17px;
    box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);

    ${(props) => iconVariants[props.variant]}
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  strong {
    font-size: 1.3rem;
  }
`;

const itemVariants = {
  left: css`
    right: -7px;
  `,
  right: css`
    left: -7px;
  `,
};

const iconVariants = {
  left: css`
    top: 15px;
    right: -60px;
  `,
  right: css`
    top: 15px;
    left: -60px;
  `,
};
