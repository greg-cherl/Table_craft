import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { addNewRow } from '../../entities/users/model/gymManagerSlice.ts'
import style from './AddRecordButton.module.css'

export const AddRecordButton = () => {
	const dispatch = useDispatch()

	const handleAddRow = () => {
		dispatch(addNewRow())
	}
	return (
		<Button className={style.record} color='primary' onClick={handleAddRow}>
			Добавить запись
		</Button>
	)
}
