// widgets/layout/AppLayout.jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import { Header } from '../Header/ui/Header'
import { Sidebar } from '../Sidebar/ui/Sidebar'
import { Table } from '../../features/Table/ui/Table'
import style from './AppLayout.module.css'

export const AppLayout = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<Header isOpen={isOpen} setOpen={setOpen} />
			<Sidebar isOpen={isOpen} setOpen={setOpen} />
			<Box className={style.main}>
				<Table />
			</Box>
		</>
	)
}
