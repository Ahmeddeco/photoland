import * as z from "zod"
import { CompleteProduct, RelatedProductModel } from "./index"

export const ManufactureModel = z.object({
  id: z.string().uuid(),
  name: z.string().min(3, { message: 'must be at least 3' }).max(50, { message: 'must be at most 50' }),
  address: z.string().nullish(),
  phone: z.number().int(),
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
