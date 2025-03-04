import * as z from "zod"
import { CompleteProduct, RelatedProductModel } from "./index"

export const ManufactureModel = z.object({
  id: z.number().int(),
  name: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  address: z.string().nullish(),
  phone: z.number().int(),
  website: z.string().url({ message: "Invalid url" }).nullish(),
})

export interface CompleteManufacture extends z.infer<typeof ManufactureModel> {
  Product: CompleteProduct[]
}

/**
 * RelatedManufactureModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedManufactureModel: z.ZodSchema<CompleteManufacture> = z.lazy(() => ManufactureModel.extend({
  Product: RelatedProductModel.array(),
}))
