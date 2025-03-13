import * as z from "zod"
import { CategoryName } from "@prisma/client"
import { CompleteProduct, RelatedProductSchema } from "./index"

export const CategorySchema = z.object({
  id: z.number().int(),
  title: z.nativeEnum(CategoryName),
})

export interface CompleteCategory extends z.infer<typeof CategorySchema> {
  Product: CompleteProduct[]
}

/**
 * RelatedCategorySchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCategorySchema: z.ZodSchema<CompleteCategory> = z.lazy(() => CategorySchema.extend({
  Product: RelatedProductSchema.array(),
}))
