// Library
import React from 'react';
// Framework
import { Alert, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Component
import HeadBar from '../components/headbar/headbarDetailCpn';
import MenuCpn from '../components/menuCpn';
// Style
import { menuStyle } from '../styles/menuStyle';

const baseUrl = 'http://192.168.1.25/';
// DB
const url = `${baseUrl}erp_barcode/backend/picking/get_hd`;
const urlInlist = `${baseUrl}erp_barcode/backend/picking/get_dt`;

export default class Menu extends React.Component {
	state = {
		modalVisible: false
	};

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	};
	render() {
		const { modalVisible } = this.state;
		return (
			<ScrollView>
				<HeadBar
					onPressMenu={() => this.setModalVisible(true)}
					onPressUser={() => this.props.navigation.navigate('Profile')}
				/>

				<View>
					<Text style={menuStyle.textMenu}>Purchasing Management</Text>
				</View>

				<View style={menuStyle.viewMenu}>
					<MenuCpn
						onPress={() =>
							this.props.navigation.navigate('ListData', {
								inputDataMain: url,
								inputDataInModal: urlInlist,
								inputMainDataType: { picking_type: 'pms' },
								inputRefrech: { picking_type: 'sbm' }
							})}
						title="รับสินค้า"
					/>
					{/* onPress={() => this.props.navigation.navigate('PMS1')} */}

					<MenuCpn title="ใบขนขาเข้า" />
					{/* onPress={() => this.props.navigation.navigate('Pmm2')} */}
				</View>

				<View>
					<Text style={menuStyle.textMenu}>Sales & Billing Management</Text>
				</View>

				<View style={menuStyle.viewMenu}>
					<MenuCpn
						onPress={() =>
							this.props.navigation.navigate('ListData', {
								inputDataMain: url,
								inputDataInModal: urlInlist,
								inputMainDataType: { picking_type: 'sbm' },
								inputRefrech: { picking_type: 'pms' }
							})}
						title="จ่ายสินค้า"
					/>
					{/* onPress={() => this.props.navigation.navigate('SBM1')} */}

					<MenuCpn title="ใบขนขาออก" />
					{/* onPress={() => this.props.navigation.navigate('Sbm2')} */}
				</View>

				<View>
					<Text style={menuStyle.textMenu}>Warehouse Management</Text>
				</View>

				<View style={menuStyle.viewMenu}>
					<MenuCpn title="เบิกสินค้า" />
					{/* onPress={() => this.props.navigation.navigate('Wh1')} */}

					<MenuCpn title="โอนสินค้าออก" />
					{/* onPress={() => this.props.navigation.navigate('Wh2')} */}
				</View>

				<View style={menuStyle.viewMenu}>
					<MenuCpn title="โอนสินค้าเข้า" />
					{/* onPress={() => this.props.navigation.navigate('Wh3')} */}

					<MenuCpn title="รับสินค้าผลิตเสร็จ" />
					{/* onPress={() => this.props.navigation.navigate('Wh4')} */}
				</View>

				<View style={menuStyle.viewMenu}>
					<MenuCpn title="รับคืนจากการเบิก" />
					{/* onPress={() => this.props.navigation.navigate('Wh5')} */}

					<MenuCpn title="ตรวจนับสินค้า" />
					{/* onPress={() => this.props.navigation.navigate('Wh6')} */}
				</View>

				<View>
					<Text style={menuStyle.textMenu}>อื่นๆ</Text>
				</View>

				<View style={menuStyle.viewMenu}>
					<MenuCpn title="พิมพ์บาร์โค้ด" />
				</View>

				<Modal
					animationType="none"
					animationIn="slideInLeft"
					animationOut="slideOutRight"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
						this.setModalVisible(!modalVisible);
					}}
				>
					<View style={{ flexDirection: 'row', flex: 1 }}>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<View
									style={{
										width: '100%',
										height: 200,
										backgroundColor: '#87CEFA',
										borderTopRightRadius: 20
									}}
								>
									<View
										style={{
											width: 120,
											height: 120,
											borderRadius: 60,
											backgroundColor: '#B0C4DE',
											marginTop: 20,
											marginLeft: 10
										}}
									>
										<Image
											source={require('../images/Sample_User_Icon.png')}
											style={{
												alignSelf: 'center',
												// height: 75,
												// marginBottom: 50,
												// resizeMode: 'contain',
												height: '100%',
												width: '100%'
											}}
										/>
									</View>
									<Text style={{ marginLeft: 10, marginTop: 20 }}>นาย เอกวิทย์ บุญบำเทิง</Text>
								</View>

								<View style={{ height: 529 }}>
									<TouchableOpacity
										onPress={() => this.props.navigation.navigate('Profile')}
										style={{
											textAlign: 'center',
											height: 50,
											width: '100%',
											backgroundColor: '#F8F8FF',
											borderColor: '#000',
											borderWidth: 1
										}}
									>
										<Text
											style={{
												fontWeight: 'bold',
												fontSize: 20,
												// marginBottom: 15,
												marginTop: 10,
												textAlign: 'center'
											}}
										>
											โปรไฟล์
										</Text>
									</TouchableOpacity>
								</View>

								<View
									style={{
										borderColor: '#000',
										borderTopWidth: 2
									}}
								/>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate('Login')}
									style={{
										textAlign: 'center',
										height: 50,
										width: '100%',
										backgroundColor: '#F8F8FF',
										borderBottomRightRadius: 20
									}}
								>
									<Text
										style={{
											fontWeight: 'bold',
											fontSize: 20,
											// marginBottom: 15,
											marginTop: 10,
											textAlign: 'center'
										}}
									>
										ออกจากระบบ
									</Text>
								</TouchableOpacity>
							</View>
						</View>

						<TouchableOpacity
							onPress={() => this.setModalVisible(!modalVisible)}
							style={styles.centeredView}
						/>
					</View>
				</Modal>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	centeredView: {
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
		justifyContent: 'center'
	},
	modalView: {
		backgroundColor: 'white',
		height: '100%',
		padding: 0,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
		width: '100%'
		// alignItems: 'center'
	},
	modalViewtest: {
		backgroundColor: 'white',
		padding: 35,
		alignItems: 'center'
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	buttonOpen: {
		backgroundColor: '#F194FF'
	},
	buttonClose: {
		backgroundColor: '#2196F3'
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalText: {
		fontWeight: 'bold',
		fontSize: 20,
		// marginBottom: 15,
		textAlign: 'center'
	}
});
