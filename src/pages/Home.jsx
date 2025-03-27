export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 p-4 bg-gray-200 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-400 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="user-icon"
              />
            </div>
            <span>Hello Behruzbek</span>
          </div>
          <nav className="mt-4">
            <button className="btn w-full bg-gray-800 text-white py-2 rounded">
              Dashboard
            </button>
            <button className="btn w-full mt-2 py-2 rounded bg-gray-300">
              Create
            </button>
            <button className="btn w-full mt-2 py-2 rounded bg-gray-300">
              Settings
            </button>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <span>Dark Mode</span>
          <div className="w-10 h-5 bg-gray-400 rounded-full relative">
            <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="flex space-x-4 mt-4">
          <button className="btn hover:text-white hover:bg-gray-800 py-2 px-4 bg-gray-300 rounded">
            All
          </button>
          <button className="btn hover:text-white hover:bg-gray-800 py-2 px-4 bg-gray-300 rounded">
            Mine
          </button>
          <button className="btn hover:text-white hover:bg-gray-800 py-2 px-4 bg-gray-300 rounded">
            Frontend
          </button>
          <button className="btn hover:text-white hover:bg-gray-800 py-2 px-4 bg-gray-300 rounded">
            Backend
          </button>
          <button className="btn hover:text-white hover:bg-gray-800 py-2 px-4 bg-gray-300 rounded">
            Design
          </button>
          <button className="btn hover:text-white hover:bg-gray-800 py-2 px-4 bg-gray-300 rounded">
            Marketing
          </button>
          <button className="btn hover:text-white hover:bg-gray-800 py-2 px-4 bg-gray-300 rounded">
            Others
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Frontend</h3>
            <p className="text-sm text-gray-500">Due by: Wed Nov 05 2008</p>
            <div className="mt-2 flex -space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="user-icon"
                />
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Final Exam</h3>
            <p className="text-sm text-gray-500">Due by: Tue Mar 11 2025</p>
            <div className="mt-2 flex -space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="user-icon"
                />
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="user-icon"
                />
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="user-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Users List */}
      <aside className="w-64 p-4 bg-gray-200 overflow-y-auto">
        <h3 className="font-semibold">Users:</h3>
        <ul className="mt-2">
          <li className="flex items-center p-2 bg-white rounded-lg mb-2 shadow">
            <div className="w-6 h-6 bg-gray-300 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="user-icon"
              />
            </div>
            <span className="ml-2">Behruzbek (you)</span>
          </li>
          <li className="flex items-center p-2 bg-white rounded-lg mb-2 shadow">
            <div className="w-6 h-6 bg-gray-300 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="user-icon"
              />
            </div>
            <span className="ml-2">Мохирбек Хусанов</span>
          </li>
        </ul>
      </aside>
    </div>
  );
}
