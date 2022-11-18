import "./App.css"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"

function App() {
  return (
    <div className="bg-gray-200 h-screen overflow-hidden">
      <Header></Header>

      <div className="flex">
        <div className="flex-1 hidden xl:flex justify-start">
          <Sidebar />
        </div>
        <Feed />
        <div className="flex-1 hidden xl:flex justify-end">
          <Widgets />
        </div>
      </div>
    </div>
  )
}

export default App
