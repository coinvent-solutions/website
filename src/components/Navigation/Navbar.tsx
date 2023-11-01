import { FC } from 'react';
import { logo } from '../../assets'
import { LOGO, NavBar, NavBarButtons } from '../../constants'
import styles from './Navbar.module.scss'
import classNames from 'classnames'

function ButtonClickOpen(object: string) {
    document.getElementsByClassName(object)[0].classList.toggle(styles.hidden);
};

interface INavBarLogo {
	img: string,
	title: string,
	href: string,
	id: string,
}

const NavBarLogo: FC<INavBarLogo> = ({ img, title, href, id }) => {
    return (
		<div className={styles.NavbarLogo}>
			<img src={img} alt="" />

		</div>
    );
};

interface INavBar {
    title: string,
    href: string,
    id: string,
}

const NavBarBlock: FC<INavBar> = ({ title, href, id }) => {
    return (
        <h1 className={styles.NavBlock}>{title}</h1>
    );
};

interface INavBarButton {
    logo: string,
	title: string,
	bg: string,
	color: string,
}

const NavButtons: FC<INavBarButton> = ({ logo, title, bg, color }) => {
    return (
		<div className={classNames(bg, color, styles.NavbarButton)}>
			<img src={logo} alt="" className={styles.NavbarButton_Logo} />
        	<h1 className={styles.cursor_pointer}>{title}</h1>
		</div>
    );
};

function Navbar() {
	console.log()
    return (
        <div className={styles.Navbar}>
			<NavBarLogo {...LOGO}></NavBarLogo>
			<div></div>
			<div className={styles.NavbarPlaceLinks}>
				{NavBar.map((i) => (
					<NavBarBlock {...i}></NavBarBlock>
				))}
			</div>
			<div className={styles.NavbarPlaceButtons}>
				{NavBarButtons.map((i) => (
					<NavButtons {...i}></NavButtons>
				))}
			</div>
		</div>
    )
}

export default Navbar
