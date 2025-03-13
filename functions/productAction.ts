'use server'

import { prisma } from "@/lib/prisma"
import { addProductSchema } from "@/lib/zodSchema"
import { ProductSchema } from "@/prisma/zod"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"
import { toast } from "sonner"
import { z } from "zod"

export async function addProduct(formData: FormData) {
  try {
    await prisma.product.create({
      data: {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        model: formData.get('model') as string,
        price: Number(formData.get('price') as string),
        discount: Number(formData.get('discount') as string),
        manufactureId: Number(formData.get('manufactureId') as string),
        categoryId: Number(formData.get('categoryId') as string),
        sellerId: Number(formData.get('seller') as string),
        isNew: Boolean(formData.get('isNew') as string)
      }
    })
  } catch (error) {
    console.error(error)
    throw new Error
  }
  redirect('/admin/product')
}


export async function addProductConform(prevState: unknown, formData: FormData) {
  const rawData = formData
  console.log('rawData is ', rawData)
  const submissionData = parseWithZod(formData, { schema: addProductSchema })

  if (submissionData.status !== 'success') {
    return submissionData.reply()
  }
  console.log(submissionData)

  redirect('/admin/product')
}