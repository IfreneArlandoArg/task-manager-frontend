import { useState } from "react";
import api from "../api/client";
import { useNavigate, Link } from "react-router-dom";
import InfoPanel from "../components/InfoPanel";
import { AxiosError } from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await api.post<{ token: string; message?: string }>("/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err: unknown) {
      const msg = (err as AxiosError<{ message?: string }>)?.response?.data?.message || (err as Error)?.message || "Login failed";
      setError(msg);
      setLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center">
            <div className="w-full flex flex-col md:flex-row items-start gap-8 p-6">
              <div className="w-full md:w-96">
                <form onSubmit={handleSubmit}
                  className="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg"
                >
                  <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">Login</h2>

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

                  {error && (
                    <div role="alert" className="mb-4 text-sm text-red-400 bg-red-900/20 p-3 rounded">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-400 transition duration-200 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Signing in...' : 'Login'}
                  </button>

                  <p className="text-sm mt-4 text-center text-gray-400">
                    No account?{" "}
                    <Link to="/register" className="text-teal-300 font-semibold hover:text-teal-200">
                      Register
                    </Link>
                  </p>
                </form>
              </div>
                <InfoPanel />
               
            </div>
          </div>
          
          
        );
    }
