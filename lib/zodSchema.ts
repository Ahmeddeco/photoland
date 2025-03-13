import { z } from 'zod'

export const loginSchema = z.object({
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(20)
})

export const addProductSchema = z.object({
  title: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  description: z.string().min(20, { message: "Must be 20 or more characters long" }).max(150, { message: "Must be 150 or fewer characters long" }),
  model: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  imageUrl: z.string().array(),
  price: z.number().int(),
  discount: z.number().int().max(99, { message: "Must be at most 99" }).nullish(),
  isNew: z.boolean().nullish(),
  manufactureId: z.number().int(),
  categoryId: z.number().int(),
  sellerId: z.number().int(),
})