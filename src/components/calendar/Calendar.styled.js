import styled from "styled-components";

export const CalendarStyled = styled.div`
  display: block;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 6;

  @media screen and (max-width: 480px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarContainer = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarTitle = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
  padding: 0 7px;

  @media screen and (max-width: 480px) {
    padding: 0;
    font-size: 16px;
  }
`;
export const Subttl = styled(CalendarTitle)`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const CalendarBlock = styled.div`
  display: block;

  p {
    font-size: 10px;
    color: ${({ theme }) => theme.textSecondary};
    font-weight: 400;
  }

  span {
    color: ${({ theme }) => theme.text};
  }
`;
export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
export const CalendarMonth = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;

  @media screen and (max-width: 480px) {
    margin-top: 16px;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  width: 100%;

  @media screen and (max-width: 480px) {
    gap: 6px;
    margin: 0;
  }
`;

export const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
`;

export const DayName = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

export const DayCells = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  align-items: center;
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 10px;
  line-height: 1;
  cursor: pointer;
  color: ${({ theme }) => theme.textSecondary};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.calendarCellHover};
    color: ${({ theme }) => theme.text};
  }

  &.active-day,
  &:active {
    background-color: ${({ theme }) => theme.calendarCellActive};
    color: #ffffff;
  }

  &.weekend {
    color: #ff6d00;
  }

  &.weekend:hover {
    background-color: #ff6d00;
    color: #ffffff;
  }

  &.other-month {
    opacity: 0.4;
  }

  &.current {
    font-weight: 700;
    border: 1px solid ${({ theme }) => theme.textSecondary};
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 14px;
    min-width: 36px;
  }
`;
