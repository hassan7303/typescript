import React, { useState } from "react";
interface newReminderProps {
  onAddReminder: (title: string) => void;
}
function NewReminder({ onAddReminder }: newReminderProps): JSX.Element {
  const [title, setTitle] = useState("");
  const submitForm = (e: React.FormEvent) => {
    if (!title) return;
    e.preventDefault();
    onAddReminder(title);
    setTitle("");
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">title: </label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary my-3 rounded-pill">
        addReminder
      </button>
    </form>
  );
}
export default NewReminder;
