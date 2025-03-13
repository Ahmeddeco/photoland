import * as z from "zod"
import { CompleteManufacture, RelatedManufactureSchema, CompleteCategory, RelatedCategorySchema, CompleteSeller, RelatedSellerSchema } from "./index"

export const ProductSchema = z.object({
  id: z.string().nullish(),
  title: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  description: z.string().min(20, { message: "Must be 20 or more characters long" }).max(150, { message: "Must be 150 or fewer characters long" }),
  model: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  imageUrl: z.string().array(),
  price: z.number().int(),
  discount: z.number().int().max(99, { message: "Must be at most 99" }).nullish(),
  isNew: z.boolean(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  manufactureId: z.number().int(),
  categoryId: z.number().int(),
  sellerId: z.number().int(),
})

export interface CompleteProduct extends z.infer<typeof ProductSchema> {
  manufacture: CompleteManufacture
  category: CompleteCategory
  seller: CompleteSeller
}

/**
 * RelatedProductSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductSchema: z.ZodSchema<CompleteProduct> = z.lazy(() => ProductSchema.extend({
  manufacture: RelatedManufactureSchema,
  category: RelatedCategorySchema,
  seller: RelatedSellerSchema,
}))
