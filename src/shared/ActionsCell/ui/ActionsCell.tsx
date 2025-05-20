import { Button, styled } from '@mui/material'
import { GridRowId, GridRowModes, GridRowModesModel } from '@mui/x-data-grid'
import style from './ActionsCell.module.css'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

export const ActionsCell = ({
	id,
	rowModesModel,
	handleSaveClick,
	handleCancelClick,
	handleEditClick,
	handleDeleteClick,
}: any) => {
	const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

	return isInEditMode ? (
		<>
			<Button
				className={style.button}
				sx={{ backgroundColor: '#4caf50 ' }}
				color='primary'
				onClick={handleSaveClick(id)}
			>
				Сохранить
			</Button>
			<Button
				className={style.button}
				sx={{ backgroundColor: '#607d8b  ' }}
				color='primary'
				onClick={handleCancelClick(id)}
			>
				Отмена
			</Button>
		</>
	) : (
		<>
			<Button
				className={style.button}
				sx={{ backgroundColor: '#2196f3' }}
				onClick={handleEditClick(id)}
			>
				Редактировать
			</Button>
			<Button
				className={style.button}
				sx={{ backgroundColor: '#f44336 ' }}
				onClick={handleDeleteClick(id)}
			>
				Удалить
			</Button>
		</>
	)
}
