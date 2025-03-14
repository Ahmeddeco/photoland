import { z } from "zod"


export const ManufactureSchema = z.object({
  title: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  address: z.string().nullish(),
  phone: z.string(),
  website: z.string().url({ message: "Invalid url" }).nullish(),

})
