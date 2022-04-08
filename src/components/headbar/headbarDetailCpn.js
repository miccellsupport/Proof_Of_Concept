// Library
import React from 'react';
// Framework
import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
// Style
import { headbarCpn } from '../../styles/componentStyle/headbar/headbarStyle';

const HeadbarDetail = ({ onPressMenu , onPressUser }) => {
	return (
		<View style={headbarCpn.viewBarD}>
			<StatusBar backgroundColor="rgba( 0,0,0,0.5 )" />
			{/* ชื่อหัวข้อ */}

			<View style={headbarCpn.viewIconD}>
				<TouchableOpacity onPress={onPressMenu}>
					<FontAwesomeIcon icon={faBars} size={30} color={'white'}/>
				</TouchableOpacity>
			</View>

			<View style={headbarCpn.viewTitleD}>
				<Text style={headbarCpn.textTitleD}>สำนักงานใหญ่</Text>
			</View>

			{/* ไอคอนสำหรับเข้าหน้า UserPage */}
			<View style={headbarCpn.viewIconD}>
				<TouchableOpacity onPress={onPressUser}>
					<FontAwesomeIcon icon={faUserCircle} size={30} color={'white'} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default HeadbarDetail;
