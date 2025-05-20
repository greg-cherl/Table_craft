// src/app/theme.ts
import { createTheme, ThemeOptions, CSSObject } from '@mui/material/styles'

const drawerWidth = 240

const openedMixin = (theme: any): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = (theme: any): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const components: ThemeOptions['components'] = {
	MuiDrawer: {
		defaultProps: {
			variant: 'permanent',
		},
		styleOverrides: {
			root: ({ theme, ownerState }: any) => ({
				whiteSpace: 'nowrap',
				boxSizing: 'border-box',
				...(ownerState.open ? openedMixin(theme) : closedMixin(theme)),
			}),
			paper: ({ theme, ownerState }: any) => ({
				...(ownerState.open ? openedMixin(theme) : closedMixin(theme)),
			}),
		},
	},
	MuiAppBar: {
		defaultProps: {
			position: 'fixed',
		},
		styleOverrides: {
			root: ({ theme, ownerState }: any) => ({
				zIndex: theme.zIndex.drawer + 1,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				...(ownerState.open && {
					marginLeft: drawerWidth,
					width: `calc(100% - ${drawerWidth}px)`,
					transition: theme.transitions.create(['width', 'margin'], {
						easing: theme.transitions.easing.sharp,
						duration: theme.transitions.duration.enteringScreen,
					}),
				}),
			}),
		},
	},
}

export const theme = createTheme({
	palette: {
		primary: { main: '#1976d2' },
		background: { default: '#f5f5f5' },
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	},
	components,
})
