// Library
import React from 'react';
// Framework
import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
// Style
import { headbarCpn } from '../../styles/componentStyle/headbar/headbarStyle';

const HeadbarCpn = ({ onPressDetail, onPressBack, onPressUser, Title }) => {
	return (
		<View style={headbarCpn.viewBar}>
			<StatusBar backgroundColor="rgba(0,0,0,0.5)" />
			{/* ปุ่มย้อนกลับ */}
			<View style={headbarCpn.viewIcon}>
				<TouchableOpacity onPress={onPressBack}>
					<FontAwesomeIcon icon={faAngleLeft} size={30} color={'#fff'} style={headbarCpn.iconAngleLeft} />
				</TouchableOpacity>
			</View>

			{/* ชื่อหัวข้อ */}
			<View style={headbarCpn.viewTitle}>
				<TouchableOpacity onPress={onPressDetail}>
					<Text style={headbarCpn.textTitle}>{Title}</Text>
				</TouchableOpacity>
			</View>

			{/* ไอคอนสำหรับเข้าหน้า UserPage */}
			<View style={headbarCpn.viewIcon}>
				<TouchableOpacity onPress={onPressUser}>
					<FontAwesomeIcon icon={faUserCircle} size={30} color={'white'} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
export default HeadbarCpn;
