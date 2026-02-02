import { useState, useEffect } from "react";
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
  DayName,
  CalendarGrid,
  DayColumn,
  DayCells,
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

const dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const Calendar = ({ date, onChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    date ? new Date(date) : null,
  );

  useEffect(() => {
    setSelectedDate(date ? new Date(date) : null);
  }, [date]);

  const handleDateChange = (day, dayIndex) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDate = new Date(year, month, 1);
    const firstDayOfWeek =
      firstDate.getDay() === 0 ? 6 : firstDate.getDay() - 1;

    const offset = day - 1;
    const targetDay = new Date(year, month, 1 + offset);

    if (targetDay.getMonth() !== month) return;

    setSelectedDate(targetDay);
    if (onChange) {
      onChange(targetDay);
    }
  };

  const handleMonthChange = (delta) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + delta);
      return newDate;
    });
  };

  const generateGrid = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;

    const weeks = [[], [], [], [], [], []];
    let weekIndex = 0;

    for (let i = 0; i < startOffset; i++) {
      weeks[0].push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = (startOffset + day - 1) % 7;
      if (dayOfWeek === 0 && day > 1) weekIndex++;
      weeks[weekIndex].push(day);
    }

    return weeks;
  };

  const weeks = generateGrid();

  const formatSelectedDate = (date) => {
    if (!date) return "Дата не выбрана";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
  };

  return (
    <CalendarContainer>
      <CalendarStyled>
        <CalendarTitle>Даты</CalendarTitle>
        <CalendarBlock>
          <CalendarNav>
            <CalendarMonth>{`${
              monthNames[currentDate.getMonth()]
            } ${currentDate.getFullYear()}`}</CalendarMonth>
            <NavActions>
              <NavAction onClick={() => handleMonthChange(-1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                </svg>
              </NavAction>
              <NavAction onClick={() => handleMonthChange(1)}>
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
            <CalendarGrid>
              {dayNames.map((day, dayIndex) => (
                <DayColumn key={dayIndex}>
                  <DayName>{day}</DayName>
                  <DayCells>
                    {weeks.map((week, weekIndex) => {
                      const dayValue = week[dayIndex];
                      const fullDate = dayValue
                        ? new Date(
                            currentDate.getFullYear(),
                            currentDate.getMonth(),
                            dayValue,
                          )
                        : null;

                      const isWeekend = dayIndex === 5 || dayIndex === 6;

                      const isSelected =
                        selectedDate &&
                        fullDate &&
                        selectedDate.getDate() === fullDate.getDate() &&
                        selectedDate.getMonth() === fullDate.getMonth();

                      return (
                        <CalendarCell
                          key={`${weekIndex}-${dayValue}`}
                          onClick={() =>
                            dayValue && handleDateChange(dayValue, dayIndex)
                          }
                          className={[
                            dayValue ? "cell-day" : "other-month",
                            isWeekend ? "weekend" : "",
                            isSelected ? "active-day" : "",
                          ]
                            .join(" ")
                            .trim()}
                          title={fullDate ? fullDate.toDateString() : ""}
                        >
                          {dayValue || ""}
                        </CalendarCell>
                      );
                    })}
                  </DayCells>
                </DayColumn>
              ))}
            </CalendarGrid>
          </CalendarContent>
          <p>
            Срок исполнения: <span>{formatSelectedDate(selectedDate)}</span>
          </p>
        </CalendarBlock>
      </CalendarStyled>
    </CalendarContainer>
  );
};

export default Calendar;
