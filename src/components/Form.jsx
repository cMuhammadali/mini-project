export default function Form({
    name,
    setName,
    age,
    setAge,
    data,
    state,
    setNewName,
    dispatch,
    checkTodo,
    saveTodo,
    todoId,
    deleteTodo,
    handleSubmit,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded-md"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="ml-4 p-2 rounded-md"
        />
        <button type="submit" className="ml-4 bg-green-600">
          Send
        </button>
      </form>
      <div>
        <h2>Todo List:</h2>
        {data.data.map((value) => {
          return <h3 key={value.id}>{value.name}</h3>;
        })}
        <ul>
          {state?.list?.length > 0
            ? state?.list.map((todo) => (
                <li key={todo?.id} className="mt-4 p-4 bg-slate-400 rounded-md">
                  {id === todo?.id ? (
                    <input
                      onChange={(e) => setNewName(e.target.value)}
                      type="text"
                      className=" rounded-md p-2"
                      defaultValue={todo?.name}
                    />
                  ) : (
                    <span>{todo?.name}</span>
                  )}
                  <input
                    className="ml-4"
                    type="checkbox"
                    style={{ transform: "scale(1.5)" }}
                    onChange={() => dispatch(checkTodo(todo.id))}
                  />
                  {id === todo?.id ? (
                    <button
                      className="ml-4 bg-gray-700"
                      type="submit"
                      onClick={() => saveTodo(todo?.id, newName)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="ml-4 bg-yellow-600"
                        onClick={() => todoId(todo?.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="ml-4 bg-red-600"
                        onClick={() => dispatch(deleteTodo(todo?.id))}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </>
  );
}
