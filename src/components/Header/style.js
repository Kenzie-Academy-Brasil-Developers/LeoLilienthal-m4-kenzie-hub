import styled from "styled-components";

export const StyledHeader = styled.header`
  font-family: var(--font-primary);
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  background: var(--Grey-4);
  width: clamp(320px,70vw,1400px);
  padding-inline:50px;
  box-sizing:border-box;

  h2 {
    color: var(--color-primary);
  }
  button {
    background: var(--Grey-3);
    color: var(--Grey-0);
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
`;
