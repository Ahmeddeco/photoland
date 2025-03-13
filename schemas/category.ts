import { z } from "zod"
enum CategoryName {
  compact,
  dslr,
  film,
  mirrorless,
  professional,
}

export const CategorySchema = z.object({
  id: z.string(),
  title: z.nativeEnum(CategoryName),
})
