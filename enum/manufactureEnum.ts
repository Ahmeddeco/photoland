'use server'

import { prisma } from "@/lib/prisma"
import { z } from "zod"

export const manufactureEnum = async () => {
  const manufactureEnums = await prisma.manufacture.findMany(
    {
      select: {
        id: true,
        name: true
      }
    }
  )
  return manufactureEnums
}

const schemaManuf = z.string()

export const manufactureForm = async (formData: FormData) => {
  try {
    const manufact = formData.get('manufacture')
    console.log(manufact, typeof (manufact))
    const validatedManufact = schemaManuf.safeParse(manufact)
    console.log('validatedManufact is', validatedManufact)

  } catch (error) {
    console.error(error)
    throw new Error

  }


}