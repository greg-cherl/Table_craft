import { GridRowModes, GridRowModesModel, GridRowsProp } from '@mui/x-data-grid'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const defaultRow = () => ({
	id: nanoid(),
	name: '',
	term: '',
	datePurchase: new Date(),
	endDate: '',
	isNew: true,
})

const initialState = {
	rows: null as ReturnType<typeof defaultRow> | null,
	rowModesModel: {},
}

const gymManagerSlice = createSlice({
	name: 'gymManager',
	initialState,
	reducers: {
		setRowModesModel: (state, action: PayloadAction<GridRowModesModel>) => {
			state.rowModesModel = action.payload
		},
		addNewRow: state => {
			const newRow = defaultRow()
			state.rows = newRow
			//@ts-ignore
			state.rowModesModel[newRow.id] = {
				mode: GridRowModes.Edit,
				fieldToFocus: 'name',
			}
		},
		cancelEditedRow: state => {
			state.rows = null
		},
	},
})

export const { setRowModesModel, addNewRow, cancelEditedRow } =
	gymManagerSlice.actions
export const gymManagerReducer = gymManagerSlice.reducer
