import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Styles from '../global/styles';
import Input from '../components/Input';
import Number from '../components/Number';

const StartGame = props => {
	const [value, setValue] = useState('');
	const [confirm, setConfirm] = useState(false);
	const [number, setNumber] = useState();

	const numberInput = number => {
		return setValue(number.replace(/[^0-9]/g, ''))
	}

	const resetInputHandler = () => {
		setValue('');
		setConfirm(false);
		Keyboard.dismiss();
	}

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(value)
		if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber>99){
			Alert.alert('Invalid number', 'Number must be between from 1 to 99.',[{text:'Okay', style:'destructive', onPress: resetInputHandler}])
			return;
		}
		setConfirm(true);
		setValue('');
		Keyboard.dismiss();
		setNumber(chosenNumber);
	}

	let confirmOutPut;

	if(confirm){
	confirmOutPut = (
		<Card style={styles.summaryContainer}>
			<Text>You selected</Text>
			<Number>{number}</Number>
			<View style={styles.btn}>
				<Button title="START GAME" onPress={()=>props.onStartGame(number)} />
			</View>
		</Card>
	)}

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a new Game!</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<Input 
				style={styles.input} 
				blurOnSubmit 
				autoCapitalize="none"
				keyboardType="number-pad"
				maxlength={2}
				onChangeText={numberInput}
				value={value}
				/>
				<View style={styles.btnContainer}>
					<View style={styles.btn}>
						<Button title="Reset" onPress={resetInputHandler} color={Styles.secondary}/>
					</View>
					<View style={styles.btn}>
						<Button title="Confirm" onPress={confirmInputHandler} color={Styles.primary}/>
					</View>
				</View>
			</Card>
			{confirmOutPut}
		</View>
	)
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	btnContainer: {
		flexDirection: "row",
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		paddingVertical: 25,
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	btn: {
		width: 100,
		marginVertical: 20,
	},
	input: {
		width: 50,
		paddingVertical: 30,
		textAlign: 'center',
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
});

export default StartGame;