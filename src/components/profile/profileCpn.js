// Library
import React from 'react';
// Framework
import { Text, View } from 'react-native';
//  Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// Style
import { profileCpnStyle } from '../../styles/componentStyle/profile/profileCpnStyle';

const profileCpn = ({ leftText, rightText }) => {
	return (
		<View style={profileCpnStyle.view}>
			{/* ชื่อหัวข้อ */}
			<View style={profileCpnStyle.viewLeft}>
				<Text style={profileCpnStyle.textLeft}>{leftText}</Text>
			</View>

			{/* ชื่อข้อมูล */}
			<View style={profileCpnStyle.viewRigth}>
				<Text style={profileCpnStyle.textRigth}>{rightText}</Text>
			</View>

			{/* แทบที่ส่งไปยัง Modal */}
			<View style={profileCpnStyle.viewIcon}>
				<FontAwesomeIcon icon={faAngleRight} />
			</View>
		</View>
	);
};
export default profileCpn;