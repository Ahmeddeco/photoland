import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs'

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
