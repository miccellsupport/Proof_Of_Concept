import { StyleSheet } from 'react-native';

export const profileCpnStyle = StyleSheet.create({
	// Page
	container: {
		backgroundColor: '#FFFFFF',
		flex: 1
	},
	// View
	heading: {
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginTop: 20
	},
	// Component profileCpn
	// View
	view: {
		flexDirection: 'row',
		marginBottom: 20
	},
	viewLeft: {
		marginLeft: 30,
		width: 155
	},
	viewRigth: {
		alignItems: 'flex-end',
		width: 250
	},
	viewIcon: {
		marginLeft: 10,
		marginTop: 5
	},
	// Text
	textLeft: {
		color: '#5787A4',
		fontSize: 18,
		fontWeight: 'bold'
	},
	textRigth: {
		color: '#5787A4',
		fontSize: 18
	},
	// Component profileCpnModal
	// View
	viewButton: {
		alignSelf: 'center',
		marginTop: 100
	},
	viewLogout: {
		borderColor: '#5787A4',
		borderRadius: 5,
		borderWidth: 1,
		height: 40,
		marginTop: 80,
		width: 180
	},
	viewBackground: {
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
		justifyContent: 'center'
	},
	viewModal: {
		alignItems: 'center',
		backgroundColor: 'white',
		borderColor: '#5787A4',
		borderRadius: 5,
		borderWidth: 3,
		flexDirection: 'column',
		height: 210,
		margin: 100,
		padding: 5,
		width: 400
	},
	viewSave: {
		alignItems: 'center',
		backgroundColor: '#228B22',
		borderColor: '#5787A4',
		borderRadius: 5,
		height: 30,
		marginRight: 10,
		marginTop: 10,
		paddingHorizontal: 5,
		width: 100
	},
	viewClose: {
		alignItems: 'center',
		backgroundColor: '#B22222',
		borderColor: '#5787A4',
		borderRadius: 5,
		height: 30,
		marginLeft: 10,
		marginTop: 10,
		paddingHorizontal: 5,
		width: 100
	},
	// Text
	textLogout: {
		alignItems: 'center',
		alignSelf: 'center',
		color: '#5787A4',
		fontSize: 15,
		fontWeight: 'bold',
		marginVertical: 7
	},
	textTitle: {
		color: '#5787A4',
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	textSubline: {
		color: '#5787A4',
		fontSize: 15,
		textAlign: 'center'
	},
	textConfirm: {
		alignItems: 'center',
		alignSelf: 'center',
		color: '#FFFFFF',
		fontSize: 15,
		fontWeight: 'bold',
		marginVertical: 3
	},
	textCancel: {
		alignItems: 'center',
		alignSelf: 'center',
		color: '#FFFFFF',
		fontSize: 15,
		fontWeight: 'bold',
		marginVertical: 3
	},
	// Icon
	iconPopup: {
		alignItems: 'center',
		alignSelf: 'center'
	}
});
