import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard"!</div>
}
