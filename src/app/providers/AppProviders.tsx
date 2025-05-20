import { ThemeProvider } from '@mui/material/styles'
import { ruRU } from '@mui/x-data-grid/locales'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { theme } from '../theme'
import { store } from '../store/store'

// const theme = createTheme({}, ruRU)
export const AppProviders = ({ children }) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</Provider>
		</BrowserRouter>
	)
}
