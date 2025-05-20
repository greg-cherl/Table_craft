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
import { AddRecordButton } from '../../AddRecordButton/AddRecordButton'
import { useTableData } from '../../hooks/useTableData'
import { getColumns } from '../../../entities/users/model/columns'
import { useGetUsersQuery } from '../../../entities/users/model/api'

export const Table = () => {
	const {
		rows,
		rowModesModel,
		handleSaveClick,
		handleCancelClick,
		handleEditClick,
		handleDeleteClick,
		handleRowModesModelChange,
		processRowUpdate,
		handleRowEditStop,
	} = useTableData()

	const columns = getColumns({
		rowModesModel,
		handleSaveClick,
		handleCancelClick,
		handleEditClick,
		handleDeleteClick,
	})

	return (
		<Box sx={{ width: '70%', margin: '0 auto' }}>
			<DataGrid
				rows={rows}
				// checkboxSelection
				columns={columns}
				editMode='row'
				rowModesModel={rowModesModel}
				onRowModesModelChange={handleRowModesModelChange}
				onRowEditStop={handleRowEditStop}
				processRowUpdate={processRowUpdate}
				hideFooter
				showColumnVerticalBorder={true}
			/>
		</Box>
	)
}
