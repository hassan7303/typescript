import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./component/Reminder";
import Reminder from "./models/interface";
import ReminderServices from "./services/Reminder";
import NewReminder from "./component/newReminder";
function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    lodReminders();
  }, []);
  const lodReminders = async () => {
    const reminders = await ReminderServices.getReminder();
    setReminders(reminders);
  };
  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminders) => reminders.id !== id));
    console.log(id);
  };
  const addReminder = async (title: string) => {
    const newReminder = await ReminderServices.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  return (
    <>
      <div className="app">
        <NewReminder onAddReminder={addReminder} />
        <ReminderList item={reminders} removeReminder={removeReminder} />
      </div>
    </>
  );
}

export default App;
