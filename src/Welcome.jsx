import { useContext, useState } from "react";
import { todoList } from "./store/todolist_Context";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Welcome() {
  const { addTodoItem, deleteTodoItem, todoItems, updateTodoItem } = useContext(todoList);

  const [formData, setFormData] = useState({
    id: 1,
    name: "",
    date: "",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, [name]: value,
    })
  );
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.date) {
      if (editMode) {
        updateTodoItem(formData.id, formData.name, formData.date);
      } else {
        const newId = formData.id +1;
        addTodoItem(newId, formData.name, formData.date);
      }
      resetForm(); 
    }
  };

  const resetForm = () => {
    setFormData({
      id: null,
      name: "",
      date: "",
    });
    setEditMode(false); // Exit edit mode
  };



  {/*<---EDIT: onClick ---> it will run agar ID mile to us hisab se form data show kraega*/}
  const editTodoItems = (id) => {
    const itemToEdit = todoItems.find((item) => item.id === id);
    if (itemToEdit) {
      setFormData({
        id: itemToEdit.id, 
        name: itemToEdit.name,
        date: itemToEdit.date,
      });
      setEditMode(true); 
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-slate-500 py-2 text-slate-300 px-2 ">
        <div className="text-xl">Hello</div>
        <div className="rounded-full px-1 py-1 bg-slate-300 text-slate-500">
          <Link to="/">
            <IoMdLogOut size={25} />
          </Link>
        </div>
      </div>

      <div className="bg-slate-300 min-w-screen min-h-screen py-16 px-32 ">
        <form className="flex flex-col gap-4 bg-slate-500 rounded-lg py-12 px-4 shadow-lg" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={formData.name}
            className="border py-2 px-2 rounded-lg outline-none"
            placeholder="Todo Name"
            name="name"
          />
          <input
            type="date"
            value={formData.date}
            className="border py-2 px-2 rounded-lg outline-none"
            onChange={handleChange}
            name="date"
          />
          <button type="submit" className="border py-2 px-2 rounded-lg outline-none">
            {editMode ? "Update" : "Submit"}
          </button>
        </form>

        <div className="bg-slate-300 py-16">
          <div className="flex flex-col gap-4 bg-slate-500 rounded-lg py-4 px-4">
            {todoItems.length < 1 ? (
              <div className="text-center text-xl text-slate-300 py-2">
                No Item Found
              </div>
            ) : (
              todoItems.map((item) => (
                <div
                  className="flex flex-row bg-slate-300 py-4 rounded-lg px-2 text-center justify-center items-center"
                  key={item.id}
                >
                  <div className="w-full">{item.name}</div>
                  <div className="w-full">{item.date}</div>
                  <div className="w-full flex gap-2">
                  {editMode ? (
                    <>
                    <button
                      className="border border-slate-500 py-2 px-2 rounded-lg outline-none w-full">
                    Delete
                    </button>
                    </>
                  )
                    :
                    (
                    <>
                    <button
                      className="border border-slate-500 py-2 px-2 rounded-lg outline-none w-full"
                      onClick={() => deleteTodoItem(item.id)}>
                      Delete
                    </button>
                    </>
                    )
                  
                  }

                    <button
                      className="border border-slate-500 py-2 px-2 rounded-lg outline-none w-full"
                      onClick={() => editTodoItems(item.id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
