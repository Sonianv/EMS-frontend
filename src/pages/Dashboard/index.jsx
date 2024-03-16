import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";

function Dashboard() {
  return (
    <div style={{ width: "100vh" }}>
      <Fullcalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          bootstrap5Plugin,
        ]}
        initialView={"dayGridMonth"}
        themeSystem="bootstrap5"
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
      />
    </div>
  );
}

export default Dashboard;
