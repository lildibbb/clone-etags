import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/pegawai/_pegawai/senarai-aduan',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/pegawai/_pegawai/senarai-aduan"!</div>
}
