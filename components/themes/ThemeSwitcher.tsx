'use client'

import { Switch } from '@heroui/switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<Switch
			defaultSelected
			color='primary'
			size='lg'
			endContent={<Moon />}
			startContent={<Sun />}
			onValueChange={(isSelected) => setTheme(isSelected ? 'light' : 'dark')}
		/>
	)
}
