import { useState } from "react";
import "./App.css";
import ReminderList from "./component/Reminder";
import Reminder from "./models/interface";
// const remainders: Reminder[] = [{ id: 1, title: "Reminder" }];
function App() {
  const [reminder, setReminder] = useState<Reminder[]>([
    { id: 1, title: "reminder" },
    { id: 2, title: "reminder" },
  ]);
  return (
    <>
      <div className="app">
        <ReminderList item={reminder} />
      </div>
    </>
  );
}

export default App;
