import styled from "styled-components";

export const StyledHeader = styled.header`
  font-family: var(--font-primary);
  display: flex;
  justify-content: space-evenly;
  gap: 30vw;
  height: 10vh;
  align-items: center;
  background: var(--Grey-4);

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
