import styled from "styled-components";

export const StyledForm = styled.form`
  font-family: var(--font-primary);

  .btn {
  }
`;
export const StyledDiv = styled.div`
  font-family: var(--font-primary);

  .modalOverlay {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modalBox {
    background: var(--Grey-3);
    width: 100%;
    max-width: 400px;
    height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline:15px;
    width: 400px;
    height:50px;
    background: var(--Grey-2);
  }
  .modalHeader > h2 {
    color: var(--Grey-0);
    font-size: 0.875rem;
  }
  .inputContainer{
    margin-bottom:1rem;
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
  .inputSelect > h3 {
    font-weight: 400;
    font-size: 12px;
    color: var(--Grey-0);
    padding-bottom: 1rem;
  }
  .inputSelect > select {
    background: var(--Grey-2);
    color: var(--Grey-1);
    width: 300px;
    border: none;
    border-radius: 4px;
    padding: 0.625rem 1rem;
    margin-bottom: 1rem;
  }
  .btn {
    background: var(--color-primary-Negative);
    padding: 10px 40px;
    border-radius: 4px;
    width: 300px;
  }
  .btn:hover {
    background: var(--color-primary);
  }
`;
