import "./App.css";
import useFetch from "./utill/useFetch";
import Todo from "./todo.js";
import Home from "./home";
import Nav from "./nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [data, isPending, error] = useFetch("http://localhost:3001/todo");

  return (
    <>
      <BrowserRouter>
        {error && <div>{error}</div>}
        <Nav data={data}></Nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {data?.map((el) => (
            <Route
              key={el.id}
              path={`/todos/${el.id}`}
              element={<Todo value={el} />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
