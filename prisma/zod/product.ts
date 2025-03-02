import * as z from "zod"
import { CompleteManufacture, RelatedManufactureModel, CompleteCategory, RelatedCategoryModel, CompleteSeller, RelatedSellerModel } from "./index"

export const ProductModel = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  manufactureId: z.string(),
  model: z.string(),
  categoryId: z.string(),
  sellerId: z.string(),
  imageUrl: z.string().array(),
  price: z.number().int(),
  discount: z.number().int().nullish(),
  isNew: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
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
