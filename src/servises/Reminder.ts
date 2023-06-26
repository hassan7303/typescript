import axios from "axios";
import Reminder from "../models/interface";
class ReminderServises {
  http = axios.create({
    baseURL: "https://jsonplaceholder.tyipecode.com",
  });
  async getReminder() {
    const res = await this.http.get<Reminder[]>("/todos");
    return res.data;
  }
}
