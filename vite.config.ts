import { defineConfig } from "vite";

import path from "node:path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite(),
		viteReact(),
		svgr({
			// svgr options: https://react-svgr.com/docs/options/
			svgrOptions: {
				exportType: "default",
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: "**/*.svg",
		}),
	],
	server: {
		port: 3000,
		open: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
