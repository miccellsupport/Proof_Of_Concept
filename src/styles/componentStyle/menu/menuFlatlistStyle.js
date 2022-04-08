import { StyleSheet } from 'react-native';

export const flatlistCpnStyle = StyleSheet.create({
	viewFLCard: {
		alignItems: 'flex-start',
		backgroundColor: '#fff',
		borderColor: 'grey',
		borderRadius: 5,
		borderWidth: 1,
		flexDirection: 'column',
		marginBottom: 10
	},
	viewQuantity: {
		alignSelf: 'flex-end',
		flexDirection: 'row',
		marginBottom: 5,
		marginRight: 10
	},
	viewNumber: {
		marginLeft: 10,
		marginBottom: 5
	},
	// Text
	textTitle: {
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 10,
		marginVertical: 3,
		width: 315
	},
	textActual: {
		color: 'rgba(0,0,0,0.5)',
		fontSize: 15,
		fontWeight: 'bold'
	},
	textProductLogsQty: {
		color: '#000',
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'right'
	},
	textRequestQty: {
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
