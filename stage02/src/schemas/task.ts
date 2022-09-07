import * as zod from 'zod'

export const taskSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutes: zod
    .number()
    .min(5, 'Mínimo de 5 minutos')
    .max(60, 'Máximo de 60 minutos'),
})

export type taskSchemaType = zod.infer<typeof taskSchema>
