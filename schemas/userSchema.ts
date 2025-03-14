import { z } from "zod"

export const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  emailAddresses: z.string().email(),
  phoneNumbers: z.string().nullish(),
  imageUrl: z.string().nullish(),
  hasImage: z.boolean(),
})
