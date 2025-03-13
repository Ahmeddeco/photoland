import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs'
import { Button } from '../ui/button'

const UserAuth = () => {
	return (
		<>
			<SignedOut>
				<Button asChild  >
					<SignInButton />
				</Button>
				<Button asChild  >
					<SignUpButton />
				</Button>
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</>
	)
}

export default UserAuth
