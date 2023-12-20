"use server"

import { z, ZodError } from "zod";
import { postTodo } from "../api/todo/postTodo";
import { TodoSchema } from "../api/todo/types";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type State = {
    errors?: {
        title?: string[],
        description?: string[]
    },
    message: string
}

export const createTodo = async (prevState: State, formData: FormData) => {

    const CreateTodoSchema = TodoSchema.omit({
        id: true,
        createdAt: true
    })

    const newTodo = {
        title: formData.get("title").toString(),
        description: formData.get("description").toString()
    }

    const validationResult = CreateTodoSchema.safeParse(newTodo);

    if (!validationResult.success) {
        //Fel i validering
        const errors = validationResult["error"] as ZodError;

        return {
            errors: errors.flatten().fieldErrors,
            message: "Missing fields in form"
        }
        
    } else {
        //Rätt validering
        await postTodo(newTodo);
        revalidatePath("/todo");
        redirect("/todo");
    }

}


