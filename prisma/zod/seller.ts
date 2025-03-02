import * as z from "zod"
import { CompleteProduct, RelatedProductModel } from "./index"

export const SellerModel = z.object({
  id: z.string(),
  name: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  email: z.string().email().nullish(),
  mobile: z.number().int(),
  address: z.string().nullish(),
})

export interface CompleteSeller extends z.infer<typeof SellerModel> {
  Product: CompleteProduct[]
}

/**
 * RelatedSellerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSellerModel: z.ZodSchema<CompleteSeller> = z.lazy(() => SellerModel.extend({
  Product: RelatedProductModel.array(),
}))
