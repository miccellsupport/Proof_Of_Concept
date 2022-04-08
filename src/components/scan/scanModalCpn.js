// Library
import React from 'react';
// Framework
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
	faClipboardList,
	faExclamationCircle,
	faPlus,
	faTrash,
	faInfoCircle,
	faBarcode,
	faCheckCircle,
	faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
// Style
import { scanModalStyle } from '../../styles/componentStyle/scan/scanModalStyle';

const scanModal = ({
	inputItemCode,
	inputLot,
	inputProductLogsQty,
	inputPickingProductName,
	inputPickingRequestQty,
	onPressCancel,
	onPressSubmit
}) => {
	return (
		<View style={scanModalStyle.viewBackground}>
			<View style={scanModalStyle.viewLayout}>
				<ScrollView>
					{/* layout ของชื่อหัวข้อ */}
					<View>
						<Text style={scanModalStyle.textTitle}>รายละเอียด</Text>
					</View>

					{/* layout ของข้อมูล */}
					<View style={scanModalStyle.view}>
						{/* layout ของข้อมูลชื่อสินค้า */}
						<View style={scanModalStyle.viewLayoutData}>
							<View style={scanModalStyle.viewProductName}>
								<Text style={scanModalStyle.textProductName}>ชื่อสินค้า</Text>
							</View>

							<ScrollView style={scanModalStyle.svProductNameData}>
								<Text style={scanModalStyle.textProductNameData}>{inputPickingProductName}</Text>
							</ScrollView>
						</View>

						{/* layout ของข้อมูลโค้ด */}
						<View style={scanModalStyle.viewLayoutData}>
							<View style={scanModalStyle.viewItemCode}>
								<Text style={scanModalStyle.textItemCode}>Code</Text>
							</View>

							<View style={scanModalStyle.viewItemCodeData}>
								<Text style={scanModalStyle.textItemCodeData}>{inputItemCode}</Text>
							</View>
						</View>

						{/* layout ของข้อมูลจำนวนทั้งหมด */}
						<View style={scanModalStyle.viewLayoutDataPlus}>
							<View style={scanModalStyle.viewLogsQty}>
								<Text style={scanModalStyle.textLogsQty}>จำนวนทั้งหมด</Text>
							</View>

							<View style={scanModalStyle.viewLogsQtyData}>
								<Text style={scanModalStyle.textLogsQtyData}>{inputProductLogsQty}</Text>

								<Text style={scanModalStyle.textLogsQtyDataplus}>/{inputPickingRequestQty}</Text>
							</View>

							<TouchableOpacity>
								<View style={scanModalStyle.viewCreateLot}>
									<View style={{ flexDirection: 'column' }}>
										<View>
											<FontAwesomeIcon icon={faPlus} style={scanModalStyle.iconCreateLot} />
										</View>
									</View>

									<Text style={scanModalStyle.textCreateLot}>Create Lot</Text>
								</View>
							</TouchableOpacity>
						</View>

						<View style={scanModalStyle.viewHr} />

						{/* layout ของข้อมูลใน Flatlist */}
						<View style={scanModalStyle.viewLayoutLotQty}>
							<ScrollView style={scanModalStyle.svLayoutLotQty}>
								<View style={scanModalStyle.viewAllData}>
									<View style={scanModalStyle.viewLot}>
										<Text style={scanModalStyle.textLot}>Lot:</Text>
									</View>

									<View style={scanModalStyle.viewLotInput}>
										<TextInput style={scanModalStyle.tiLot}>{inputLot}</TextInput>
									</View>

									<View style={scanModalStyle.viewQty}>
										<Text style={scanModalStyle.textQty}>Qty:</Text>
									</View>

									<View style={scanModalStyle.viewQtyInput}>
										<TextInput style={scanModalStyle.itQty}>1</TextInput>
									</View>

									<View style={scanModalStyle.viewIconDelete}>
										<TouchableOpacity>
											<FontAwesomeIcon icon={faTrash} style={scanModalStyle.iconTrash} />
										</TouchableOpacity>
									</View>
								</View>
							</ScrollView>
						</View>

						<View style={scanModalStyle.viewHr} />

						{/* layout ของปุ่มยืนยันและยกเลิก */}
						<View style={scanModalStyle.viewButton}>
							<View>
								<TouchableOpacity onPress={() => onPressSubmit()} style={scanModalStyle.toSubmit}>
									<Text style={scanModalStyle.textButtonSubmit}>ยืนยัน</Text>
								</TouchableOpacity>
							</View>

							<View>
								<TouchableOpacity onPress={() => onPressCancel()} style={scanModalStyle.toCancel}>
									<Text style={scanModalStyle.textButtonCancel}>ยกเลิก</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};
export default scanModal;
