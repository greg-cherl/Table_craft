import logo from '../assets/dumbbell.png'
import style from './Header.module.css'

export const Header = () => {
	return (
		<div className={style.header}>
			<img src={logo} alt='logo' width={50} height={50} />
			<h1>Менеджер спортзала</h1>
			<div></div>
		</div>
	)
}
