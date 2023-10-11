import { useEffect, useState } from "react";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import {
  addEvent,
  fetchEvents,
  deleteEvent,
  updateEvent,
  handleSelectEvent,
  handleAllCalendars,
  handleCalendarsUpdate,
} from "../../store/calendar";
import { CalendarColors, CalendarFiltersType } from "../../types/calendarTypes";
import CalendarWrapper from "../../components/calendar/FullCaendar";
import SidebarLeft from "../../components/calendar/SidebarLeft";
import { Box } from "@mui/material";
import Calendar from "../../components/calendar/Calendar";

// // ** CalendarColors
const calendarsColor: CalendarColors = {
  Personal: "error",
  Business: "primary",
  Family: "warning",
  Holiday: "success",
  ETC: "info",
};

const NewAppointment = () => {
  const [calendarApi, setCalendarApi] = useState<null | any>(null);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false);
  const [addEventSidebarOpen, setAddEventSidebarOpen] =
    useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector((state: RootState) => state.calendar);

  const leftSidebarWidth = 300;
  const addEventSidebarWidth = 400;
  const direction = "rtl";
  const mdAbove = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  useEffect(() => {
    dispatch(fetchEvents(store.selectedCalendars as CalendarFiltersType[]));
  }, [dispatch, store.selectedCalendars]);

  const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen);

  const handleAddEventSidebarToggle = () =>
    setAddEventSidebarOpen(!addEventSidebarOpen);

  return (
    <CalendarWrapper
      className="app-calendar"
      sx={{
        boxShadow: 0,
        ...{
          border: (theme) => `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      {/* <SidebarLeft
          store={store}
          mdAbove={mdAbove}
          dispatch={dispatch}
          calendarApi={calendarApi}
          calendarsColor={calendarsColor}
          leftSidebarOpen={leftSidebarOpen}
          leftSidebarWidth={leftSidebarWidth}
          handleSelectEvent={handleSelectEvent}
          handleAllCalendars={handleAllCalendars}
          handleCalendarsUpdate={handleCalendarsUpdate}
          handleLeftSidebarToggle={handleLeftSidebarToggle}
          handleAddEventSidebarToggle={handleAddEventSidebarToggle}
        /> */}
      <Box
        sx={{
          p: 6,
          pb: 0,
          flexGrow: 1,
          borderRadius: 1,
          boxShadow: "none",
          backgroundColor: "background.paper",
          ...(mdAbove
            ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
            : {}),
        }}
      >
        <Calendar
          store={store}
          dispatch={dispatch}
          direction={direction}
          updateEvent={updateEvent}
          calendarApi={calendarApi}
          calendarsColor={calendarsColor}
          setCalendarApi={setCalendarApi}
          handleSelectEvent={handleSelectEvent}
          handleLeftSidebarToggle={handleLeftSidebarToggle}
          handleAddEventSidebarToggle={handleAddEventSidebarToggle}
        />
      </Box>
      {/* <AddEventSidebar
        store={store}
        dispatch={dispatch}
        addEvent={addEvent}
        updateEvent={updateEvent}
        deleteEvent={deleteEvent}
        calendarApi={calendarApi}
        drawerWidth={addEventSidebarWidth}
        handleSelectEvent={handleSelectEvent}
        addEventSidebarOpen={addEventSidebarOpen}
        handleAddEventSidebarToggle={handleAddEventSidebarToggle}
      /> */}
    </CalendarWrapper>
  );
};

export default NewAppointment;
