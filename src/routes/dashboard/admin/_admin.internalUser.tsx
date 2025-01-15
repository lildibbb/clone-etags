import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/admin/_admin/internalUser')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/admin/_admin/internalUser"!</div>
}
