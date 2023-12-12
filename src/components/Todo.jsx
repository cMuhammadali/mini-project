import {
  fetchTodos,
  deleteTodos,
  toggleStatus,
  addNewTodo,
} from "../store/todoSliceNew/NewTodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";

export default function Todo() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const { status, error } = useSelector((state) => state.todos);
  const addingTodo = useSelector((state) => state.todos.addingTodo);
  const removingTodo = useSelector((state) => state.todos.removingTodo);
  const togglingTodo = useSelector((state) => state.todos.togglingTodo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  function handleAction() {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText("");
    }
  }

  return (
    <div>
      <input
        className="p-2 rounded-md"
        type="text"
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="ml-4" onClick={handleAction}>
        {addingTodo ? <Loader /> : "Click"}
      </button>

      {status === "loading" && (
        <h2 className="mt-4 text-xl text-yellow-400">Loading...</h2>
      )}
      {error && (
        <h2 className="mt-4 text-xl text-red-600">An error occured {error}</h2>
      )}
      {todos?.map((item) => {
        return (
          <ul className="flex justify-between" key={item.id}>
            {togglingTodo[item.id] ? (
              <Loader />
            ) : (
              <input
                type="checkbox"
                className="mr-2 cursor-pointer w-6"
                defaultChecked={item.completed}
                onChange={() => dispatch(toggleStatus(item.id))}
              />
            )}

            {item.completed === true ? (
              <li className="mt-2 font-bold text-green-600">{item.title}</li>
            ) : (
              <li className="mt-2 font-bold">{item.title}</li>
            )}
            <button
              className="ml-2 mt-2"
              onClick={() => dispatch(deleteTodos(item.id))}
            >
              {removingTodo[item.id] ? <Loader /> : "❌"}
            </button>
          </ul>
        );
      })}
    </div>
  );
}
