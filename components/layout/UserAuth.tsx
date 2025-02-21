import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs'
import { Avatar } from '@heroui/avatar'
import React from 'react'

const UserAuth = () => {
	return (
		<>
			<SignedOut>
				<SignInButton />
				<SignUpButton />
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</>
	)
}

export default UserAuth
