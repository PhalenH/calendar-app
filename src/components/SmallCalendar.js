import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";

export default function SmallCalendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  // local state
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  function handlePreviousMonth() {
    setCurrentMonthIndex(currentMonthIndex - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIndex(currentMonthIndex + 1);
  }
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <button onClick={handlePreviousMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_left
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_right
          </span>
        </button>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
          {currentMonth[0].map((day, index) => (
              <span key={index} className="text-sm py-1 text-center">
                  {day.format("dd").charAt(0)}
              </span>
          ))}
      </div>
    </div>
  );
}
