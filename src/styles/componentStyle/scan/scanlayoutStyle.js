import { StyleSheet } from 'react-native';

export const scanlayoutStyle = StyleSheet.create({
    // View
	viewBody: {
		height: 280,
		paddingLeft: 10
	},
	viewTitle: {
		fontWeight: 'bold',
		height: 65,
		marginBottom: 5,
		width: 400
	},
	viewData: {
		flexDirection: 'row',
		marginTop: 10,
		paddingLeft: 20,
		width: 445
	},
	viewText: {
		height: 30,
		marginTop: 5,
		marginBottom: 5,
		width: 100
	},
	viewTextInput: {
		backgroundColor: '#FFF',
		borderColor: 'rgba(0,0,0,0.1)',
		borderWidth: 1,
		height: 30,
		marginTop: 5,
		marginBottom: 5,
		width: 325
	},
	// Text
	textTitle: {
		color: '#5787A4',
		fontWeight: 'bold',
		fontSize: 38,
		marginBottom: 10,
		marginTop: 10
	},
	textData: {
		color: '#5787A4',
		fontWeight: 'bold'
	},
	textInput: {
		color: '#5787A4',
		justifyContent: 'center',
		padding: 3,
		textAlign: 'center'
	}
})