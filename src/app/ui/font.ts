import localFont from "@next/font/local";

const galgo = localFont({
	src: [
		{
			path: "../../../public/fonts/Galgo.ttf",
			weight: "400",
		},
	],
	variable: "--galgo",
});

export default galgo;
