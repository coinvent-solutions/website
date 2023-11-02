import {
    logo,
    telegram,
    email,
    html,
    css,
    ton,
    python,
    ts,
    telegramBlue,
} from '../assets';

const LOGO = {
    img: logo,
    title: '',
    href: '',
    id: 'Logo',
};

const NavBarButtons = [
    {
        logo: telegram,
        title: 'Telegram',
        bg: 'bg-BLUE',
        color: 'ColorWhite',
        href: 'https://t.me/coinvent_dev',
    },
    {
        logo: email,
        title: 'Email',
        bg: 'bg-WHITE',
        color: 'ColorBlue',
        href: 'mailto:contact@coinvent.dev',
    },
];

const FooterButtons = [
    {
        logo: telegramBlue,
        title: 'Telegram',
        bg: 'bg-WHITE',
        color: 'ColorBlue',
        href: 'https://t.me/coinvent_dev',
    },
    {
        logo: email,
        title: 'Email',
        bg: 'bg-WHITE',
        color: 'ColorBlue',
        href: 'mailto:contact@coinvent.dev',
    },
];

const langs = [html, css, ton, python, ts];

export { LOGO, NavBarButtons, FooterButtons, langs };
