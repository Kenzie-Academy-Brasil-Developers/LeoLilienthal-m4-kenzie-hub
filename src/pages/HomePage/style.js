import styled from "styled-components";

export const StyledDiv = styled.div`
  background: var(--Grey-4);
  height: 100vh;
  font-family: var(--font-primary);
  display: flex;
  flex-direction: column;
  padding-top:1rem;
  align-items: center;

  div > h3 {
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--Grey-0);
    padding-bottom: 1rem;
  }
  div > h4 {
    font-weight: 400;
    color: var(--Grey-0);
  }
  button {
    color: var(--Grey-0);
  }
  .techList {
    color: var(--Grey-0);
    
  }
  .createContainer {
    display: flex;
    justify-content: space-between;
    width: clamp(320px, 70vw, 1400px);
    padding-inline: 50px;
    box-sizing: border-box;
  }
  .createContainer > h2 {
    color: var(--Grey-0);
  }
  .createContainer > button {
    
    border: none;
    border-radius: 8px;
    padding: 10px 15px;
    background: var(--Grey-3);
  }
  .techList {
    background: var(--Grey-3);

    border-radius: 4px;
    padding: 20px 25px;

    margin-top: 1rem;
    width: 61.5vw;
  }
  .techName {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1rem;
    padding: 15px 20px;

    background: var(--Grey-4);
    border-radius: 4px;
  }
  .techName > h3 {
    font-size: 0.6rem;
    font-weight: 400;
  }
  .techName > h2 {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .techName:hover {
    background: var(--Grey-2);
  }
`;
