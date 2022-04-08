// Library
import React from 'react';
// Framework
import { Image, Text, TouchableOpacity, View } from 'react-native';
// Style
import { loginStyles } from '../styles/loginStyle';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// set number of pins
			passcode: [ '', '', '', '', '' ]
		};
	}
	// Add pincode
	onPressNumber = (num) => {
		let tempCode = this.state.passcode;
		for (var i = 0; i < tempCode.length; i++) {
			if (tempCode[i] == '') {
				tempCode[i] = num;
				break;
			} else {
				continue;
			}
		}
		this.setState({ passcode: tempCode });
	};
	// Delete pincode
	onPressDelete = () => {
		let tempCode = this.state.passcode;
		for (var i = tempCode.length - 1; i >= 0; i--) {
			if (tempCode[i] != '') {
				tempCode[i] = '';
				break;
			} else {
				continue;
			}
		}
		this.setState({ passcode: tempCode });
	};
	render() {
		// Set number pincode
		let numbers = [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
			{ id: 4 },
			{ id: 5 },
			{ id: 6 },
			{ id: 7 },
			{ id: 8 },
			{ id: 9 },
			{ id: '' },
			{ id: 0 }
		];
		return (
			<View style={loginStyles.container}>
				<View style={loginStyles.content}>
					{/* Logo */}
					<Image source={require('../images/LogoMiccell.png')} style={loginStyles.logo} />
					{/* Title */}
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
						<Text style={loginStyles.headingText}>กรุณาป้อน PIN เพื่อยืนยัน</Text>
					</TouchableOpacity>
					{/* pincode enable and disable */}
					<View style={loginStyles.pinCode}>
						{this.state.passcode.map((p) => {
							let style = p != '' ? loginStyles.enablePin : loginStyles.disablePin;
							return <View style={style} />;
						})}
					</View>
				</View>
				{/* pincode number */}
				<View style={loginStyles.pinNumber}>
					{numbers.map((num, index) => {
						return (
							<TouchableOpacity
								style={loginStyles.number}
								key={index}
								onPress={() => this.onPressNumber(num.id)}
							>
								<Text style={loginStyles.numberText}>{num.id}</Text>
							</TouchableOpacity>
						);
					})}
					{/* pincode delete */}
					<TouchableOpacity style={loginStyles.number} onPress={() => this.onPressDelete()}>
						<FontAwesomeIcon icon={faBackspace} size={40} color={'#fff'} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
