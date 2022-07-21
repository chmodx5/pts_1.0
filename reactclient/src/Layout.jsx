import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="min-h-screen bg-gray-100 flex  sm:py-12">
        <Outlet />
      </main>
    </>
  );
}

export default App;
