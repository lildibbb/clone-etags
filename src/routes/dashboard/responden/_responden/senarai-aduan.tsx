import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/dashboard/responden/_responden/senarai-aduan",
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/dashboard/responden/_responden/senarai-aduan"!</div>;
}
