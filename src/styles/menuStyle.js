import { StyleSheet } from 'react-native';

export const menuStyle = StyleSheet.create({
	// Page
	// View
	viewMenu: {
		flexDirection: 'row',
		marginEnd: 2,
		marginHorizontal: 15,
		marginTop: 1
	},
	// Text
	textMenu: {
		color: '#5787A4',
		fontSize: 25,
		fontWeight: 'bold',
		marginLeft: 10,
		marginTop: 5
	},
	// Component
	// View
	viewBgIcon: {
		alignSelf: 'center',
		backgroundColor: '#FFA500',
		borderRadius: 5,
		height: 50,
		marginTop: 15,
		width: 50
	},
	// TouchableOpacity
	touchableCard: {
		backgroundColor: '#f5f5fa',
		borderColor: '#5787A4',
		borderRadius: 5,
		borderStyle: 'solid',
		borderWidth: 2,
		height: 110,
		marginRight: 20,
		marginTop: 10,
		width: 215
	},
	// text
	textTitle: {
		alignSelf: 'center',
		color: '#5787A4',
		fontSize: 24,
		fontWeight: 'bold',
		paddingHorizontal: 10
	}
});
