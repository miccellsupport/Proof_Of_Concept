// Library
import React from 'react';
// Framework
import { ScrollView, Text, View } from 'react-native';
// Style
import { modalCpnStyle } from '../../styles/componentStyle/menu/menuModalStyle';

const datalistModal = ({ inputDocument, inputPickingDate, inputRemark }) => {
	return (
		<View>
			{/* layout ของชื่อหน้า */}
			<View style={modalCpnStyle.viewTitleModal}>
				<Text style={modalCpnStyle.textTitleModal}>รายละเอียด</Text>
			</View>

			{/* layout ของโซนเลขที่เอกสาร */}
			<View style={modalCpnStyle.viewLayout}>
				<View style={modalCpnStyle.view}>
					<Text style={modalCpnStyle.text}>เลขที่เอกสาร</Text>
				</View>
				<View style={modalCpnStyle.viewDisplay}>
					<Text style={modalCpnStyle.textDisplay}>{inputDocument}</Text>
				</View>
			</View>

			{/* layout ของโซนใบสั่งซื้อ */}
			<View style={modalCpnStyle.viewLayout}>
				<View style={modalCpnStyle.view}>
					<Text style={modalCpnStyle.text}>ใบสั่งซื้อ</Text>
				</View>
				<View style={modalCpnStyle.viewDisplay}>
					<Text style={modalCpnStyle.textDisplay}>{inputDocument}</Text>
				</View>
			</View>

			{/* layout ของข้อมูลผู้ขาย */}
			<View style={[ modalCpnStyle.viewLayout, { width: 340 } ]}>
				<View style={modalCpnStyle.view}>
					<Text style={modalCpnStyle.text}>ผู้ขาย</Text>
				</View>
				<ScrollView style={modalCpnStyle.svDisplay}>
					<Text style={modalCpnStyle.textDisplay}>{inputRemark}</Text>
				</ScrollView>
			</View>

			{/* layout ของวันที่เอกสาร */}
			<View style={[ modalCpnStyle.viewLayout, { marginBottom: 10 } ]}>
				<View style={modalCpnStyle.view}>
					<Text style={modalCpnStyle.text}>วันที่เอกสาร</Text>
				</View>
				<View style={modalCpnStyle.viewDisplay}>
					<Text style={modalCpnStyle.textDisplay}>{inputPickingDate}</Text>
				</View>
			</View>
		</View>
	);
};
export default datalistModal;
