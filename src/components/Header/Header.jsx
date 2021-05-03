import React from 'react'
import { createMuiTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import categories from '../../data/category'

import './Header.css'


const Header = ({ category, setCategory, setWord, word }) => {

	const darkTheme = createMuiTheme({
		palette: {
			primary: {
				main: '#fff'
			},
			type: "dark"
		}
	})

	const handleChange = ( lang ) => {
		setCategory( lang )
		setWord('')
	}


	return (
		<div className="header">
			<span className="header__title"> { word ? word : "Word Hunt"  } </span>
			<div className="header__input">
				<ThemeProvider theme={darkTheme}>
				<TextField
            className="search"
            id="filled-basic"
						value={ word }
            onChange={(e) => setWord(e.target.value)}
						label="Search a Word"
          />
					<TextField
            select
            label="Language"
            value={category}
						onChange={(e) => handleChange(e.target.value)}
            className="select"
          >
				{ categories.map( cat => (
					<MenuItem key={ cat.label } value={ cat.label }> { cat.value } </MenuItem>
				))}
						
					</TextField>
				</ThemeProvider>
			</div>
		</div>
	)
}



export default Header
