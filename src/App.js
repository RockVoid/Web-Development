import Table from './components/Table';
import { Form } from './components/Form';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Table /> }/>
        <Route path="/register" element={ <Form /> }/>        
      </Routes>
    </div>
  );
}

export default App;
