import * as z from "zod"
import { CompleteProduct, RelatedProductSchema } from "./index"

export const ManufactureSchema = z.object({
  id: z.string(),
  title: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  address: z.string().nullish(),
  phone: z.string(),
  website: z.string().url({ message: "Invalid url" }).nullish(),
})

export interface CompleteManufacture extends z.infer<typeof ManufactureSchema> {
  Product: CompleteProduct[]
}

/**
 * RelatedManufactureSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedManufactureSchema: z.ZodSchema<CompleteManufacture> = z.lazy(() => ManufactureSchema.extend({
  Product: RelatedProductSchema.array(),
}))
