import { StyleSheet } from 'react-native';

export const scanbarcodeStyle = StyleSheet.create({
	// Page
	// View
	viewBody: {
		flex: 1
	},
	viewContent: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'column',
		height: 740,
		padding: 5,
		width: 481
	},
	viewInput: {
		alignSelf: 'center',
		flexDirection: 'row',
		height: 70
	},
	viewFlatlist: {
		height: 330,
		alignSelf: 'center'
	},
	// TextInput
	textinput: {
		backgroundColor: '#FFF',
		fontSize: 20,
		marginTop: 5,
		marginBottom: 5,
		height: 60,
		width: 380,
		borderColor: '#5787A4',
		borderWidth: 2,
		borderRadius: 2.5,
		textAlign: 'center',
		color: '#5787A4'
	},
	// Flatlist
	flatlistData: {
		marginTop: 5,
		marginBottom: 5,
		fontWeight: 'bold',
		height: 50,
		width: 425
	}
});
