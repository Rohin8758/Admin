import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import General from "./components/form/General";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Advanced from "./components/form/Advanced";
import Editors from "./components/form/Editors";
import Validation from "./components/form/Validation";
import Simple from "./components/table/Simple";
import DataTables from "./components/table/DataTables";
import Grid from "./components/table/Grid";
import Login from "./components/Login";
import Addproduct from "./components/product management/Addproduct";
import Viewproduct from "./components/product management/Viewproduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="dashboard" element={<Navbar />} />
            <Route path="general" element={<General />} />
            <Route path="advanced" element={<Advanced />} />
            <Route path="editors" element={<Editors />} />
            <Route path="validation" element={<Validation />} />
            <Route path="simple" element={<Simple />} />
            <Route path="dataTables" element={<DataTables />} />
            <Route path="jsGrid" element={<Grid />} />
            <Route path="addproduct" element={<Addproduct />} />
            <Route path="viewproduct" element={<Viewproduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
