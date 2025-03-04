import * as z from "zod"
import { CategoryName } from "@prisma/client"
import { CompleteProduct, RelatedProductModel } from "./index"

export const CategoryModel = z.object({
  id: z.number().int(),
  title: z.nativeEnum(CategoryName),
})

export interface CompleteCategory extends z.infer<typeof CategoryModel> {
  Product: CompleteProduct[]
}

/**
 * RelatedCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCategoryModel: z.ZodSchema<CompleteCategory> = z.lazy(() => CategoryModel.extend({
  Product: RelatedProductModel.array(),
}))
