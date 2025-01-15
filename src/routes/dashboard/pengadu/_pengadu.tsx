import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/pengadu/_pengadu')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/pengadu/_pengadu"!</div>
}
