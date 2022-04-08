// Library
import React from 'react';
// Framework
import axios from 'axios';
import {
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
const kettypeRefrech = { picking_type: 'sbm' };
const urlRefrech = `${baseUrl}erp_barcode/backend/picking/get_hd`;

export default class WMS4 extends React.Component {
	// Data
	state = {
		//
		modalVisible: false,
		persons: {},
		refreshing: false,
		secondData: {},
		//
		document: '',
		id: '',
		intext: '',
		pickingDate: '',
		remark: '',
		pickingStatus: ''
	};

	// Lifecycle
	componentDidMount() {
		axios.post(url, keytype).then((res) => {
			const persons = res.data.data.items;
			this.setState({ persons });
			console.log(persons);
		});
	}

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
			this.setState({ document: item.document });
			this.setState({ id: item.id });
			this.setState({ intext: item.intext });
			this.setState({ pickingDate: item.picking_date });
			this.setState({ remark: item.remark });
			this.setState({ pickingStatus: item.picking_status });
			// setBgcolor('#f5f5fa');
			// console.log(item.id);
			try {
				// setIsLoading(true);
				const secondresponse = await axios.post(urlInlist, { id: item.id });
				if (secondresponse.status === 200) {
					const secondData = secondresponse.data.data.items;
					this.setState({ secondData });
					// secondData(response.data.data.items);
					// setIsLoading(false);
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
			const responseRefrech = await axios.post(urlRefrech, kettypeRefrech);
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
									<View style={datalistModalStyle.viewLayoutText}>
										<MenuModalCpn
											inputDocument={this.state.document}
											inputRemark={this.state.remark}
											inputPickingDate={this.state.pickingDate}
										/>
									</View>

									<View style={datalistModalStyle.viewLayoutFlatlist}>
										<FlatList
											style={datalistModalStyle.flatlistCard}
											data={this.state.secondData}
											keyExtractor={(item) => item.id.toString()}
											renderItem={({ item }) => <MenuFlatlistCpn item={item} />}
										/>
									</View>

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
