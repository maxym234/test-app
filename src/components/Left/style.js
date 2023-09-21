import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  @media (min-width: 576px) {
    -ms-flex: 0 0 15%;
    flex: 0 0 15%;
    max-width: 15%;
  }
  @media (max-width: 1350px) {
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
    max-width: 30%;
  }
  @media (max-width: 940px) {
    flex: none;
    max-width: none;
  }
`;

export const Aside = styled.aside`
  min-height: 100vh;
  max-width: 600px;
  background-color: #2b2f3e;
  padding: 10px;
  @media (max-width: 940px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: none;
  }
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;
`;
export const Comment = styled.div`
  color: #5b5d63;
`;
