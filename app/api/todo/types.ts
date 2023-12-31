import { z } from 'zod';

export const TodoSchema = z.object({
    id: z.string(),
    title: z.string().min(1),
    description: z.string().min(1),
    createdAt: z.coerce.date()
})

export type Todo = z.infer<typeof TodoSchema>;