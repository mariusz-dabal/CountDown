import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { createContext, useState } from 'react';

export const TimeContext = createContext("");

function App({ children }) {
  const [time, setTime] = useState()
  return (
    <TimeContext.Provider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
    </TimeContext.Provider>

  );
}

export default App;
