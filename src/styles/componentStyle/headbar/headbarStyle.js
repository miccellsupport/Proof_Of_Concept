import { StyleSheet } from 'react-native';

export const headbarCpn = StyleSheet.create({
	// View
	viewBar: {
		backgroundColor: '#5787A4',
		flexDirection: 'row',
		height: 75,
		margin: 0,
		padding: 1,
		paddingTop: 25,
		width: 480,
		zIndex: 99
	},
	viewTitle: {
		marginLeft: 10,
		width: 370
	},
	viewIcon: {
		marginLeft: 10,
		marginTop: 10
	},
	// Text
	textTitle: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 35,
		textAlign: 'center'
	},
	// Icon
	iconAngleLeft: {
		alignItems: 'center',
		alignSelf: 'center'
	},

	// headbarDetailCpn
	viewBarD: {
		backgroundColor: '#5787A4',
		flexDirection: 'row',
		height: 75,
		margin: 0,
		padding: 1,
		paddingTop: 25,
		width: 480
	},
	viewTitleD: {
		// backgroundColor: "#000",
		marginLeft: 100,
		width: 280
	},
	viewIconD: {
		// backgroundColor: "#000",
		marginLeft: 10,
		marginTop: 10
	},
	// Text
	textTitleD: {
		color: '#FFFFFF',
		fontSize: 35,
		fontWeight: 'bold'
	},
    
	// headbarProfileCpn
	viewBarP: {
		backgroundColor: '#5787A4',
		flexDirection: 'row',
		height: 75,
		margin: 0,
		padding: 1,
		paddingTop: 25,
		width: 480
	},
	viewTitleP: {
		// backgroundColor: "#000",
		marginLeft: 140,
		width: 280
	},
	viewIconP: {
		// backgroundColor: "#000",
		marginLeft: 10,
		marginTop: 10
	},
	// Text
	textTitleP: {
		color: '#FFFFFF',
		fontSize: 35,
		fontWeight: 'bold'
	}
});
