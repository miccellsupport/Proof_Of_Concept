import { StyleSheet } from 'react-native';

export const datalistStyle = StyleSheet.create({
	// View
	viewButtonBar: {
		borderBottomWidth: 0.5,
		borderColor: 'rgba(0,0,0,0.2)',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10
	},
	viewButton: {
		alignItems: 'center',
		backgroundColor: '#fff',
		borderColor: 'rgba(0,0,0,0.2)',
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderTopWidth: 1,
		height: 40,
		marginLeft: 10,
		width: 183
	},
	viewInputBar: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10
	},
	viewHr: {
		borderColor: 'rgba(0,0,0,0.2)',
		borderTopWidth: 0.5,
		marginLeft: 10,
		marginRight: 10
	},
	// TouchableOpacity
	toCard: {
		alignItems: 'flex-start',
		backgroundColor: '#fff',
		borderColor: 'grey',
		borderRadius: 5,
		borderWidth: 1,
		elevation: 5,
		marginBottom: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84
	},
	// TextInput
	textInputScan: {
		borderColor: '#5787A4',
		borderRadius: 2.5,
		borderWidth: 1,
		color: '#000',
		fontSize: 25,
		height: 50,
		textAlign: 'center',
		// width: 330,
		width: 460
	},
	// Text
	textButton: {
		color: '#5787A4',
		fontSize: 22,
		fontWeight: 'bold',
		marginLeft: 1,
		marginVertical: 7
	}
});
