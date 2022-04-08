// Library
import React from 'react';
// Framework
import { Text, View } from 'react-native';

// Style
import { flatlistCpnStyle } from '../../styles/componentStyle/menu/menuFlatlistStyle';

const menuFlatlistCpn = ({ item }) => {
	return (
		<View style={flatlistCpnStyle.viewFLCard}>
            {/* layout ของชื่อใบงาน */}
            <View>
                <Text style={flatlistCpnStyle.textTitle}>
                    {item.picking_product_name}
                </Text>
            </View>

            {/* layout ของจำนวน */}
            <View style={flatlistCpnStyle.viewQuantity}>
                <View>
                    <Text style={flatlistCpnStyle.textActual}>จำนวน:</Text>
                </View>

                <View style={flatlistCpnStyle.viewNumber}>
                    <Text style={flatlistCpnStyle.textProductLogsQty}>
                        {item.product_logs_qty}
                    </Text>
                </View>

                <View>
                    <Text style={flatlistCpnStyle.textRequestQty}>
                        /{item.request_qty}
                    </Text>
                </View>

                <View style={{ marginLeft: 10 }}>
                    <Text style={flatlistCpnStyle.textPickingProductUnit}>
                        {item.picking_product_unit}
                    </Text>
                </View>
            </View>
        </View>
	);
};
export default menuFlatlistCpn;