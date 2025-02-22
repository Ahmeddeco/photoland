import { LucideIcon, Youtube, Instagram, Facebook, Twitter } from 'lucide-react'

type socialIconsType = {
  title: string
  icon: LucideIcon
  href: string
}

export const socialIcons: socialIconsType[] = [
  {
    title: 'facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/'
  },
  {
    title: 'x',
    icon: Twitter,
    href: 'https://x.com/'
  },
  {
    title: 'instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/'
  },
  {
    title: 'youtube',
    icon: Youtube,
    href: 'https://www.youtube.com/'
  },
]