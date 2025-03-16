import { GridColDef } from '@mui/x-data-grid'
import { ActionsCell } from '../../../shared/ActionsCell/ui/ActionsCell'

export const columns: any = [
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
			return <ActionsCell id={id} />
		},
	},
]
