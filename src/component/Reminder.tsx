import Reminder from "../models/interface";
interface ReminderListProps {
  item: Reminder[];
}
function ReminderList({ item }: ReminderListProps) {
  return (
    <ul>
      {item.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
export default ReminderList;
