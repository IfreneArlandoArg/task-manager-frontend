import { useEffect, useState } from "react";
import api from "../api/client";
import { useNavigate } from "react-router-dom";

type Task = {
  id: number;
  title: string;
  status: string;
};

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadTasks = async () => {
      const res = await api.get("/tasks");
      setTasks(res.data);
    };
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await api.post("/tasks", { title });
    setTitle("");
    loadTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-6">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">My Tasks</h2>
          <button
            onClick={logout}
            className="text-sm font-semibold text-red-600 hover:text-red-700 transition"
          >
            Logout
          </button>
        </div>

        <div className="flex mb-6">
          <input
            className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="New task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-6 rounded-r-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map((t) => (
            <li
              key={t.id}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center hover:bg-gray-100 transition"
            >
              <span className="font-medium text-gray-800">{t.title}</span>
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{t.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
