import { defineConfig } from "vocs";

export default defineConfig({
	title: "UW Gamedev",
	description: "Game development resources from the University of Waterloo.",
	aiCta: false,
	sidebar: [
		{
			text: "PRESS START",
			items: [
				{
					text: "Welcome!",
					link: "/intro",
				},
				{
					text: "Choosing an Engine",
					link: "/engines",
				},
			],
		},
	],
	socials: [
		{
			icon: "github",
			link: "https://github.com/uwgdc",
		},
		{
			icon: "discord",
			link: "https://discord.gg/tHEXh9d",
		},
	],
	logoUrl: {
		light: "/logo-light.svg",
		dark: "/logo-dark.svg",
	},
	iconUrl: {
		light: "/icon-light.svg",
		dark: "/icon-dark.svg",
	},
	ogImageUrl: "/og-image.png",
	font: {
		google: "Rubik",
	},
	theme: {
		accentColor: {
			light: "#F7B543",
			dark: "#F6CF51",
		},
		variables: {
			fontSize: {
				root: "16",
			},
			fontWeight: {
				regular: "400",
				medium: "450",
				semibold: "500",
			},
		},
	},
});
