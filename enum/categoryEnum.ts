'use server'

import { prisma } from "@/lib/prisma"

export const CategoryEnum = async () => {
  const CategoryEnums = await prisma.category.findMany({
    select: {
      id: true,
      title: true
    }
  })
  return CategoryEnums
}