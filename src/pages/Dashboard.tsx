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
    <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">My Tasks</h1>
          <button
            onClick={logout}
            className="text-sm font-semibold text-red-400 hover:text-red-300 transition"
          >
            Logout
          </button>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-1 bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-100 mb-4">Add Task</h2>
            <div className="flex">
              <input
                className="flex-1 p-3 bg-gray-700 text-gray-100 border border-gray-700 rounded-l-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                placeholder="New task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button
                onClick={addTask}
                className="bg-teal-500 text-white px-4 rounded-r-lg font-semibold hover:bg-teal-400 transition duration-200"
              >
                Add
              </button>
            </div>
          </section>

          <section className="md:col-span-2 bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-100">Tasks</h2>
              <p className="text-sm text-gray-400">{tasks.length} total</p>
            </div>

            {tasks.length === 0 ? (
              <div className="py-12 text-center text-gray-400">
                <p className="mb-2">No tasks yet</p>
                <p className="text-sm">Add your first task using the form.</p>
              </div>
            ) : (
              <ul className="space-y-3">
                {tasks.map((t) => (
                  <li
                    key={t.id}
                    className="p-4 bg-gray-800 border border-gray-700 rounded-lg flex justify-between items-center hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-3 w-3 rounded-full bg-green-400" aria-hidden></span>
                      <span className="font-medium text-gray-100">{t.title}</span>
                    </div>
                    <span className="text-xs font-semibold text-teal-100 bg-teal-600 px-3 py-1 rounded-full">{t.status}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
