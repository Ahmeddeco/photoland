import * as z from "zod"
import { CompleteManufacture, RelatedManufactureModel, CompleteCategory, RelatedCategoryModel, CompleteSeller, RelatedSellerModel } from "./index"

export const ProductModel = z.object({
  id: z.string().uuid({ message: "Invalid UUID" }),
  title: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  description: z.string().min(20, { message: "Must be 20 or more characters long" }).max(150, { message: "Must be 150 or fewer characters long" }),
  model: z.string().min(3, { message: "Must be 3 or more characters long" }).max(50, { message: "Must be 50 or fewer characters long" }),
  imageUrl: z.string().array(),
  price: z.number(),
  discount: z.number().int().nullish(),
  isNew: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  manufactureId: z.string(),
  categoryId: z.string(),
  sellerId: z.string(),
})

export interface CompleteProduct extends z.infer<typeof ProductModel> {
  manufacture: CompleteManufacture
  category: CompleteCategory
  seller: CompleteSeller
}

/**
 * RelatedProductModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductModel: z.ZodSchema<CompleteProduct> = z.lazy(() => ProductModel.extend({
  manufacture: RelatedManufactureModel,
  category: RelatedCategoryModel,
  seller: RelatedSellerModel,
}))
