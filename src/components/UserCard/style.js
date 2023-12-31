import styled from "styled-components";

export const StyledDiv = styled.div`
  font-family: var(--font-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid var(--Grey-3);
  border-bottom: 1px solid var(--Grey-3);

  height: 7rem;
  margin-bottom: 2rem;
  width:clamp(320px,70vw,1400px);
  padding-inline:50px;
  box-sizing:border-box;

  .title {
    color: var(--Grey-0);
    font-size: 1.125rem;
    font-weight: 700;
  }
  .course {
    color: var(--Grey-1);
    font-size: 0.75rem;
  }
  
`;
