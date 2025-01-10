import { Subpage } from "@/Navigation/NavigationTypes";

const SvelteNavigation: Subpage = {
  name: "Svelte",
  subpages: [
    { name: "Svelte Notes", path: "/svelte" },
    { name: "Svelte Code Notes", path: "/svelte/sveltecode" },
  ],
};

export default SvelteNavigation;
