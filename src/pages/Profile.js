// Library
import React from 'react';
// Framework
import { View } from 'react-native';
// Component
import HeadbarDetail from '../components/headbar/headbarProfileCpn';
import ProfileCpn from '../components/profile/profileCpn';
import ProfileCpnProfile from '../components/profile/profileCpnModal';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
// Style
import { profileStyle } from '../styles/profileStyle';

export default class Profile extends React.Component {
	render() {
		return (
			<View>
				<HeadbarDetail onPressGoBack={() => this.props.navigation.goBack()} />
				<View style={profileStyle.heading}>
					<FontAwesomeIcon icon={faUserCircle} size={100} color={'rgba(0,0,0,0.5)'} />
				</View>

				<ProfileCpn leftText="ชื่อผู้ใช้" rightText="นายเอกวิทย์ บุญบำเทิง" />

				<ProfileCpn leftText="เพศ" rightText="ชาย" />

				<ProfileCpn leftText="วันเกิด" rightText="08-09-2535" />

				<ProfileCpn leftText="โทรศัพท์" rightText="********95" />

				<ProfileCpn leftText="E-mail" rightText="Gonkkak.Jang@miccell.com" />

				<ProfileCpn leftText="เปลี่ยนรหัสผ่าน" rightText="*****" />

				<ProfileCpnProfile onPressHome={() => this.props.navigation.navigate('Login')} />
			</View>
		);
	}
}
