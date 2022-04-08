// Library
import React from 'react';
// Framework
import axios from 'axios';
import {
	ActivityIndicator,
	Alert,
	BackHandler,
	FlatList,
	Modal,
	Picker,
	Pressable,
	RefreshControl,
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
// Component
import HeadbarCpn from '../../../components/headbar/headbarCpn';
import MenuCardCpn from '../../../components/menus/menuCardCpn';
import MenuModalCpn from '../../../components/menus/menuModalCpn';
import MenuFlatlistCpn from '../../../components/menus/menuFlatlistCpn';
// Style
import { datalistStyle } from '../../../styles/datalistStyle';
import { datalistModalStyle } from '../../../styles/modal/datalistModalStyle';

// Page
const baseUrl = 'http://192.168.1.25/';
const keytype = { picking_type: 'pms' };
const url = `${baseUrl}erp_barcode/backend/picking/get_hd`;
const urlInlist = `${baseUrl}erp_barcode/backend/picking/get_dt`;
// Refresh
const keytypeRefrech = { picking_type: 'sbm' };

export default class PMS1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//
			modalVisible: false,
			persons: {},
			refreshing: false,
			secondData: {},
			//
			bgColor: '',
			document: '',
			id: '',
			intext: '',
			pickingDate: '',
			remark: '',
			pickingStatus: '',
			//
			isLoading: true
		};
	}

	// Lifecycle
	componentDidMount() {
		axios.post(url, keytype).then((res) => {
			const persons = res.data.data.items;
			this.setState({ persons });
			console.log(persons);
		});
	}

	// Loading

	// Modal
	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	};

	// onPress
	onPressItem = async (item) => {
		// if (item.picking_status == 2) {
		// 	Alert.alert('คำเตือน', 'ใบงาน กำลังดำเนินการเช็คสินค้าอยู่', [
		// 		{ text: 'ตกลง', onPress: () => console.log('ตกลง') }
		// 	]);
		// }
		if (true) {
			this.setModalVisible(true);
			this.setState({ bgColor: '#f5f5fa' });
			this.setState({ document: item.document });
			this.setState({ id: item.id });
			this.setState({ intext: item.intext });
			this.setState({ pickingDate: item.picking_date });
			this.setState({ remark: item.remark });
			this.setState({ pickingStatus: item.picking_status });
			try {
				this.setState({ isLoading: true });
				const secondresponse = await axios.post(urlInlist, { id: item.id });
				if (secondresponse.status === 200) {
					const secondData = secondresponse.data.data.items;
					this.setState({ secondData });
					// secondData(response.data.data.items);
					this.setState({ isLoading: false });
					console.log(secondresponse.data.data.items);
					return;
				} else {
					throw new Error('Failed to fetch Data');
				}
			} catch (error) {
				console.error(error);
			}
		} else {
		}
	};
	onPressSubmit = () => {
		this.setModalVisible(false);
		this.props.navigation.navigate('Scanbarcode', {
			inputBgColor: this.state.bgColor,
			inputDocument: this.state.document,
			inputRemark: this.state.remark,
			inputPickingDate: this.state.pickingDate,
			secondData: this.state.secondData
		});
	};
	onPressCancel = () => {
		this.setModalVisible(false);
	};

	// Refresh
	wait = (timeout) => {
		return new Promise((resolve) => setTimeout(resolve, timeout));
	};
	onRefresh = async () => {
		this.setState({ refreshing: true });
		try {
			const responseRefrech = await axios.post(url, keytypeRefrech);
			if (responseRefrech.status === 200) {
				const persons = responseRefrech.data.data.items;
				this.setState({ persons });
				console.log(responseRefrech.data.data.items);
				this.wait(0).then(() => {
					this.setState({ refreshing: false });
				});
			} else {
				throw new Error('Failed to fetch Data');
			}
		} catch (error) {
			console.error(error);
		}
	};

	render() {
		const { modalVisible } = this.state;
		return (
			<View style={{ flex: 1 }}>
				<HeadbarCpn
					onPressBack={() => this.props.navigation.goBack()}
					onPressDetail={() => this.props.navigation.navigate('Menu')}
					onPressUser={() => this.props.navigation.navigate('Profile')}
					Title={'รับสินค้า'}
				/>
				<View style={{ height: 650 }}>
					<SafeAreaView style={{ flex: 1 }}>
						<View style={{ backgroundColor: '#f5f5fa' }}>
							{/* แทบด้านบน แบบปุ่ม */}
							<View style={datalistStyle.viewButtonBar}>
								<View>
									<TouchableOpacity style={datalistStyle.viewButton}>
										<Text style={datalistStyle.textButton}>ใบสั่งซื้อ</Text>
									</TouchableOpacity>
								</View>
							</View>
							{/* แทบใส่ข้อความ */}
							<View style={datalistStyle.viewInputBar}>
								<TextInput placeholder="Scan code" style={datalistStyle.textInputScan} maxLength={18} />
							</View>
							{/* เส้นขั้น */}
							<View style={datalistStyle.viewHr} />
							{/* Flatlist */}
							<View style={{ margin: 10 }}>
								<FlatList
									data={this.state.persons}
									keyExtractor={(item) => item.id.toString()}
									refreshControl={
										<RefreshControl
											colors={[ '#00FFFF', '#0000FF' ]}
											refreshing={this.state.refreshing}
											onRefresh={this.onRefresh.bind(this)}
										/>
									}
									renderItem={({ item }) => (
										<TouchableOpacity
											style={datalistStyle.toCard}
											onPress={() => this.onPressItem(item)}
										>
											<MenuCardCpn item={item} />
										</TouchableOpacity>
									)}
								/>
							</View>
						</View>

						<Modal
							animationType="none"
							transparent={true}
							visible={modalVisible}
							onRequestClose={() => {
								this.setModalVisible(!modalVisible);
							}}
						>
							<View style={datalistModalStyle.container}>
								<View style={datalistModalStyle.viewModal}>
									{/* layout ของ Component ข้อมูล */}
									<View style={datalistModalStyle.viewLayoutText}>
										<MenuModalCpn
											inputDocument={this.state.document}
											inputRemark={this.state.remark}
											inputPickingDate={this.state.pickingDate}
										/>
									</View>

									{/* layout ของ Flatlist */}
									<View style={datalistModalStyle.viewLayoutFlatlist}>
										{(() => {
											if (this.state.isLoading == true) {
												return (
													<View style={datalistModalStyle.viewLoading}>
														<View style={datalistModalStyle.viewLayoutLoading}>
															{this.state.isLoading && (
																<ActivityIndicator color="#0000ff" size="large" />
															)}
														</View>
													</View>
												);
											}
											return (
												<FlatList
													style={datalistModalStyle.flatlistCard}
													data={this.state.secondData}
													keyExtractor={(item) => item.id.toString()}
													renderItem={({ item }) => <MenuFlatlistCpn item={item} />}
												/>
											);
										})()}
									</View>

									{/* layout ของปุ่มยืนยันและยกเลิก */}
									<View style={{ flex: 0.75, flexDirection: 'row' }}>
										<View>
											<TouchableOpacity
												onPress={() => this.onPressSubmit()}
												style={datalistModalStyle.toSubmit}
											>
												<Text style={datalistModalStyle.textSubmit}>ยืนยัน</Text>
											</TouchableOpacity>
										</View>

										<View>
											<TouchableOpacity
												onPress={() => this.onPressCancel()}
												style={datalistModalStyle.toCancel}
											>
												<Text style={datalistModalStyle.textcancel}>ยกเลิก</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						</Modal>
					</SafeAreaView>
				</View>
			</View>
		);
	}
}
