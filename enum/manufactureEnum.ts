'use server'

import { prisma } from "@/lib/prisma"

export const manufactureEnum = async () => {
  const manufactureEnums =  prisma.manufacture.findMany(
    {
      select: {
       id:true,
       title:true
      }
    }
  )
  return manufactureEnums
}

