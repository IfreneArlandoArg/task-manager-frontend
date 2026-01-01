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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">My Tasks</h2>
          <button
            onClick={logout}
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>

        <div className="flex mb-4">
          <input
            className="flex-1 p-2 border rounded-l"
            placeholder="New task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 rounded-r"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((t) => (
            <li
              key={t.id}
              className="p-2 border rounded flex justify-between"
            >
              <span>{t.title}</span>
              <span className="text-sm text-gray-500">{t.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
