'use server'

import { redirect } from "next/navigation"
import { parseWithZod } from "@conform-to/zod"
import { loginSchema } from "@/lib/zodSchema"

export async function CreateUser(prevState: unknown, formData: FormData) {

  const submission = parseWithZod(formData, {
    schema: loginSchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }
  console.log(submission)


  return redirect('/')
}





// const schemaManuf = z.string()

// export const manufactureForm = async (formData: FormData) => {
//   try {
//     const manufact = formData.get('manufacture')
//     console.log(manufact, typeof (manufact))
//     const validatedManufact = schemaManuf.safeParse(manufact)
//     console.log('validatedManufact is', validatedManufact)

//   } catch (error) {
//     console.error(error)
//     throw new Error

//   }


// }