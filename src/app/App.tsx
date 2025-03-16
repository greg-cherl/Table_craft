import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ruRU } from '@mui/x-data-grid/locales'

import { Header } from '../widgets/Header/ui/Header'
import { Table } from '../features/gymManager/Table/ui/Table'

const theme = createTheme({}, ruRU)

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Table />
		</ThemeProvider>
	)
}
