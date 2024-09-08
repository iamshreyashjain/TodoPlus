import { useContext } from "react";
import { todoList } from "./store/todolist_Context";

export default function Data() {
  const { todoItems, deleteTodoItem } = useContext(todoList);

  
  return (
    <>
      <div className="">
        <div className="bg-slate-300 min-w-screen min-h-screen py-16 px-32">
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
                  <button
                    className="border border-slate-500 py-2 px-2 rounded-lg outline-none w-full"
                    onClick={() => deleteTodoItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
