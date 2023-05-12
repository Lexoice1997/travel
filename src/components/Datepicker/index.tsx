"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function CustomDatePicker() {
  const [startDate, setStartDate] = useState<any>(new Date());
  return <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />;
}

export default CustomDatePicker;
