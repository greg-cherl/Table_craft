import {
	GridRowId,
	GridRowModes,
	GridRowModesModel,
	GridRowsProp,
} from '@mui/x-data-grid'
import { useState } from 'react'

// тестовые данные
const initialRows: GridRowsProp = [
	{
		id: 1,
		name: 'Алексей Петров',
		age: 28,
		datePurchase: new Date('2022-03-15'),
		endDate: new Date('2022-03-15'),
	},
	{
		id: 2,
		name: 'Мария Иванова',
		age: 34,
		datePurchase: new Date('2021-07-01'),
		endDate: new Date('2022-03-15'),
	},
	{
		id: 3,
		name: 'Иван Сидоров',
		age: 22,
		datePurchase: new Date('2023-01-10'),
		endDate: new Date('2022-03-15'),
	},
	{
		id: 4,
		name: 'Ольга Смирнова',
		age: 45,
		datePurchase: new Date('2020-11-20'),
		endDate: new Date('2022-03-15'),
	},
	{
		id: 5,
		name: 'Павел Волков',
		age: 31,
		datePurchase: new Date('2022-09-05'),
		endDate: new Date('2022-03-15'),
	},
]

export const useTableData = () => {
	const [rows, setRows] = useState(initialRows)
	const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})

	const handleSaveClick = (id: GridRowId) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
	}

	const handleCancelClick = (id: GridRowId) => () => {
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.View, ignoreModifications: true },
		})

		const editedRow = rows.find(row => row.id === id)
		if (editedRow!.isNew) {
			setRows(rows.filter(row => row.id !== id))
		}
	}

	const handleEditClick = (id: GridRowId) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
	}

	const handleDeleteClick = (id: GridRowId) => () => {
		setRows(rows.filter(row => row.id !== id))
	}

	return {
		rows,
		setRows,
		rowModesModel,
		handleSaveClick,
		handleCancelClick,
		handleEditClick,
		handleDeleteClick,
	}
}
