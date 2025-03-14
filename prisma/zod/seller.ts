import * as z from "zod"
import { CompleteProduct, RelatedProductSchema } from "./index"

export const SellerSchema = z.object({
  id: z.string(),
  title: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  email: z.string().email().nullish(),
  mobile: z.string(),
  address: z.string().nullish(),
})

export interface CompleteSeller extends z.infer<typeof SellerSchema> {
  Product: CompleteProduct[]
}

/**
 * RelatedSellerSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSellerSchema: z.ZodSchema<CompleteSeller> = z.lazy(() => SellerSchema.extend({
  Product: RelatedProductSchema.array(),
}))
