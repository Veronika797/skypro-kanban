import styled from "styled-components";

export const CalendarStyled = styled.div`
  display: none;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarContainer = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;
export const Subttl = styled(CalendarTitle)`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const CalendarBlock = styled.div`
  display: block;
`;
export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;
export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
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
    fill: #94a6be;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const DayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }

  &:active {
    background-color: #94a6be;
    color: #ffffff;
  }
  &.cell-day:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
  &.other-month {
    opacity: 0;
  }
  &.active-day {
    background-color: #94a6be;
    color: #ffffff;
  }

  &.weekend {
    color: #94a6be;
  }
  &.current {
    font-weight: 700;
  }

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

// import styled from "styled-components";

// export const Calendar = styled.div`
//   width: 100%;
// `;

// export const CalendarContainer = styled.div`
//   width: 182px;
//   margin-bottom: 20px;
// `;

// const CalendarTitle = styled.p`
//   color: #000;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1;
//   margin-bottom: 14px;
//   padding: 0 7px;
// `;
// const CalendarMonth = styled.div`
//   color: #94a6be;
//   font-size: 14px;
//   line-height: 25px;
//   font-weight: 600;
//   margin-top: 14px;
//   padding: 0 7px;

//   & span {
//     color: #000000;
//   }
// `;

// const CalendarBlock = styled.div`
//   display: block;
// `;

// const CalendarContent = styled.div`
//   margin-bottom: 12px;
// `;

// const CalendarDaysNames = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: space-between;
//   margin: 7px 0;
//   padding: 0 7px;
// `;

// const DayName = styled.div`
//   color: #94a6be;
//   font-size: 10px;
//   font-weight: 500;
//   line-height: normal;
//   letter-spacing: -0.2px;
// `;

// const CalendarCells = styled.div`
//   width: 182px;
//   height: 126px;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const CalendarCell = styled.div`
//   width: 22px;
//   height: 22px;
//   margin: 2px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #94a6be;
//   font-size: 10px;
//   line-height: 1;
//   letter-spacing: -0.2px;
//   cursor: pointer;

//   &.hover {
//     color: #94a6be;
//     background-color: #eaeef6;
//   }

//   &.active {
//     background-color: #94a6be;
//     color: #ffffff;
//   }

//   &.other-month {
//     opacity: 0;
//   }

//   &.weekend {
//     color: #94a6be;
//   }
// `;
// const CalendarNav = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 14px;
//   padding: 0 7px;
// `;
// const NavActions = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const NavAction = styled.div`
//   width: 18px;
//   height: 25px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   svg {
//     fill: #94a6be;
//   }
// `;
