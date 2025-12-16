import { useState } from "react";
import {
  CalendarStyled,
  CalendarContainer,
  CalendarTitle,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  NavActions,
  NavAction,
  CalendarContent,
  CalendarDaysNames,
  DayName,
  CalendarCells,
  CalendarCell,
} from "./Calendar.styled";

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleDayClick = (day) => {
    const date = new Date(year, month, day);
    setSelectedDate(date);
  };

  const generateCalendarCells = (month, year) => {
    const cells = [];
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const offset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    for (let i = 0; i < offset; i++) {
      cells.push(
        <CalendarCell className="other-month" key={`prev-${i}`}></CalendarCell>
      );
    }

    for (let day = 1; day <= totalDaysInMonth; day++) {
      const isWeekend =
        new Date(year, month, day).getDay() === 0 ||
        new Date(year, month, day).getDay() === 6;
      cells.push(
        <CalendarCell
          className={`cell-day ${isWeekend ? "weekend" : ""}`}
          key={day}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </CalendarCell>
      );
    }

    const totalDays = cells.length;
    const totalSlots = Math.ceil(totalDays / 7) * 7;
    for (let i = totalDays; i < totalSlots; i++) {
      cells.push(
        <CalendarCell className="other-month" key={`next-${i}`}></CalendarCell>
      );
    }

    return cells;
  };

  return (
    <CalendarContainer>
      <CalendarStyled>
        <CalendarTitle>Даты</CalendarTitle>
        <CalendarBlock>
          <CalendarNav>
            <CalendarMonth>{`${monthNames[month]} ${year}`}</CalendarMonth>
            <NavActions>
              <NavAction onClick={handlePrevMonth}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                </svg>
              </NavAction>
              <NavAction onClick={handleNextMonth}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                </svg>
              </NavAction>
            </NavActions>
          </CalendarNav>
          <CalendarContent>
            <CalendarDaysNames>
              <DayName>пн</DayName>
              <DayName>вт</DayName>
              <DayName>ср</DayName>
              <DayName>чт</DayName>
              <DayName>пт</DayName>
              <DayName>сб</DayName>
              <DayName className="-weekend-">вс</DayName>
            </CalendarDaysNames>
            <CalendarCells>{generateCalendarCells(month, year)}</CalendarCells>
          </CalendarContent>
          <input
            type="hidden"
            id="datepick_value"
            value={selectedDate ? selectedDate.toLocaleDateString("ru-RU") : ""}
          />
          <p>
            Срок исполнения:{" "}
            <span>
              {selectedDate
                ? selectedDate.toLocaleDateString("ru-RU")
                : "Дата не выбрана"}
            </span>
          </p>
        </CalendarBlock>
      </CalendarStyled>
    </CalendarContainer>
  );
};

export default Calendar;
