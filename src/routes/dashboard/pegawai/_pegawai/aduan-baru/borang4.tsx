import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/pegawai/_pegawai/aduan-baru/borang4',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/pegawai/aduan-baru/borang4"!</div>
}
