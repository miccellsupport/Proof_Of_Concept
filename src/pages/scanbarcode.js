// Library
import React from 'react';
// Framework
import {
	Alert,
	BackHandler,
	FlatList,
	KeyboardAvoidingView,
	Modal,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
// Component
import HeadbarCpn from '../components/headbar/headbarCpn';
import ScanButtonCpn from '../components/scan/scanButtonCpn';
import ScanFlatlistCpn from '../components/scan/scanFlatlistCpn';
import ScanLayoutCpn from '../components/scan/scanLayoutCpn';
import ScanModalCpn from '../components/scan/scanModalCpn';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
// Style
import { scanbarcodeStyle } from '../styles/scan/scanbarcodeStyle';

export default class Scanbarcode extends React.Component {
	// Data
	state = {
		// Modal
		modalVisible: false,
		// DataPress
		itemCode: '',
		lot: '',
		productLogsQty: '',
		pickingProductName: '',
		pickingRequestQty: '',
		bgColor: '',
		test: '',
		text: ''
	};

	// Modal
	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	};
	setModalSubmit = () => {
		this.setModalVisible(false);
	};
	setModalCancel = () => {
		this.setModalVisible(false);
	};

	// onPress
	onPressItem = (item) => {
		if (true) {
			this.setModalVisible(true);
			this.setState({ itemCode: item.item_code });
			this.setState({ lot: item.lot });
			this.setState({ productLogsQty: item.product_logs_qty });
			this.setState({ pickingProductName: item.picking_product_name });
			this.setState({ pickingRequestQty: item.picking_request_qty });
		} else {
		}
	};
	onPressPopupSaveOpen = () => {
		Alert.alert('Hold on!', 'Are you sure you want to go back?', [
			{
				text: 'Cancel',
				onPress: () => null,
				style: 'cancel'
			},
			{ text: 'YES', onPress: () => this.props.navigation.goBack() }
		]);
		return true;
	};
	onPressPopupBreakOpen = () => {
		Alert.alert('Hold on!', 'Are you sure you want to go back?', [
			{
				text: 'Cancel',
				onPress: () => null,
				style: 'cancel'
			},
			{ text: 'YES', onPress: () => this.props.navigation.goBack() }
		]);
		return true;
	};
	onPressPopupCancelOpen = () => {
		Alert.alert('Hold on!', 'Are you sure you want to go back?', [
			{
				text: 'Cancel',
				onPress: () => null,
				style: 'cancel'
			},
			{ text: 'YES', onPress: () => this.props.navigation.goBack() }
		]);
		return true;
	};

	onPressTest = () => {
		this.setState({ bgColor: '#fad8d4' });
	};

	backAction = () => {
		Alert.alert('Hold on!', 'Are you sure you want to go back?', [
			{
				text: 'Cancel',
				onPress: () => null,
				style: 'cancel'
			},
			{ text: 'YES', onPress: () => this.props.navigation.goBack() }
		]);
		return true;
	};

	// Lifecycle
	componentDidMount() {
		this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.backAction);
	}
	componentWillUnmount() {
		this.backHandler.remove();
	}

	render() {
		const { inputBgColor, inputDocument, inputPickingDate, inputRemark, secondData } = this.props.route.params;
		const { modalVisible } = this.state;
		return (
			<View
				style={[
					scanbarcodeStyle.viewBody,
					{ backgroundColor: this.state.bgColor == null ? inputBgColor : this.state.bgColor }
				]}
			>
				<HeadbarCpn
					onPressBack={() => this.props.navigation.goBack()}
					onPressDetail={() => this.props.navigation.navigate('Menu')}
					onPressUser={() => this.props.navigation.navigate('Profile')}
					Title={'สำนักงานใหญ่'}
				/>
				<View style={scanbarcodeStyle.content}>
					<KeyboardAvoidingView behavior="position">
						{/* Layout */}
						<ScanLayoutCpn
							inputDocument={JSON.stringify(inputDocument)}
							inputPickingDate={JSON.stringify(inputPickingDate)}
							inputRemark={JSON.stringify(inputRemark)}
						/>

						{/* Input Scanbarcode */}
						<View style={scanbarcodeStyle.viewInput}>
							<FontAwesomeIcon icon={faBarcode} size={70} style={{ marginRight: 5 }} />
							<TextInput
								onChangeText={(val) => {
									// this.setState({ text: val});
									console.log(val);
									// console.log(inputid);
									// try {
									// 	const KeyPost = { barcode: val, id: inputid, picking_id: '' };
									// 	const responsethree = await axios.post(urlBarCode, KeyPost);
									// 	if (responsethree.status === 200) {
									// 		setDataInSend(responsethree.data.data.items);
									// 		setDataIdInSend(responsethree.data.data.items.id);
									// 		setDataInTestSand(responsethree.data.data.items.data);
									// 		setDataPLQInSend(responsethree.data.data.items.data[0].product_logs_qty);
									// 		console.log(responsethree.data.data.items);
									// 		setinputBarcode('');
									// 		if (responsethree.data.data.items.id === null) {
									// 			setBgcolor('#fad8d4');
									// 			console.log('บาร์โค้ดผิด');
									// 		} else {
									// 			setBgcolor('#d4fad8');
									// 			console.log('บาร์โค้ดถูก');
									// 		}
									// 	}
									// } catch (error) {
									// 	console.error(error);
									// }
								}}
								placeholder="Scan Code"
								style={scanbarcodeStyle.textinput}
								value={this.state.text}
							/>
						</View>

						{/* Button */}
						<ScanButtonCpn
							onPressBreak={() => this.onPressPopupBreakOpen()}
							onPressCancel={() => this.onPressPopupCancelOpen()}
							onPressSave={() => this.onPressPopupSaveOpen()}
							onPressTest={() => this.onPressTest()}
						/>

						{/* FlatList */}
						<View style={scanbarcodeStyle.viewFlatlist}>
							<FlatList
								style={scanbarcodeStyle.flatlistData}
								data={secondData}
								keyExtractor={(item) => item.id.toString()}
								renderItem={({ item }) => (
									<TouchableOpacity onPress={() => this.onPressItem(item)}>
										<ScanFlatlistCpn item={item} />
									</TouchableOpacity>
								)}
							/>
						</View>
					</KeyboardAvoidingView>
					{/* Modal */}
					<Modal
						animationType="none"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							this.setModalVisible(!modalVisible);
						}}
					>
						<ScanModalCpn
							inputItemCode={this.state.itemCode}
							inputLot={this.state.lot}
							inputProductLogsQty={this.state.productLogsQty}
							inputPickingProductName={this.state.pickingProductName}
							inputPickingRequestQty={this.state.pickingRequestQty}
							onPressCancel={() => this.setModalCancel()}
							onPressSubmit={() => this.setModalSubmit()}
						/>
					</Modal>
				</View>
			</View>
		);
	}
}
