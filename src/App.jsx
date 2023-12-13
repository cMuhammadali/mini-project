import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  checkTodo,
  deleteTodo,
  editTodo,
} from "./store/todoSlice/TodoSlice";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getApi } from "./store/apis/Get-api";
import FormikFunc from "./pages/Formik.jsx";
import Form from './components/Form.jsx';
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(null);
  const [newName, setNewName] = useState("");
  const state = useSelector((state) => state.todos);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApi());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    let objValue = {
      id: Math.random(),
      name: name,
      age: age,
      checked: false,
    };

    dispatch(addTodo(objValue));
  }

  function todoId(id) {
    setId(id);
  }

  function saveTodo(id, name) {
    dispatch(editTodo({ id, name }));
    setId(null);
  }

  return (
    <div>
      <Routes>
        <Route
          path="/form"
          element={
            <Form
              name={name}
              setName={setName}
              age={age}
              setAge={setAge}
              data={data}
              state={state}
              setNewName={setNewName}
              dispatch={dispatch}
              checkTodo={checkTodo}
              saveTodo={saveTodo}
              todoId={todoId}
              deleteTodo={deleteTodo}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/todo" element={<Todo />} />
        <Route path="/formik" element={<FormikFunc />} />
        <Route path="/*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
