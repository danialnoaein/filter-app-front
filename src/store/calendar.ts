// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";
import {
  AddEventType,
  CalendarFiltersType,
  EventType,
} from "../types/calendarTypes";

// ** Types

const date = new Date();
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
const nextMonth =
  date.getMonth() === 11
    ? new Date(date.getFullYear() + 1, 0, 1)
    : new Date(date.getFullYear(), date.getMonth() + 1, 1);

const prevMonth =
  date.getMonth() === 11
    ? new Date(date.getFullYear() - 1, 0, 1)
    : new Date(date.getFullYear(), date.getMonth() - 1, 1);

const data: { events: EventType[] } = {
  events: [
    {
      id: 6,
      url: "",
      title: "دکتر کیوان ی",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -12, 9, 0, 0),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12, 10, 15, 0),
      allDay: false,
      extendedProps: {
        sessionStatus: "Active",
      },
    },
    {
      id: 5,
      url: "",
      title: "دکتر کیوان dddی",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -12, 10, 0, 0),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12, 11, 0, 0),
      allDay: false,
      extendedProps: {
        sessionStatus: "Active",
      },
    },
    {
      id: 7,
      url: "",
      title: "دکتر کیوان یه ساعتی ساعتی ساعتی",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -12, 12, 0, 0),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12, 13, 0, 0),
      allDay: false,
      extendedProps: {
        sessionStatus: "Active",
      },
    },
    {
      id: 8,
      url: "",
      title: "دکتر آرمان نیم ساعتی",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -12, 14, 0, 0),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12, 14, 30, 0),
      allDay: false,
      extendedProps: {
        sessionStatus: "Reserved",
      },
    },
    {
      id: 7,
      url: "",
      title: "دکتر کیوان یه ربعی",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -12, 15, 0, 0),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12, 15, 30, 0),
      allDay: false,
      extendedProps: {
        sessionStatus: "Active",
      },
    },
  ],
};

// ** Fetch Events
export const fetchEvents = createAsyncThunk(
  "appCalendar/fetchEvents",
  async (calendars: CalendarFiltersType[]) => {
    // const response = await axios.get("/apps/calendar/events", {
    //   params: {
    //     calendars,
    //   },
    // });

    return [];
  }
);

// ** Add Event
export const addEvent = createAsyncThunk(
  "appCalendar/addEvent",
  async (event: AddEventType, { dispatch }) => {
    const response = await axios.post("/apps/calendar/add-event", {
      data: {
        event,
      },
    });
    await dispatch(fetchEvents(["Active", "Reserved"]));

    return response.data.event;
  }
);

// ** Update Event
export const updateEvent = createAsyncThunk(
  "appCalendar/updateEvent",
  async (event: EventType, { dispatch }) => {
    const response = await axios.post("/apps/calendar/update-event", {
      data: {
        event,
      },
    });
    await dispatch(fetchEvents(["Active", "Reserved"]));

    return response.data.event;
  }
);

// ** Delete Event
export const deleteEvent = createAsyncThunk(
  "appCalendar/deleteEvent",
  async (id: number | string, { dispatch }) => {
    const response = await axios.delete("/apps/calendar/remove-event", {
      params: { id },
    });
    await dispatch(fetchEvents(["Active", "Reserved"]));

    return response.data;
  }
);

export const appCalendarSlice = createSlice({
  name: "appCalendar",
  initialState: {
    events: data.events,
    selectedEvent: null,
    selectedCalendars: ["Active", "Reserved"],
  },
  reducers: {
    handleSelectEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
    handleCalendarsUpdate: (state, action) => {
      const filterIndex = state.selectedCalendars.findIndex(
        (i) => i === action.payload
      );
      if (state.selectedCalendars.includes(action.payload)) {
        state.selectedCalendars.splice(filterIndex, 1);
      } else {
        state.selectedCalendars.push(action.payload);
      }
      if (state.selectedCalendars.length === 0) {
        state.events.length = 0;
      }
    },
    handleAllCalendars: (state, action) => {
      const value = action.payload;
      if (value === true) {
        state.selectedCalendars = ["Active", "Reserved"];
      } else {
        state.selectedCalendars = [];
      }
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchEvents.fulfilled, (state, action) => {
  //     state.events = action.payload;
  //   });
  // },
});
export const { handleSelectEvent, handleCalendarsUpdate, handleAllCalendars } =
  appCalendarSlice.actions;

export default appCalendarSlice.reducer;
