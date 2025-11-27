import styled from "styled-components";

export const Cards = styled.div`
  padding: 10%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 270px;
  height: 159px;
  border-radius: 24px;
  border-width: 1px;
  padding: 20px;
  background-color: rgba(217, 217, 217, 1);
  border: 1px solid rgba(16, 16, 16, 1);
`;
export const CardsCard = styled.div`
  display: contents;
  // display: block;
`;

export const Group = styled.div`
  width: 230px;
  height: 30px;
  border-radius: 50px;
  background: rgba(177, 177, 177, 1);
`;

export const Theme = styled.div`
  display: none;
`;

export const ThemeTitle = styled.p`
  display: none;
`;

export const Button = styled.button`
  background-color: rgba(217, 217, 217, 1);
  border: 1px solid rgba(16, 16, 16, 1);
`;

export const Content = styled.div`
  width: 164px;
  border-radius: 50px;
  background: rgba(177, 177, 177, 1);
`;

export const Title = styled.div`
  display: none;
`;

export const Description = styled.div`
  display: none;
`;

export const Date = styled.div`
  width: 81px;
  height: 15px;
  gap: 10px;
  border-radius: 50px;
  background-color: rgba(177, 177, 177, 1);
`;
export const DateSvg = styled.svg`
  display: none;
`;
export const DateTitle = styled.p`
  display: none;
`;
/* .skeleton__card {
  width: 270px;
  height: 159px;
  border-radius: 24px;
  background-color: rgba(217, 217, 217, 0.5);
  margin: 10px;
}

.skeleton__card__group,
.skeleton__card__title,
.skeleton__card__description,
.skeleton__card__date {
  background: rgba(177, 177, 177, 0.8);
  margin: 5px 0;
} */
