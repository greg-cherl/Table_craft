import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import '../shared/styles/reset.css'
import { StyledEngineProvider } from '@mui/material/styles'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StyledEngineProvider injectFirst>
			<App />
		</StyledEngineProvider>
	</StrictMode>
)
