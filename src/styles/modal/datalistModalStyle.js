import { StyleSheet } from 'react-native';

export const datalistModalStyle = StyleSheet.create({
	// Page
	container: {
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
		justifyContent: 'center'
	},
	// View
	viewModal: {
		alignItems: 'center',
		backgroundColor: '#f5f5fa',
		borderColor: '#5787A4',
		borderRadius: 20,
		borderWidth: 3,
		flex: 1,
		flexDirection: 'column',
		margin: 100,
		padding: 5,
		width: 400
	},
	viewLayoutText: {
		flex: 3
	},
	viewLayoutFlatlist: {
		borderBottomWidth: 1,
		borderColor: 'rgba(0,0,0,0.3)',
		borderTopWidth: 1,
		flex: 4
	},
	viewLoading: {
		fontWeight: 'bold',
		height: 50,
		marginTop: 5,
		marginBottom: 5,
		width: 340
	},
	viewLayoutLoading: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		marginLeft:120,
		marginTop: 10
	},
	viewLayoutMoadlLoading: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		marginTop: 150
	},
	// TouchableOpacity
	toSubmit: {
		alignItems: 'center',
		backgroundColor: '#1E90FF',
		borderRadius: 5,
		height: 40,
		marginRight: 10,
		marginTop: 10,
		paddingHorizontal: 20
	},
	toCancel: {
		alignItems: 'center',
		backgroundColor: '#DC143C',
		borderRadius: 5,
		height: 40,
		marginLeft: 10,
		marginTop: 10,
		paddingHorizontal: 20
	},
	// Text
	textSubmit: {
		color: '#FFFFFF',
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 1,
		marginVertical: 7
	},
	textcancel: {
		color: '#FFFFFF',
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 1,
		marginVertical: 7
	},
	// Flatlist
	flatlistCard: {
		fontWeight: 'bold',
		height: 50,
		marginTop: 5,
		marginBottom: 5,
		width: 340
	}
});
