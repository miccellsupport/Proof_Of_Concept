import { StyleSheet } from 'react-native';

export const scanButtonStyle = StyleSheet.create({
	// View
	viewbody: {
		alignSelf: 'center',
		flexDirection: 'row',
		height: 60
	},
	// TouchableOpacity
	toSave: {
		alignItems: 'center',
		backgroundColor: '#008000',
		borderBottomLeftRadius: 5,
		borderTopLeftRadius: 5,
		height: 40,
		marginTop: 10,
		paddingHorizontal: 20,
		width: 105
	},
	toBreak: {
		alignItems: 'center',
		backgroundColor: '#FFD700',
		height: 40,
		marginTop: 10,
		paddingHorizontal: 20,
		width: 105
	},
	toCancel: {
		alignItems: 'center',
		backgroundColor: '#DC143C',
		borderBottomRightRadius: 5,
		borderTopRightRadius: 5,
		height: 40,
		marginTop: 10,
		paddingHorizontal: 20,
		width: 105
	},
	// Text
	textSave: {
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 1,
		marginVertical: 7
	},
	textBreak: {
		color: 'black',
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 1,
		marginVertical: 7
	},
	textCancel: {
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 1,
		marginVertical: 7
	}
});
