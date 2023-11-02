import { FC } from 'react';
import { logo } from '../../assets'
import { LOGO, NavBarButtons } from '../../constants'
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
	href: string,
}

const NavButtons: FC<INavBarButton> = ({ logo, title, bg, color, href }) => {
    return (
		<a href={href} className={classNames(bg, color, styles.NavbarButton)}>
			<img src={logo} alt="" className={styles.NavbarButton_Logo} />
        	<h1 className={styles.cursor_pointer}>{title}</h1>
		</a>
    );
};

function Navbar() {
	
	function ToTop() {
		(document.querySelector('body') as HTMLBodyElement).scrollIntoView({ 
			block: 'start',
			behavior: 'smooth', 
		});
	}

	function ScrollTo(id: string, where: ScrollLogicalPosition) {
		(document.getElementById(id) as HTMLBodyElement).scrollIntoView({ 
			block: where,
			behavior: 'smooth', 
		});
	}

    return (
        <div className={styles.Navbar}>
			<NavBarLogo {...LOGO}></NavBarLogo>
			<div></div>
			<div className={styles.NavbarPlaceLinks}>
				<h1 onClick={ToTop} className={styles.NavBlock}>Main</h1>
				<h1 onClick={() => ScrollTo("Advantages", 'start')} className={styles.NavBlock}>Our advantages</h1>
				<h1 onClick={() => ScrollTo("People", 'center')} className={styles.NavBlock}>About Us</h1>
				<h1 onClick={() => ScrollTo("Projects", 'center')} className={styles.NavBlock}>Recent projects</h1>
				<h1 onClick={() => ScrollTo("Contact", 'center')} className={styles.NavBlock}>Contacts</h1>
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
