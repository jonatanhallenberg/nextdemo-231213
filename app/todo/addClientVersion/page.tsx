"use client"

import { postTodo } from "@/app/api/todo/postTodo"
import { Todo } from "@/app/api/todo/types"
import { queryClient } from "@/app/reactQueryProvider"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useMutation } from 'react-query';


type Inputs = {
    title: string
    description: string
}

const AddTodo = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const [ isCreated, setIsCreated ] = useState<boolean>(false);

    const mutation = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
      })

    const submitForm: SubmitHandler<Inputs> = async (formData) => {
        await mutation.mutate(formData);
        setIsCreated(true);
    }

    return <>
        <h1>Add todo (client version)</h1>
        {isCreated ? <div>Du har skapat en todo</div> : <form onSubmit={handleSubmit(submitForm)}>
            <div>
                { errors.title && <div style={{color: "red"}}>Titel måste finnas med</div>}
                <label htmlFor="title">Titel:</label>
                <input {...register("title", {
                    required: true
                })} type="text" name="title" />
            </div>
            <div>
                { errors.description && <div style={{color: "red"}}>Beskrivning måste finnas med</div>}
                <label htmlFor="description">Beskrivning:</label>
                <input {...register("description", {
                    required: true
                })} type="text" name="description" />
            </div>
            <button type="submit">Add todo</button>
        </form>}</>
}

export default AddTodo;