import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import style from './Sidebar.module.css'
import { NAVIGATION } from '../config/navigation'

type PropsType = {
	isOpen: boolean
	setOpen: (isOpen: boolean) => void
}

export const Sidebar = ({ isOpen, setOpen }: PropsType) => {
	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<div>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<MuiDrawer open={isOpen}>
					<div className={style.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							{isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
						</IconButton>
					</div>
					<Divider />
					<List>
						{NAVIGATION.map((item, index) => (
							<ListItem key={index} disablePadding>
								<ListItemButton className={style.ListButton}>
									<ListItemIcon className={style.ListIcon}>
										{item.icon}
									</ListItemIcon>
									<ListItemText primary={item.label} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<Divider />
				</MuiDrawer>
			</Box>
		</div>
	)
}
