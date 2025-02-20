import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { IconType } from 'react-icons/lib'

type socialIconsType = {
  title: string
  icon: IconType
  href: string
}

export const socialIcons: socialIconsType[] = [
  {
    title: 'facebook',
    icon: FaFacebook,
    href: 'https://www.facebook.com/'
  },
  {
    title: 'x',
    icon: FaXTwitter,
    href: 'https://x.com/'
  },
  {
    title: 'instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/'
  },
  {
    title: 'facebook',
    icon: FaYoutube,
    href: 'https://www.youtube.com/'
  },
]