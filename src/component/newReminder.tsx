function NewReminder(): JSX.Element {
  return (
    <form>
      <label htmlFor="title">title: </label>
      <input id="title" type="text" className="form-control" />
      <button type="submit" className="btn btn-primary rounded-pill">
        add
      </button>
    </form>
  );
}
export default NewReminder;
