import React from "react";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import { todoType } from "@/types/todoType";
import { BiSolidMessageSquareEdit } from "react-icons/bi";


const Todo = ({ todo }: todoType) => {
  const todoStyle = {
    // textDecoder: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      className="w-full flex items-center 
    justify-between bg-white py-3 px-20
    rounded-2xl"
      style={todoStyle}
    >
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold">{todo.title}</span>
      <div className="flex items-center gap-5">
       { !todo.isCompleted ? <EditTodo todo={todo}/>: <BiSolidMessageSquareEdit size={23} color="#979A9A" />}
       <DeleteTodo todo={todo}/>
      </div>
    </div>
  );
};

export default Todo;
