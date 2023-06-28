import axios from "axios";
import Reminder from "../models/interface";
class ReminderServices {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos/1",
  });
  async getReminder() {
    const res = await this.http.get<Reminder[]>("/todos");
    return res.data;
  }
  async addReminder(title: string) {
    const res = this.http.post<Reminder>("/todos", { title });
    return (await res).data;
  }
  async removeReminder(id: number) {
    const res = await this.http.delete<Reminder>("/todos" + id);
  }
}
export default new ReminderServices();
