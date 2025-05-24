import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'
import { useTableData } from '../../hooks/useTableData'
import { getColumns } from '../../../entities/users/model/columns'
import style from './Table.module.css'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

export const Table = () => {
	const [loadingRequest, setLoadingRequest] = useState<boolean>(false)

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
		fetchNextPage,
	} = useTableData()

	const columns = getColumns({
		rowModesModel,
		handleSaveClick,
		handleCancelClick,
		handleEditClick,
		handleDeleteClick,
	})

	const handleShowMoreData = async () => {
		setLoadingRequest(true)

		setTimeout(() => {
			setLoadingRequest(false)
			fetchNextPage()
		}, 2000)
	}

	return (
		<Box
			sx={{
				width: '70%',
				margin: '0 auto',
			}}
		>
			<DataGrid
				style={{ height: '100%', overflow: 'auto' }}
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
			<div className={style.wrapperShowMoreData}>
				{loadingRequest ? (
					<CircularProgress />
				) : (
					<Button
						className={style.showMoreData}
						onClick={handleShowMoreData}
						disabled={loadingRequest}
					>
						Показать ещё
					</Button>
				)}
			</div>
		</Box>
	)
}
