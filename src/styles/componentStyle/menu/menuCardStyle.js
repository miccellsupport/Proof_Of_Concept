import { StyleSheet } from 'react-native';

export const cardCpnStyle = StyleSheet.create({
	// View
	viewLayoutCard: {
		flexDirection: 'column'
	},

	// FirstRow
	viewFirstRow: {
		flexDirection: 'row',
		marginLeft: 5,
		marginTop: 5
	},
	viewStatus: {
		alignItems: 'flex-end',
		alignSelf: 'flex-end',
		width: 210
	},

	// SecondRow
	viewSecondRow: {
		flexDirection: 'row',
		marginLeft: 5,
		marginTop: 5
	},
	viewIcon: {
		alignItems: 'center',
		alignSelf: 'center'
	},
	viewDocument: {
		marginLeft: 5,
		width: 270
	},
	viewSubStatus: {
		alignItems: 'flex-end',
		alignSelf: 'flex-end',
		width: 140
	},

	// ThirdRow
	viewThirdRow: {
		flexDirection: 'row',
		marginLeft: 15,
		marginTop: 5
	},
	viewDate: {
		marginLeft: 10
	},

	// FourthRow
	viewFourthRow: {
		flexDirection: 'row',
		marginBottom: 10,
		marginLeft: 15,
		marginTop: 5
	},
	viewRemark: {
		marginLeft: 10,
		width: 345
	},

	// Text
	// FirstRow
	textType: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 5
	},
	textSubType: {
		fontSize: 18,
		width: 150
	},
	textStatus: {
		fontWeight: 'bold',
		fontSize: 20
	},

	// SecondRow
	textDocument: {
		color: '#000',
		fontSize: 22,
		fontWeight: 'bold'
	},
	textSubStatus: {
		fontWeight: 'bold',
		fontSize: 20
	},

	// ThirdRow
	textDate: {
		color: 'rgba(0,0,0,0.5)',
		fontWeight: 'bold',
		fontSize: 18
	},
	textSubDate: {
		color: '#5787A4',
		fontSize: 18,
		fontWeight: 'bold'
	},
	
	// FourthRow
	textRemark: {
		color: 'rgba(0,0,0,0.5)',
		fontWeight: 'bold',
		fontSize: 18
	},
	textSubRemark: {
		color: 'rgba(0,0,0,0.5)',
		fontSize: 18
	}
});
