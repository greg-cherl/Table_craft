import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Close'
import {
	GridRowsProp,
	GridRowModesModel,
	GridRowModes,
	DataGrid,
	GridColDef,
	GridToolbarContainer,
	GridEventListener,
	GridRowId,
	GridRowModel,
	GridRowEditStopReasons,
} from '@mui/x-data-grid'
import { AddRecordButton } from '../../../AddRecordButton/AddRecordButton'

// Собственные тестовые данные
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

// function EditToolbar(props: any) {
// 	const { setRows, setRowModesModel } = props
// 	const [nextId, setNextId] = React.useState(6) // Счётчик для новых ID

// 	const handleClick = () => {
// 		const id = nextId
// 		setRows(oldRows => [
// 			...oldRows,
// 			{ id, name: '', age: '', role: '', isNew: true },
// 		])
// 		setRowModesModel(oldModel => ({
// 			...oldModel,
// 			[id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
// 		}))
// 		setNextId(prev => prev + 1) // Увеличиваем счётчик
// 	}

// 	return (
// 		<GridToolbarContainer>
// 			<Button
// 				color='primary'
// 				startIcon={<AddIcon />}
// 				onClick={handleClick}
// 				sx={{ textTransform: 'none' }}
// 			>
// 				Добавить запись
// 			</Button>
// 		</GridToolbarContainer>
// 	)
// }

export const Table = () => {
	const [rows, setRows] = React.useState(initialRows)
	const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
		{}
	)
	console.log('rows', rows)

	const handleRowEditStop: GridEventListener<'rowEditStop'> = (
		params,
		event
	) => {
		if (params.reason === GridRowEditStopReasons.rowFocusOut) {
			event.defaultMuiPrevented = true
		}
	}

	const handleEditClick = (id: GridRowId) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
	}

	const handleSaveClick = (id: GridRowId) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
	}

	const handleDeleteClick = (id: GridRowId) => () => {
		setRows(rows.filter(row => row.id !== id))
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

	const processRowUpdate = (newRow: GridRowModel) => {
		const updatedRow = { ...newRow, isNew: false }
		setRows(rows.map(row => (row.id === newRow.id ? updatedRow : row)))
		return updatedRow
	}

	const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
		setRowModesModel(newRowModesModel)
	}

	const columns: GridColDef[] = [
		{
			field: 'name',
			headerName: 'ФИО',
			width: 280,
			editable: true,
		},
		{
			field: 'datePurchase',
			headerName: 'Дата покупки',
			type: 'date',
			width: 180,
			editable: true,
		},
		{
			field: 'age',
			headerName: 'Срок действия абонемента',
			type: 'number',
			width: 200,
			align: 'center',
			headerAlign: 'left',
			editable: true,
		},
		{
			field: 'endDate',
			headerName: 'Дата окончания абонемента',
			type: 'date',
			width: 180,
			editable: true,
		},
		{
			field: 'actions',
			type: 'actions',
			headerName: 'Действия',
			width: 300,
			cellClassName: 'actions',
			getActions: ({ id }) => {
				const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit
				if (isInEditMode) {
					return [
						<Button color='primary' onClick={handleSaveClick(id)}>
							Сохранить
						</Button>,
						<Button color='primary' onClick={handleCancelClick(id)}>
							Отмена
						</Button>,
					]
				}

				return [
					<Button color='primary' onClick={handleEditClick(id)}>
						Редактировать
					</Button>,
					<Button color='primary' onClick={handleDeleteClick(id)}>
						Удалить
					</Button>,
				]
			},
		},
	]

	return (
		<Box>
			<DataGrid
				sx={{
					border: 'none',
				}}
				rows={rows}
				checkboxSelection
				columns={columns}
				editMode='row'
				rowModesModel={rowModesModel}
				onRowModesModelChange={handleRowModesModelChange}
				onRowEditStop={handleRowEditStop}
				processRowUpdate={processRowUpdate}
				slots={{ toolbar: AddRecordButton }}
				slotProps={{
					toolbar: { setRows, setRowModesModel },
					pagination: {
						sx: { display: 'flex', justifyContent: 'flex-start' },
					},
				}}
			/>
		</Box>
	)
}
