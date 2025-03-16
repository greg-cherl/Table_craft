import { Button } from '@mui/material'
import { GridRowId, GridRowModes, GridRowModesModel } from '@mui/x-data-grid'
import { useState } from 'react'

export const ActionsCell = ({ id }) => {
	const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})

	const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

	return isInEditMode
		? [
				<Button color='primary' onClick={handleSaveClick(id)}>
					Сохранить
				</Button>,
				<Button color='primary' onClick={handleCancelClick(id)}>
					Отмена
				</Button>,
		  ]
		: [
				<Button color='primary' onClick={handleEditClick(id)}>
					Редактировать
				</Button>,
				<Button color='primary' onClick={handleDeleteClick(id)}>
					Удалить
				</Button>,
		  ]
}
