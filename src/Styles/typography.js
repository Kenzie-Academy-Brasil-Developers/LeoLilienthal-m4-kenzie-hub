import styled, { css } from "styled-components";

export const TitleStyles = css`
  font-family: var(--font-primary);
  color: var(--Grey-4);
  font-weight: 800;
  line-height: 1.6;
  ${({ fontSize }) => {
    switch (fontSize) {
      case "Big":
        return css`
          font-size: 1.125rem;
        `;
      case "Medium":
        return css`
          font-size: 1rem;
        `;
      case "Small":
        return css`
          font-size: 0.875rem;
        `;
    }
  }}
`;

export const StyledTitleOne = styled.h1`
  ${TitleStyles}
`;

export const StyledTitleTwo = styled.h2`
  ${TitleStyles}
`;

export const StyledTitlethree = styled.h3`
  ${TitleStyles}
`;

export const StyledParagraph = styled.p`
  font-family: var(--font-primary);
  color: var(--Grey-4);
  line-height: 1.6;

  font-weight: 400;

  strong {
    font-weight: 600;
  }

  ${({ fontSize }) => {
    switch (fontSize) {
      case "Big":
        return css`
          font-size: 1.125rem;
        `;
      case "Medium":
        return css`
          font-size: 1rem;
        `;
      case "Small":
        return css`
          font-size: 0.875rem;
        `;
    }
  }}
`;
