import './App.css'
import Card from "./components/Card.jsx";

function App() {

  return (

      <>
          <div className="container">
        <Card/>
        <Card borough={"Manhattan"} bgColor={"beige"}/>
          </div>
      </>
  )
}

export default App
