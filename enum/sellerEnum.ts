import { prisma } from "@/lib/prisma"

export const SellerEnum = async () => {
  const SellerEnums = await prisma.seller.findMany({
    select: {
      id: true,
      name: true
    }
  })
  return SellerEnums
}