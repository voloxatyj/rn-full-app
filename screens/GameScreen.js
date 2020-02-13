import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Number from '../components/Number';
import Card from '../components/Card';


const getRndNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNumb = Math.floor(Math.random() * (max -min)) + min;
		if( rndNumb === exclude ) {
			return getRndNumber(min, max, exclude)
		} else {
			return rndNumb;
		}
}

const GameScreen = props => {
	const [guessNumber, setGuessNumber] = useState(getRndNumber(1,100,userNumber))
	const [rounds, setRounds] = useState(0);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const { onGameOver, userNumber } = props;


	useEffect(() => {
		if ( guessNumber === userNumber) {
			onGameOver(rounds); 
		}
	}, [ guessNumber, onGameOver, userNumber ]);

	const nextGuessHandler = direction => {
		if (direction == "lower" && guessNumber < userNumber || (direction == "greater" && guessNumber > userNumber)) {
			Alert.alert('Dont\' lie!', 'You know that this not true', [{text:'Sorry!', style: 'cancel'} ])
			return;
		}
		if(direction === 'lower') {
			currentHigh.current = guessNumber;
		} else {
			currentLow.current = guessNumber;
		}
		const nextNumber = getRndNumber(currentLow.current, currentHigh.current, guessNumber);
		setGuessNumber(nextNumber);
		setRounds(rounds=>rounds+1);
	}
	
	return (
		<View style={styles.screen}>
			<Text>Opponent’s choice</Text>
			<Number>{guessNumber}</Number>
			<Card style={styles.btnContainer}>
				<Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')} />
				<Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
				</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
		height: 80,
	},
});

export default GameScreen;