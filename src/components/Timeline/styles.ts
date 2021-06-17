import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  margin: 50px auto;
  padding: 0 20px;
  position: relative;
`;

export const CenterLine = styled.div`
  position: absolute;
  height: 100%;
  width: 4px;
  background: #fff;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);

  .scroll-icon {
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

    bottom: 0px;
    left: 50%;
    font-size: 25px;
    transform: translateX(-50%);
  }
`;
