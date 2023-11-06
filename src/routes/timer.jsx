import Countdown from 'react-countdown';
import { useContext, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimeContext } from '../App';

import dayjs from 'dayjs';

export default function Timer() {
    const {time, setTime} = useContext(TimeContext)

  return (
    <div id="countdown">
      <h1>SetTime</h1>
      <DatePicker value={time} onChange={(newValue) => setTime(newValue)} defaultValue={dayjs('2023-11-17')}/>
      <Countdown date={time + 10000} />
    </div>
  );
}