"use server"

import { z } from "zod";

type Todo = {
    title: string
}

const TodoSchema = z.object({
    id: z.string(),
    title: z.string().min(1)
})

export const createTodo = async (formData: FormData) => {

    const CreateTodoSchema = TodoSchema.omit({
        id: true
    })

    const newTodo = {
        title: formData.get("title")
    }

    const validForm = CreateTodoSchema.parse(newTodo);



    console.log(validForm);


}