import styled from "styled-components";

export const Switch = styled.div`
  font-family: "Lucida Grande", Tahoma, Verdana, sans-serif;
  position: relative;
  height: 60px;
  width: 400px;
  background-color: #e4e4e4;
  border-radius: 20px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
`;

export const SwitchRadio = styled.input`
  display: none;
`;

export const SwitchSelection = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 60px;
  color: #fff;
  background: #ffcb47;
  border-radius: 20px;
  transition: left 0.25s ease-out;
`;

export const SwitchLabel = styled.label`
  position: relative;
  z-index: 2;
  float: left;
  width: 200px;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  cursor: pointer;

  ${SwitchRadio}:checked + & {
    transition: 0.15s ease-out;
    color: #fff;
  }
`;
