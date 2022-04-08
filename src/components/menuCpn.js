// Library
import React from 'react';
// Framework
import { View, TouchableOpacity, Text } from 'react-native';
//  Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
// Style
import { menuStyle } from '../styles/menuStyle';

const menuCpn = ({ onPress, title }) => {
	return (
		<TouchableOpacity onPress={onPress} style={menuStyle.touchableCard}>
			{/* layout ของไอคอน */}
			<View style={menuStyle.viewBgIcon}>
				<FontAwesomeIcon icon={faClipboardList} color={'white'} size={30} style={{ margin: 10 }} />
			</View>

			<Text style={menuStyle.textTitle}>{title}</Text>
		</TouchableOpacity>
	);
};
export default menuCpn;
