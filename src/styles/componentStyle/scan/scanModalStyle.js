import { StyleSheet } from 'react-native';

export const scanModalStyle = StyleSheet.create({
	// View
	viewBackground: {
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
		justifyContent: 'center'
	},
	viewLayout: {
		alignItems: 'center',
		backgroundColor: '#f5f5fa',
		borderColor: '#5787A4',
		borderRadius: 5,
		borderWidth: 3,
		flex: 1,
		flexDirection: 'column',
		margin: 100,
		padding: 5,
		width: 400
	},
	view: {
		flex: 1
	},
	viewLayoutData: {
		flexDirection: 'row'
	},
	viewLayoutDataPlus: {
		flexDirection: 'row',
		marginBottom: 10
	},
	viewProductName: {
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 100
	},
	viewItemCode: {
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 100
	},
	viewItemCodeData: {
		backgroundColor: '#FFF',
		borderColor: '#D3D3D3',
		borderWidth: 1,
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 280
	},
	viewLogsQty: {
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 100
	},
	viewLogsQtyData: {
		backgroundColor: '#FFF',
		flexDirection: 'row',
		height: 45,
		width: 180,
		margin: 5,
		borderColor: 'rgba(0,0,0,0.1)',
		borderWidth: 1,
		justifyContent: 'center'
	},
	viewCreateLot: {
		backgroundColor: '#FFF',
		borderColor: 'rgba(0,0,0,0.1)',
		borderWidth: 1,
		height: 45,
		marginBottom: 5,
		marginTop: 5,
		width: 90
	},
	viewHr: {
		borderColor: 'rgba(0,0,0,0.2)',
		borderTopWidth: 0.5,
		marginLeft: 10,
		marginRight: 10
	},
	viewLayoutLotQty: {
		flex: 5,
		marginBottom: 5,
		marginTop: 5
	},
	viewAllData: {
		alignSelf: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	viewLot: {
		height: 30,
		marginBottom: 5,
		marginLeft: 20,
		marginTop: 5,
		width: 40
	},
	viewLotInput: {
		backgroundColor: '#FFF',
		borderColor: '#D3D3D3',
		borderWidth: 1,
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 80
	},
	viewQty: {
		height: 30,
		marginBottom: 5,
		marginLeft: 20,
		marginTop: 5,
		width: 40
	},
	viewQtyInput: {
		backgroundColor: '#FFF',
		borderColor: '#D3D3D3',
		borderWidth: 1,
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 80
	},
	viewIconDelete: {
		marginLeft: 20,
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.2)',
		height: 30,
		width: 30,
		marginTop: 5,
		backgroundColor: '#FFF'
	},

	viewButton: {
		alignSelf: 'center',
		flex: 1,
		flexDirection: 'row',
		marginTop: 10
	},

	// TouchableOpacity
	toSubmit: {
		marginTop: 5,
		backgroundColor: 'white',
		paddingHorizontal: 5,
		alignItems: 'center',
		height: 30,
		borderColor: '#5787A4',
		borderWidth: 1,
		borderBottomLeftRadius: 5,
		borderTopLeftRadius: 5
	},
	toCancel: {
		marginTop: 5,
		backgroundColor: 'white',
		paddingHorizontal: 5,
		alignItems: 'center',
		height: 30,
		borderColor: '#5787A4',
		borderWidth: 1,
		borderBottomRightRadius: 5,
		borderTopRightRadius: 5
	},
	// TextInput
	tiLot: {
		color: '#5787A4',
		fontWeight: 'bold',
		justifyContent: 'center',
		padding: 3,
		textAlign: 'center'
	},
	itQty: {
		color: '#5787A4',
		fontWeight: 'bold',
		justifyContent: 'center',
		padding: 3,
		textAlign: 'center'
	},
	// Text
	textTitle: {
		color: '#5787A4',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		marginTop: 10,
		paddingRight: 255,
		textAlign: 'center'
	},
	textProductName: {
		color: '#5787A4',
		fontWeight: 'bold'
	},
	textProductNameData: {
		color: '#5787A4',
		fontWeight: 'bold',
		textAlign: 'center',
		justifyContent: 'center',
		padding: 3
	},
	textItemCode: {
		color: '#5787A4',
		fontWeight: 'bold'
	},
	textItemCodeData: {
		color: '#5787A4',
		fontWeight: 'bold',
		textAlign: 'center',
		justifyContent: 'center',
		padding: 3
	},
	textLogsQty: {
		fontWeight: 'bold',
		color: '#5787A4',
		marginTop: 12,
		alignSelf: 'center',
		fontSize: 16
	},
	textLogsQtyData: {
		marginLeft: 0,
		fontWeight: 'bold',
		color: '#FFA500',
		marginTop: 8,
		fontSize: 20
	},
	textLogsQtyDataplus: {
		fontWeight: 'bold',
		color: '#5787A4',
		marginTop: 8,
		fontSize: 20
	},
	textCreateLot: {
		color: '#5787A4',
		fontWeight: 'bold',
		justifyContent: 'center',
		padding: 3,
		textAlign: 'center'
	},
	textLot: {
		color: '#5787A4',
		fontSize: 20,
		fontWeight: 'bold'
	},
	textQty: {
		color: '#5787A4',
		fontSize: 20,
		fontWeight: 'bold'
	},
	textButtonSubmit: {
		marginVertical: 3,
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 1,
		color: '#5787A4'
	},
	textButtonCancel: {
		marginVertical: 3,
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 1,
		color: '#5787A4'
	},
	// ScrollView
	svProductNameData: {
		backgroundColor: '#FFF',
		borderColor: '#D3D3D3',
		borderWidth: 1,
		height: 30,
		marginBottom: 5,
		marginTop: 5,
		width: 280
	},
	svLayoutLotQty: {
		alignSelf: 'center',
		flex: 1,
		flexDirection: 'column',
		height: 310
	},
	// Icon
	iconCreateLot: {
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 2
	},
	iconTrash: {
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 5,
		marginLeft: 1
	}
});
