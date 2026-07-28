// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";
import { resolve } from "node:path";
import type { Plugin } from "vite";

function normalizeWindowsRootForMcp(): Plugin {
  return {
    name: "normalize-windows-root-for-lovable-mcp",
    configResolved(config) {
      if (process.platform === "win32") {
        (config as { root: string }).root = resolve(config.root);
      }
    },
  };
}

export default defineConfig({
  plugins: [normalizeWindowsRootForMcp(), mcpPlugin()],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
