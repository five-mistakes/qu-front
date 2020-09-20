import React from 'react';

import Calendar from "./calendar";

import './App2.css';

const App2 = ({  closeCalendar, handleSelectDate, date, showCalendar }) => {
  
  return (
    <div className="App2" role="application">
      {showCalendar && (
        <Calendar date={date} handleSelectDate={handleSelectDate} closeCalendar={closeCalendar} />
      )}
    </div>
  );
}

export default App2;
