import React, { useState } from "react";
import Notification from "./Notification";
import { Tabs, Notifications, Wrapper, Separater } from "./styles";

function SideMenu(props) {
  const [showAll, setShowAll] = useState(false);

  const notifications = [
    {
      title: "Admin",
      desc: "Your faculty uploaded the syllabus.",
      time: "3 minutes ago",
      image: "#FFD9D9",
    },
    {
      title: "Admin",
      desc: "Your faculty uploaded the syllabus.",
      time: "3 minutes ago",
      image: "#D9FFE1",
    },
    {
      title: "Admin",
      desc: "Your faculty uploaded the syllabus.",
      time: "3 minutes ago",
      image: "#BA99FF",
    },
    {
      title: "Admin",
      desc: "Your faculty uploaded the syllabus.",
      time: "3 minutes ago",
      image: "#F5E764",
    },
    {
      title: "Admin",
      desc: "Your faculty uploaded the syllabus.",
      time: "3 minutes ago",
      image: "#FFD9D9",
    },
  ];
  return (
    <Wrapper>
      <Tabs>
        <p>Notifications</p>
        <p>Events</p>
      </Tabs>
      <Notifications showAll={showAll}>
        {notifications.map((notification, idx) => {
          if (idx === notifications.length - 1) {
            return <Notification key={idx} notification={notification} />;
          }
          return (
            <div key={idx}>
              <Notification notification={notification} />
              <Separater />
            </div>
          );
        })}
        <button onClick={() => setShowAll((p) => !p)}>
          {showAll ? "Close" : "View All"}
        </button>
      </Notifications>
    </Wrapper>
  );
}

export default SideMenu;
