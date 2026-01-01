

export default function InfoPanel() {
  return (
    <aside className="hidden md:flex items-start flex-1 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-10 min-h-[60vh]">
      <div className="w-full pl-8">
        <h3 className="text-4xl font-extrabold text-gray-100 mb-4">Task Manager App</h3>
        <p className="text-gray-300 mb-6">
          Organize your tasks, stay focused, and get things done. Create tasks quickly and track their
          status.
        </p>

        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="inline-flex h-3 w-3 rounded-full bg-teal-400 mt-2" aria-hidden></span>
            <span className="font-medium">Add and manage tasks</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-flex h-3 w-3 rounded-full bg-teal-400 mt-2" aria-hidden></span>
            <span className="font-medium">Track task status</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-flex h-3 w-3 rounded-full bg-teal-400 mt-2" aria-hidden></span>
            <span className="font-medium">Simple, fast, and secure</span>
          </li>
        </ul>

        <p className="mt-6 text-sm text-gray-400">
          Inspired by clean-app layouts — quick access on the left, helpful context on the right.
        </p>
      </div>
    </aside>
  );
}
