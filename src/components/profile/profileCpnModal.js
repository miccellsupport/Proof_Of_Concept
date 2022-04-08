// Library
import React, { useState } from 'react';
// Framework
import { Modal, Text, TouchableOpacity, View } from 'react-native';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
// Style
import { profileCpnStyle } from '../../styles/componentStyle/profile/profileCpnStyle';

const profileCpnProfile = ({ onPressHome }) => {
	const [ isModalVisiblePopupCancel, setModalVisiblePopupCancel ] = useState(false);
	// PopupCancelOpen
	const onPressPopupCancelOpen = () => {
		setModalVisiblePopupCancel(true);
	};
	// PopupCancelClose
	const onPressPopupCancelClose = () => {
		setModalVisiblePopupCancel(false);
	};
	return (
		<View>
			{/* ปุ่มกดออก */}
			<View style={profileCpnStyle.viewButton}>
				<TouchableOpacity onPress={() => onPressPopupCancelOpen()} style={profileCpnStyle.viewLogout}>
					<Text style={profileCpnStyle.textLogout}>ออกจากระบบ</Text>
				</TouchableOpacity>
			</View>

			{/* Modal คำเตือน */}
			<Modal
				animationType="none"
				transparent={true}
				visible={isModalVisiblePopupCancel}
				onRequestClose={() => setModalVisiblePopupCancel(false)}
			>
				<View style={profileCpnStyle.viewBackground}>
					{/* layout ของไอคอน */}
					<View style={profileCpnStyle.viewModal}>
						<View style={{ marginTop: 5 }}>
							<FontAwesomeIcon
								icon={faExclamationCircle}
								style={profileCpnStyle.iconPopup}
								size={75}
								color={'orange'}
							/>
						</View>

						{/* layout ของชื่อหัวข้อ */}
						<View style={{ marginTop: 5 }}>
							<Text style={profileCpnStyle.textTitle}>คำเตือน</Text>
						</View>

						{/* layout ของข้อความ */}
						<View style={{ marginTop: 5 }}>
							<Text style={profileCpnStyle.textSubline}>คุณต้องการ"ออกจากระบบ"ใช่หรือไม่</Text>
						</View>

						<View style={{ flexDirection: 'row' }}>
							{/* layout ของปุ่มยืนยัน */}
							<View>
								<TouchableOpacity style={profileCpnStyle.viewSave}>
									<View>
										<TouchableOpacity onPress={onPressHome}>
											<Text style={profileCpnStyle.textConfirm}>ยืนยัน</Text>
										</TouchableOpacity>
									</View>
								</TouchableOpacity>
							</View>

							{/* layout ของปุ่มยกเลิก */}
							<View>
								<TouchableOpacity
									onPress={() => onPressPopupCancelClose()}
									style={profileCpnStyle.viewClose}
								>
									<Text style={profileCpnStyle.textCancel}>ยกเลิก</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};
export default profileCpnProfile;
