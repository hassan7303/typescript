import Reminder from "../models/interface";
interface ReminderListProps {
  item: Reminder[];
  removeReminder: (id: number) => void;
}
function ReminderList({ item, removeReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {item.map((item) => {
        return (
          <>
            <li
              className="list-group-item d-flex justify-content-between"
              key={item.id}
            >
              {item.title}
              <button
                className="btn btn-outline-danger mr-0"
                onClick={() => removeReminder(item.id)}
              >
                delete
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
}
export default ReminderList;
