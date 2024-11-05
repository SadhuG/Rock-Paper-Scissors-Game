import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/Rock-Paper-Scissors-Game",
	plugins: [react()],
});
