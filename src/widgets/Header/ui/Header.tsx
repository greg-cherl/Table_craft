import MuiAppBar from '@mui/material/AppBar'
import { Toolbar, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import style from './Header.module.css'
import cn from 'classnames'
import MenuIcon from '@mui/icons-material/Menu'
import { AddRecordButton } from '../../../features/AddRecordButton/AddRecordButton'

type PropsType = {
	isOpen: boolean
	setOpen: (isOpen: boolean) => void
}

export const Header = ({ isOpen, setOpen }: PropsType) => {
	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const headerClassName = cn(style.header, {
		[style.open]: isOpen,
	})

	return (
		<MuiAppBar className={headerClassName} position='fixed'>
			<Toolbar sx={{ backgroundColor: '#374151' }}>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					onClick={handleDrawerOpen}
					edge='start'
					sx={[isOpen && { display: 'none' }]}
				>
					<MenuIcon />
				</IconButton>
				<div className={style.right}>
					<Typography variant='h6' noWrap>
						Менеджер спортзала
					</Typography>
					<AddRecordButton />
				</div>
			</Toolbar>
		</MuiAppBar>
	)
}
