"use client";

import React from "react";
import { deleteTodo } from "@/app/api/todoActions";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { todoType } from "@/types/todoType";
import { MdDelete } from "react-icons/md";

const DeleteTodo = ({ todo }: todoType) => {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button
        actionButton
        text={
          todo.isCompleted ? (
            <MdDelete size={25} color="#FF0404" />
          ) : (
            <MdDelete size={25} color="#F2B0B0" />
          )
        }
        type="submit"
      />
    </Form>
  );
};

export default DeleteTodo;
