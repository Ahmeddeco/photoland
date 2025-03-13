import { z } from "zod"


export const ManufactureSchema = z.object({
  id: z.string(),
  name: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  address: z.string().nullish(),
  phone: z.number().int(),
  website: z.string().url({ message: "Invalid url" }).nullish(),
})
