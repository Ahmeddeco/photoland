import * as z from "zod"

export const UserModel = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  emailAddresses: z.string().email(),
  phoneNumbers: z.string().nullish(),
  imageUrl: z.string().nullish(),
  hasImage: z.boolean(),
})
