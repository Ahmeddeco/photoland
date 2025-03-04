'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

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
        sellerId: Number(formData.get('sellerId') as string),
      }
    })
  } catch (error) {
    console.error(error)
    throw new Error
  }
  redirect('/admin/product')
}



