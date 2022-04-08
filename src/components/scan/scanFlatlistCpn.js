// Library
import React from 'react';
// Framework
import { Text, View } from 'react-native';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// Style
import { scanFlatlisttyle } from '../../styles/componentStyle/scan/scanFlatlistStyle';

const scanFlatlistCpn = ({ item }) => {
	return (
		<View style={scanFlatlisttyle.viewBody}>
			{/* layout ของชื่อข้อมูล */}
			<View style={scanFlatlisttyle.viewProduct}>
				<FontAwesomeIcon icon={faClipboardList} color={'orange'} size={25} />

				<Text style={scanFlatlisttyle.textProduct}>สินค้า :</Text>

				<Text style={scanFlatlisttyle.textProductData}>{item.picking_product_name}</Text>
			</View>

			{/* layout ของข้อมูลโค้ด */}
			<View style={scanFlatlisttyle.view}>
				<Text style={scanFlatlisttyle.textItimCode}>Code :</Text>

				<Text style={scanFlatlisttyle.textItemCodeData}>{item.item_code}</Text>
			</View>

			{/* layout ของข้อมูลบาร์โค้ด */}
			<View style={scanFlatlisttyle.view}>
				<Text style={scanFlatlisttyle.textPickingBarcode}>Barcode :</Text>

				<Text style={scanFlatlisttyle.textPickingBarcodeData}>{item.picking_barcode}</Text>
			</View>

			{/* layout ของข้อมูลล๊อต */}
			<View style={scanFlatlisttyle.view}>
				<Text style={scanFlatlisttyle.textPickingLot}>Lot :</Text>

				<Text style={scanFlatlisttyle.textPickingLotData}>{item.picking_lot}</Text>
			</View>

			{/* layout ของข้อมูลซีเรียล */}
			<View style={scanFlatlisttyle.view}>
				<Text style={scanFlatlisttyle.textPickingSerialNumber}>Serial :</Text>

				<Text style={scanFlatlisttyle.textPickingSerialNumberData}>{item.picking_serial_number}</Text>
			</View>

			{/* layout ของข้อมูลที่อยู่ */}
			<View style={scanFlatlisttyle.view}>
				<Text style={scanFlatlisttyle.textPickingLocationCode}>Location :</Text>

				<Text style={scanFlatlisttyle.textPickingLocationCodeData}>{item.picking_location_code}</Text>
			</View>

			{/* layout ของข้อมูลจำนวน */}
			<View style={scanFlatlisttyle.viewTextLayout}>
				<View style={scanFlatlisttyle.viewAllTextLayout}>
					<View style={scanFlatlisttyle.viewSpace} />

					<View style={scanFlatlisttyle.viewText}>
						<View style={scanFlatlisttyle.viewLayout}>
							<View style={scanFlatlisttyle.viewZone}>
								<View style={scanFlatlisttyle.viewNum}>
									<Text style={scanFlatlisttyle.textNum}>จำนวน :</Text>
								</View>

								<View style={scanFlatlisttyle.viewId}>
									<View style={scanFlatlisttyle.viewIdSpace}>
										<Text style={scanFlatlisttyle.textId}>
											{/* {setConstqty(DataInsbm, DataIdInSend, , DataPLQInSend)} */}
											{item.id}.000
										</Text>
									</View>

									<View style={scanFlatlisttyle.viewPickingRequestQty}>
										<Text style={scanFlatlisttyle.textPickingRequestQty}>
											/{item.picking_request_qty}
										</Text>
									</View>
								</View>

								<View style={scanFlatlisttyle.viewPickingProductUnit}>
									<Text style={scanFlatlisttyle.textPickingProductUnit}>
										{item.picking_product_unit}
									</Text>
								</View>

								<View style={scanFlatlisttyle.viewIcon}>
									<FontAwesomeIcon icon={faInfoCircle} />
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};
export default scanFlatlistCpn;
