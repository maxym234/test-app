import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  @media (min-width: 576px) {
    -ms-flex: 0 0 83%;
    flex: 0 0 83%;
    max-width: 83%;
  }
  @media (max-width: 1350px) {
    -ms-flex: 0 0 70%;
    flex: 0 0 70%;
    max-width: 70%;
  }
  @media (max-width: 940px) {
    flex: none;
    max-width: none;
  }
`;

export const Main = styled.main`
  display: flex;
  margin-top: 20px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  @media (max-width: 1380px) {
    justify-content: center;
  }
`;

export const WrapComponents = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 1380px) {
    flex-direction: column;
  }
  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  font-size: 2.5rem;
  text-align: left;
  font-weight: normal;
  color: gray;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  @media (max-width: 680px) {
      font-size: 1.5rem;
  }
`;

export const WrapComponent = styled.div`
    min-width: 500px;
    max-width: 520px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    height: min-content;
    @media (max-width: 680px) {
      min-width: auto;
      max-width: none;
    }
`;