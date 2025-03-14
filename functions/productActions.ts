'use server'

import { ProductSchema } from "@/schemas/productSchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"

export const addProductAction = async (prevState: unknown, formData: FormData) => {

  const SubmissionResult = parseWithZod(formData, {
    schema: ProductSchema
  })

  if (SubmissionResult.status !== 'success') {
    return SubmissionResult.reply()
  }
  console.log(SubmissionResult)

  const product = Object.entries(formData)
  console.log(product)

  return redirect('/admin/product')
}