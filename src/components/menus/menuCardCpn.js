// Library
import React from 'react';
// Framework
import { Text, View } from 'react-native';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
// Style
import { cardCpnStyle } from '../../styles/componentStyle/menu/menuCardStyle';

const CardData = ({ item }) => {
	return (
		// layout ของการ์ด
		<View style={cardCpnStyle.viewLayoutCard}>
			{/* layout ของแทบชื่อ */}
			<View style={cardCpnStyle.viewFirstRow}>
				{/*  */}
				<Text style={cardCpnStyle.textType}>ประเภท : </Text>

				<Text style={cardCpnStyle.textSubType}>ใบสั่งขาย</Text>

				<View style={cardCpnStyle.viewStatus}>
					<View>
                        {item.picking_status == 1 ? (<Text style={[cardCpnStyle.textStatus,{color: '#1E90FF'}]}>รอดำเนินการ</Text>) : null}
					</View>

					<View>
						{item.picking_status == 2 ? (<Text style={[cardCpnStyle.textStatus,{color: '#FF0000'}]}>กำลังดำเนินการ</Text>) : null}
					</View>

					<View>
						{item.picking_status == 6 ? (<Text style={[cardCpnStyle.textStatus,{color: '#FF8C00'}]}>พักใบงาน</Text>) : null}
					</View>

					<View>
						{item.picking_status == 8 ? (<Text style={[cardCpnStyle.textStatus,{color: '#006400'}]}>เสร็จแล้ว</Text>) : null}
					</View>

					<View>
						{item.picking_status == 9 ? (<Text style={[cardCpnStyle.textStatus,{color: '#8B0000'}]}>ยกเลิก</Text>) : null}
					</View>
				</View>
			</View>

			{/* layout ของของมูลใบงาน */}
			<View style={cardCpnStyle.viewSecondRow}>
				<View style={cardCpnStyle.viewIcon}>
					<FontAwesomeIcon icon={faClipboardList} color={'orange'} size={25} />
				</View>

				<View style={cardCpnStyle.viewDocument}>
					<Text style={cardCpnStyle.textDocument}>{item.document}</Text>
				</View>

				<View style={cardCpnStyle.viewSubStatus}>
					<View>
						{item.docuStatus == 'N' ? (<Text style={[cardCpnStyle.textSubStatus,{color: '#7CFC00'}]}>N</Text>) : null}
					</View>

					<View>
						{item.docuStatus == 'P' ? (<Text style={[cardCpnStyle.textSubStatus,{color: '#FFD700'}]}>P</Text>) : null}
					</View>

					<View>
						{item.docuStatus == 'Y' ? (<Text style={[cardCpnStyle.textSubStatus,{color: '#F08080'}]}>A</Text>) : null}
					</View>
				</View>
			</View>

			{/* layout ของวันที่เอกสาร */}
			<View style={cardCpnStyle.viewThirdRow}>
				<View>
					<Text style={cardCpnStyle.textDate}>วันที่เอกสาร :</Text>
				</View>

				<View style={cardCpnStyle.viewDate}>
					<Text style={cardCpnStyle.textSubDate}>{item.picking_date}</Text>
				</View>
			</View>

			{/* layout ของข้อมูลลูกค้า */}
			<View style={cardCpnStyle.viewFourthRow}>
				<View>
					<Text style={cardCpnStyle.textRemark}>ลูกค้า :</Text>
				</View>

				<View style={cardCpnStyle.viewRemark}>
					<Text style={cardCpnStyle.textSubRemark}>{item.remark}</Text>
				</View>
			</View>
		</View>
	);
};
export default CardData;
