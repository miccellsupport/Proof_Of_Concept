// Library
import React from 'react';
// Framework
import { Text, TouchableOpacity, View } from 'react-native';
// Style
import { scanButtonStyle } from '../../styles/componentStyle/scan/scanButtonStyle';

const scanButtonCpn = ({ onPressBreak, onPressCancel, onPressSave, onPressTest }) => {
	return (
		<View style={scanButtonStyle.viewbody}>
			{/* layout ของปุ่มปิดใบงาน */}
			<View>
				<TouchableOpacity onPress={() => onPressSave()} style={scanButtonStyle.toSave}>
					<Text style={scanButtonStyle.textSave}>ปิดใบงาน</Text>
				</TouchableOpacity>
			</View>

			{/* layout ของปุ่มพักใบงาน */}
			<View>
				<TouchableOpacity onPress={() => onPressBreak()} style={scanButtonStyle.toBreak}>
					<Text style={scanButtonStyle.textBreak}>พักใบงาน</Text>
				</TouchableOpacity>
			</View>

			{/* layout ของปุ่มยกเลิก */}
			<View>
				<TouchableOpacity onPress={() => onPressCancel()} style={scanButtonStyle.toCancel}>
					<Text style={scanButtonStyle.textCancel}>ยกเลิก</Text>
				</TouchableOpacity>
			</View>

			{/* layout ของปุ่มtest */}
			<View>
				<TouchableOpacity onPress={() => onPressTest()} style={[scanButtonStyle.toBreak, {marginLeft: 20}]}>
					<Text style={scanButtonStyle.textBreak}>Test</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default scanButtonCpn;
