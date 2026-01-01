import { useState } from "react";
import api from "../api/client";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/register", { email, password });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">Register</h2>

        <input
          className="w-full mb-4 p-3 bg-gray-700 text-gray-100 border border-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-6 p-3 bg-gray-700 text-gray-100 border border-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-400 transition duration-200">
          Register
        </button>

        <p className="text-sm mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-300 font-semibold hover:text-teal-200">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
