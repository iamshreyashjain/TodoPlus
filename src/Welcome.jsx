import { useContext, useState } from "react";
import { todoList } from "./store/todolist_Context";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import Data from "./Data";

export default function Welcome() {
  const { addTodoItem } = useContext(todoList);

  const [id, setid] = useState(1)
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date) { // Check if inputs are not empty
      addTodoItem(id, name, date);
      setid(id +1)
      setName("");
      setDate("");
    }
    console.log(name, date)
  };

  return (
    <div className="">
      <div className="flex justify-between justify-center items-center bg-slate-500 py-2 text-slate-300 px-2 ">
        <div className="text-xl">
          Hello
        </div>
        <div className="rounded-full px-1 py-1 bg-slate-300 text-slate-500">
        <Link to= "/">
        <IoMdLogOut size = {25}/>
        </Link>
        </div>
      </div>

      <div className="bg-slate-300  min-w-screen min-h-full py-16 px-32 ">
          <form className="flex flex-col gap-4 bg-slate-500 rounded-lg py-12 px-4 shadow-lg" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border py-2 px-2 rounded-lg outline-none"
              placeholder="Todo Name"
            />
            <input
              type="date"
              value={date}
              className="border py-2 px-2 rounded-lg outline-none"
              onChange={(e) => setDate(e.target.value)}
            />
            <button type="submit" 
            className="border py-2 px-2 rounded-lg outline-none"
            >
            Submit</button>
          </form>
        </div>
        <Data/>
    </div>
  );
}
