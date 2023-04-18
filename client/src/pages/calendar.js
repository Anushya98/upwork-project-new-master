import { useState } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = async (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Event Name");
    const eventCategoryPrompt = prompt("Event Category");
    const eventDatePrompt = prompt("Event Date");
    const eventdescriptionPrompt = prompt("Description");
    const eventstatusPrompt = prompt("Status");
    const eventcreatedByPrompt = prompt("Created By");
    if (
      (eventNamePrompt,
      eventCategoryPrompt,
      eventDatePrompt,
      eventdescriptionPrompt,
      eventstatusPrompt,
      eventcreatedByPrompt)
    ) {
      console.log("enters if ");
      setEvents([
        eventNamePrompt,
        eventCategoryPrompt,
        eventDatePrompt,
        eventdescriptionPrompt,
        eventstatusPrompt,
        eventcreatedByPrompt,
        {
          start,
          end,
          eventName: eventNamePrompt,
          //   //id: uuid(),
        },
      ]);
      console.log(events);
      axios
        .post("http://localhost:5000/events", JSON.stringify(events), {
          withCredentials: true,
        })
        .then(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };
  const EventItem = ({ info }) => {
    const { event } = info;
    return (
      <div>
        <p>{event.eventName}</p>
      </div>
    );
  };
  return (
    <div>
      <h1>Calendar</h1>
      <FullCalendar
        editable
        selectable
        select={handleSelect}
        headerToolbar={{
          start: "today prev next",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        eventContent={(info) => <EventItem info={info} />}
        plugins={[daygridPlugin, interactionPlugin]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        events={events}
      />
    </div>
  );
};

export default Calendar;
