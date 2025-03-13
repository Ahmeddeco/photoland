import { z } from "zod"


export const SellerSchema = z.object({
  id: z.string(),
  name: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  email: z.string().email().nullish(),
  mobile: z.number().int(),
  address: z.string().nullish(),
})
