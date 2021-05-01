import styled from "styled-components";

export const About1 = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: grey;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  flex-direction: row;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  img {
    width: 90%;
    height: 80vh;
    object-fit: cover;
    flex-direction: row;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Image2 = styled.div`
  display: flex;
  img {
    width: 100%;
    height: 30vh;
    object-fit: contain;
    flex-direction: row;
    justify-content: center;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
`;
