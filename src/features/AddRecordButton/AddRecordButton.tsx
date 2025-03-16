import Button from '@mui/material/Button'
import { GridRowModes, GridToolbarContainer } from '@mui/x-data-grid'
import { useState } from 'react'

export const AddRecordButton = (props: any) => {
	const { setRows, setRowModesModel } = props
	const [nextId, setNextId] = useState(6)

	const handleClick = () => {
		const id = nextId
		setRows(oldRows => [
			...oldRows,
			{ id, name: '', age: '', role: '', isNew: true },
		])
		setRowModesModel(oldModel => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
		}))
		setNextId(prev => prev + 1) // Увеличиваем счётчик
	}

	return (
		<GridToolbarContainer>
			<Button
				color='primary'
				onClick={handleClick}
				sx={{ textTransform: 'none' }}
			>
				Добавить запись
			</Button>
		</GridToolbarContainer>
	)
}
