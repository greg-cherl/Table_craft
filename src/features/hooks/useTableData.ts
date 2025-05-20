import {
	GridEventListener,
	GridRowEditStopReasons,
	GridRowId,
	GridRowModel,
	GridRowModes,
	GridRowModesModel,
} from '@mui/x-data-grid'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../app/store/store'
import {
	useAddUserMutation,
	useDeleteUserMutation,
	useGetUsersQuery,
	useUpdateUserMutation,
} from '../../entities/users/model/api'
import {
	cancelEditedRow,
	setRowModesModel,
} from '../../entities/users/model/gymManagerSlice'

export const useTableData = () => {
	const { data: rows = [], isLoading, isError } = useGetUsersQuery()
	const newRows = useSelector((state: RootState) => state.gymManager.rows)

	const [deleteUser] = useDeleteUserMutation()
	const [updateUser] = useUpdateUserMutation()
	const [addUser] = useAddUserMutation()

	const dispatch = useDispatch()

	const combinedRows = newRows ? [...rows, newRows] : rows

	const rowModesModel = useSelector(
		(state: RootState) => state.gymManager.rowModesModel
	)

	const handleSaveClick = (id: GridRowId) => () => {
		addUser(newRows)

		dispatch(
			setRowModesModel({
				...rowModesModel,
				[id]: { mode: GridRowModes.View },
			})
		)
	}

	const handleCancelClick = (id: GridRowId) => () => {
		dispatch(
			setRowModesModel({
				...rowModesModel,
				[id]: { mode: GridRowModes.View, ignoreModifications: true },
			})
		)
		if (newRows?.id === id) {
			dispatch(cancelEditedRow())
		}
	}

	const handleEditClick = (id: GridRowId) => () => {
		dispatch(
			setRowModesModel({
				...rowModesModel,
				[id]: { mode: GridRowModes.Edit },
			})
		)
	}

	const handleDeleteClick = (id: string) => async () => {
		await deleteUser(id)
	}

	const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
		dispatch(setRowModesModel(newRowModesModel))
	}

	const processRowUpdate = async (newRow: GridRowModel) => {
		const updatedRow = { ...newRow, isNew: false }
		await updateUser({
			id: newRow.id,
			updateUser: updatedRow,
		})
		return updatedRow
	}

	const handleRowEditStop: GridEventListener<'rowEditStop'> = (
		params,
		event
	) => {
		if (params.reason === GridRowEditStopReasons.rowFocusOut) {
			event.defaultMuiPrevented = true
		}
	}

	return {
		rows: combinedRows,
		setRowModesModel,
		rowModesModel: rowModesModel,
		handleSaveClick,
		handleCancelClick,
		handleEditClick,
		handleDeleteClick,
		handleRowModesModelChange,
		processRowUpdate,
		handleRowEditStop,
	}
}
