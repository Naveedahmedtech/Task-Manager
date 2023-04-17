import {
  selectState,
  todoRemoved,
  todoIsCompleted,
  todoUpdated
} from "../../features/TodoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import "./manageTasks.css";
const ManageTasks = () => {
  const [editableTodoId, setEditableTodoId] = useState(null);
  const editInputRef = useRef(null);
  const todos = useSelector(selectState);
  const dispatch = useDispatch();
  let num = 0;
  // toggle functionality on completion
  const isCompleted = (id, completed) => {
    dispatch(todoIsCompleted({ id, completed: !completed }));
  };
  // edit functionality 
  const startEditing = (id) => {
    setEditableTodoId(id);
  };

  const cancelEditing = () => {
    setEditableTodoId(null);
  };

  const saveEditing = (id, newTitle) => {
    dispatch(todoUpdated({ id, title: newTitle }));
    setEditableTodoId(null);
  };

  useEffect(() => {
    if (editableTodoId !== null) {
      editInputRef.current.focus();
    }
  }, [editableTodoId]);

  return (
    <main className="manage-task">
      <div>
        <h1>Manage Your Tasks</h1>
      </div>
      <div className="table-manage">
        <table className="flex-child ">
          <thead>
            <tr>
              <th>No</th>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <>
                <tr key={todo.id}>
                  <td>{++num}</td>
                <td
                  className={todo.completed ? "completed" : ""}
                  onDoubleClick={() => startEditing(todo.id)}
                >
                  {editableTodoId === todo.id ? (
                    <input
                        type="text"
                        className="editable"
                        defaultValue={todo.title}
                        ref={editInputRef}
                        onBlur={cancelEditing}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          saveEditing(todo.id, event.target.value);
                        } else if (event.key === "Escape") {
                          cancelEditing();
                        }
                      }}
                    />
                  ) : (
                    todo.title
                  )}
                </td>
                  
                  <td>
                    <i className="fa-solid fa-pen-to-square ranking-icons btn-edit"
                      onClick={() => startEditing(todo.id)}
                    ></i>
                    <i
                      className="fa-solid fa-circle-check ranking-icons btn-completed"
                      onClick={() => isCompleted(todo.id, todo.completed)}
                    ></i>

                    <i
                      className="fa-sharp fa-solid fa-trash ranking-icons btn-remove"
                      onClick={() => dispatch(todoRemoved(todo.id))}
                    ></i>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ManageTasks;
