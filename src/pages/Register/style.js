import styled from "styled-components";

export const StyledDiv = styled.div`
  background: var(--Grey-4);
  font-family: var(--font-primary);
  height: fit-content;
  padding: 20vh 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
  form {
    background: var(--Grey-3);
    width: fit-content;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  form > h2 {
    color: var(--Grey-0);
    font-weight: 700;
    font-size: 1.125rem;
  }
  .inputContainer > h3 {
    font-weight: 400;
    font-size: 12px;
    color: var(--Grey-0);
    padding-bottom: 1rem;
  }
  .inputContainer > input {
    background: var(--Grey-2);
    border: none;
    border-radius: 4px;
    padding: 0.625rem 4rem;
  }
  form > button {
    background-color: var(--color-primary-Negative);
    padding: 12px 5rem;
    border-radius: 2px;
    color: var(--Grey-0);
    width: 18rem;
  }
  form > button:hover {
    background-color: var(--color-primary-focus);
  }
  h4 {
    color: var(--Grey-1);
    font-size: 0.75rem;
    font-weight: 600px;
  }
  .styledLink {
    background-color: var(--Grey-1);
    padding: 12px 4rem;
    border-radius: 2px;
    color: var(--Grey-0);
  }
  .inputSelect > h3 {
    font-weight: 400;
    font-size: 12px;
    color: var(--Grey-0);
    padding-bottom: 1rem;
  }
  .inputSelect > select {
    background: var(--Grey-2);
    color: var(--Grey-1);
    width: 21vw;
    border: none;
    border-radius: 4px;
    padding: 0.625rem 1rem;
    margin-bottom: 1rem;
  }
  .StyledLink {
    background: var(--Grey-3);
    padding: 0.5rem 1rem;
    color: var(--Grey-0);
    border-radius: 4px;
    height: fit-content;
  }
  .topTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25vw;
    margin-bottom: 1rem;
  }
  .topTitle > h1 {
    font-size: 1.5rem;
  }
`;
