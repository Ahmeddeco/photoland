import { categories } from '@/constants/categories'
import Link from 'next/link'
import React from 'react'

const CategoriesNavLinks = () => {
	return <div className='flex flex-col gap-8 uppercase '>
  {categories.map(({ href, title }) => (
    <Link
      type='submit'
      href={`/category/${href}`}
      key={href}
    
    >
      {title}
    </Link>
  ))}
</div>
}

export default CategoriesNavLinks
