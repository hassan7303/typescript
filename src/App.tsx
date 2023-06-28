import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./component/Reminder";
import Reminder from "./models/interface";
import ReminderServises from "./servises/Reminder";
function App() {
  const [reminder, setReminder] = useState<Reminder[]>([]);

  useEffect(() => {
    lodreminders();
  }, []);
  const lodreminders = async () => {
    const reminders = await ReminderServises.getReminder();
    setReminder(reminders);
  };
  const removeReminder = (id: number) => {
    setReminder(reminder.filter((reminder) => reminder.id !== id));
    console.log(id);
  };

  return (
    <>
      <div className="app">
        <ReminderList item={reminder} removeReminder={removeReminder} />
      </div>
    </>
  );
}

export default App;
