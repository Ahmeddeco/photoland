'use server'

import { prisma } from "@/lib/prisma"

export const SellerEnum = async () => {
  const SellerEnums = await prisma.seller.findMany({
    select: {
      id: true,
      title: true
    }
  })
  return SellerEnums
}