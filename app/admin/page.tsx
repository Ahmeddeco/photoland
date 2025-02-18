import { auth } from "@clerk/nextjs/server"


export default async function AdminPage() {
  // const { userId } = await auth.protect({ permission: 'org:sys_memberships:read' })

  return <h1>Welcome to Adminpage!</h1>;
}