import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>The Game is Over!</Text>
			<Text style={styles.title}>Number of rounds: {props.rounds}</Text>
			<Text style={styles.title}>Number was: {props.userNumber}</Text>
			<View style={styles.btnContainer}>
				<Button 
				title="START NEW GAME!"
				onPress={props.onRestart}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		marginVertical: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		fontStyle: 'italic',
	},
	btnContainer: {
		width: 150,
		height: 50,
		marginTop: 50,
	},
});

export default GameOverScreen;