import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarComponent() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <h1 className='font-bold'>Calendar- For Reminder</h1>
            <Calendar
                className={'shadow-2xl bg-green-50'}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}