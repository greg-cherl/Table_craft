import { AppLayout } from '../widgets/Layout/AppLayout'

import { AppProviders } from './providers/AppProviders.tsx'

// const theme = createTheme({}, ruRU)

export const App = () => {
	return (
		<AppProviders>
			<AppLayout />
		</AppProviders>
	)
}
