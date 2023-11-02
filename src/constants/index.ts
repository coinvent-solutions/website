import { logo, telegram, gmail, html, css, ton, python, ts, telegramBlue } from "../assets"

const LOGO = {
	img: logo,
	title: "",
	href: "",
	id: "Logo"
}

const NavBarButtons = [
	{
		logo: telegram,
		title: "Telegram",
		bg: "bg-BLUE",
		color: "ColorWhite",
		href: "https://t.me/coinvent_dev",
	}, 
	{
		logo: gmail,
		title: "Gmail",
		bg: "bg-WHITE",
		color: "ColorBlack",
		href: "mailto:business@coinvent.dev"
	},
]

const FooterButtons = [
	{
		logo: telegramBlue,
		title: "Telegram",
		bg: "bg-WHITE",
		color: "ColorBlue",
		href: "https://t.me/coinvent_dev",
	}, 
	{
		logo: gmail,
		title: "Gmail",
		bg: "bg-WHITE",
		color: "ColorBlack",
		href: "mailto:business@coinvent.dev"
	},
]

const langs = [
    html,
    css,
    ton,
    python,
    ts,    
]

export { LOGO, NavBarButtons, FooterButtons, langs, };
  