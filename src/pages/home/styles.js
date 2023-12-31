import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  gap: 5rem;
`;

export const ApresentationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;

  padding: 0 4rem;

  width: 100%;

  @media only screen and (max-width: 1430px) {
    align-items: center;
    gap: 5rem;
    padding: 5rem;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding: 0;
  }
`;

export const MainScreenPhoneImg = styled.img`
  width: 20rem;

  @media only screen and (max-width: 1430px) {
    width: 15rem;
  }

  @media only screen and (max-width: 767px) {
    width: 10rem;
  }
`;

export const ApresentationTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;

  h1 {
    font-size: 6rem;
    color: #ff7a00;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media only screen and (max-width: 1430px) {
    margin-top: 0;

    h1 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 767px) {
    margin-top: 2rem;
    flex-direction: column;

    h1 {
      font-size: 3rem;
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`;

