import { StyleSheet } from 'react-native';

export const scanFlatlisttyle = StyleSheet.create({
	// View
	viewBody: {
		alignItems: 'flex-start',
		backgroundColor: '#fff',
		borderColor: 'grey',
		borderRadius: 5,
		borderWidth: 1,
		flexDirection: 'column',
		marginBottom: 10
	},
	viewProduct: {
		flexDirection: 'row',
		marginBottom: 5,
		marginLeft: 5,
		marginTop: 5
	},
	view: {
		flexDirection: 'row'
	},
	viewTextLayout: {
		alignItems: 'flex-end',
		marginBottom: 5,
		width: 410
	},
	viewAllTextLayout: {
		flexDirection: 'row',
		width: 400
	},
	viewSpace: {
		flexDirection: 'row',
		width: 100
	},
	viewText: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		width: 300
	},
	viewLayout: {
		alignItems: 'flex-end',
		width: 300
	},
	viewZone: {
		flexDirection: 'row',
		width: 275
	},
	viewNum: {
		width: 55
	},
	viewId: {
		flexDirection: 'row',
		width: 150
	},
	viewIdSpace: {
		width: 70
	},
	viewPickingRequestQty: {
		width: 80
	},
	viewPickingProductUnit: {
		width: 55
	},
    viewIcon:{
        marginTop: 3,
        width: 15
    },
	// Text
	textProduct: {
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 10,
		marginVertical: 3,
		width: 50
	},
	textProductData: {
		fontSize: 15,
		marginVertical: 3,
		width: 320
	},
	textItimCode: {
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 10,
		width: 45
	},
	textItemCodeData: {
		fontSize: 15,
		marginLeft: 10,
		width: 325
	},
	textPickingBarcode: {
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 10,
		width: 65
	},
	textPickingBarcodeData: {
		fontSize: 15,
		marginLeft: 10,
		width: 315
	},
	textPickingLot: {
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 10,
		width: 100
	},
	textPickingLotData: {
		fontSize: 15,
		marginLeft: 10,
		width: 270
	},
	textPickingSerialNumber: {
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 10,
		width: 100
	},
	textPickingSerialNumberData: {
		fontSize: 15,
		marginLeft: 10,
		width: 270
	},
	textPickingLocationCode: {
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 10,
		width: 100
	},
	textPickingLocationCodeData: {
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 10,
		width: 270
	},
	textNum: {
		color: 'rgba(0,0,0,0.5)',
		fontSize: 15,
		fontWeight: 'bold'
	},
	textId: {
		color: '#FFA500',
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'right'
	},
	textPickingRequestQty: {
		color: '#000',
		fontSize: 15,
		fontWeight: 'bold'
	},
	textPickingProductUnit: {
		color: 'rgba(0,0,0,0.5)',
		fontSize: 15,
		fontWeight: 'bold'
	}
});
