import React from "react";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { FaCircleCheck } from "react-icons/fa6";
import { changeStatus } from "@/app/api/todoActions";
import { MdError } from "react-icons/md";
import { todoType } from "@/types/todoType";

const ChangeTodo = ({ todo }: todoType) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button
        actionButton
        type="submit"
        text={
          todo.isCompleted ? (
            <FaCircleCheck size={25} color="green" />
          ) : (
            <MdError size={29} color="#FACD34" />
          )
        }
      />
    </Form>
  );
};

export default ChangeTodo;
