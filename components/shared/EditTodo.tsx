"use client";

import React from "react";
import { edit } from "@/app/api/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { todoType } from "@/types/todoType";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const EditTodo = ({ todo }: todoType) => {
  const [editTodo, setEditTodo] = useState(false);
  const handleEdit = () => {
    setEditTodo(!editTodo);
  };
  const handleSubmit = () => {
    setEditTodo(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button
        onClick={handleEdit}
        actionButton
        text={<BiSolidMessageSquareEdit size={23} color="#000080" />}
      />
      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button type="submit" text="Save" />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
