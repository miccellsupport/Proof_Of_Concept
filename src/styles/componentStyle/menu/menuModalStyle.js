import { StyleSheet } from 'react-native';

export const modalCpnStyle = StyleSheet.create({
	// View
	viewTitleModal: {
		flex: 1
	},
	viewLayout: {
		flexDirection: 'row'
	},
	view: {
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 100
	},
	viewDisplay: {
		backgroundColor: '#fff',
		borderColor: '#D3D3D3',
		borderWidth: 1,
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 240
	},
	// Text
	textTitleModal: {
		color: '#5787A4',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		marginTop: 10,
		paddingRight: 255,
		textAlign: 'center'
	},
	text: {
		color: '#5787A4',
		fontWeight: 'bold',
		padding: 3
	},
	textDisplay: {
		color: '#5787A4',
		justifyContent: 'center',
		padding: 3,
		textAlign: 'center'
	},
	// ScrollView
	svDisplay: {
		backgroundColor: '#fff',
		borderColor: '#D3D3D3',
		borderWidth: 1,
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 100
	}
});
