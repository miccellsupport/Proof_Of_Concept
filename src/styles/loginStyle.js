import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
	// Page
	container: {
		alignItems: 'center',
		backgroundColor: '#283032',
		flex: 1,
		justifyContent: 'center'
	},
	// View
	content: {
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginTop: 50
	},
	pinCode: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	pinNumber: {
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: 470,
		justifyContent: 'center',
		width: 400
	},
	// TouchableOpacity
	headingText: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold'
	},
	number: {
		alignItems: 'center',
		backgroundColor: '#252C2E',
		borderRadius: 100,
		height: 100,
		justifyContent: 'center',
		margin: 10,
		width: 100
	},
	// Text
	numberText: {
		fontSize: 50,
		color: '#FFF',
		textAlign: 'center'
	},
	// Image
	logo: {
		alignSelf: 'center',
		height: 75,
		marginBottom: 50,
		resizeMode: 'contain',
		width: 400
	},
	// pinCode
	disablePin: {
		borderColor: '#FFF',
		borderRadius: 15,
		borderWidth: 1,
		height: 15,
		margin: 30,
		width: 15
	},
	enablePin: {
		backgroundColor: '#FFF',
		borderColor: '#FFF',
		borderRadius: 15,
		borderWidth: 1,
		height: 15,
		margin: 30,
		width: 15
	}
});
