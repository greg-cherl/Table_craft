import { GridColDef } from '@mui/x-data-grid'
import { ActionsCell } from '../../../shared/ActionsCell/ui/ActionsCell'
import { ru } from 'date-fns/locale'
import { format } from 'date-fns'

export const getColumns = (params: any) =>
	[
		{
			field: 'name',
			headerName: 'ФИО',
			width: 250,
			editable: true,
			headerAlign: 'left',
			align: 'left',
		},
		{
			field: 'phoneNumber',
			headerName: 'Номер телефона',
			width: 150,
			editable: true,
			type: 'number',
			headerAlign: 'left',
			align: 'left',
		},
		{
			field: 'datePurchase',
			headerName: 'Дата покупки',
			type: 'date',
			width: 150,
			editable: true,
			headerAlign: 'left',
			align: 'left',
			valueFormatter: value => {
				if (value) {
					return format(value, 'dd/MM/yyyy', { locale: ru })
				}
				return ''
			},
		},
		{
			field: 'term',
			headerName: 'Срок действия абонемента',
			type: 'number',
			width: 200,
			headerAlign: 'left',
			align: 'left',
			editable: true,
		},
		{
			field: 'endDate',
			headerName: 'Дата окончания абонемента',
			type: 'date',
			width: 210,
			editable: true,
			headerAlign: 'left',
			align: 'left',
			headerClassName: '',
			valueFormatter: value => {
				if (value) {
					return format(value, 'dd/MM/yyyy', { locale: ru })
				}
				return ''
			},
		},
		{
			field: 'actions',
			type: 'actions',
			headerName: 'Действия',
			width: 250,
			cellClassName: 'actions',

			getActions: ({ id }) => [
				<ActionsCell
					id={id}
					rowModesModel={params.rowModesModel}
					handleSaveClick={params.handleSaveClick}
					handleCancelClick={params.handleCancelClick}
					handleEditClick={params.handleEditClick}
					handleDeleteClick={params.handleDeleteClick}
				/>,
			],
		},
	] satisfies GridColDef<any>[]
