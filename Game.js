import React,{useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

 function Game() {
	 const [userNumber, setUserNumber] = useState();
	 const [rounds, setRounds] = useState(0);

	 const startGame = selectedNum => {
		setUserNumber(selectedNum);
	 };

	 const configureNewGame = () => {
		 setRounds(0);
		 setUserNumber(null);
	 }

	 const gameOver = numOfRounds => {
		 setRounds(numOfRounds);
	 }

	 let content = <StartGameScreen onStartGame={startGame} />

	 if (userNumber && rounds <=0) {
		 content = <GameScreen
		 userNumber={userNumber}
		 onGameOver={gameOver}
		 />
	 } else if (rounds > 0) {
		 content = <GameOverScreen
			rounds={rounds}
			userNumber={userNumber}
			onRestart={configureNewGame}
			/>;
	 }

	return (
		<View style={styles.screen}>
			<Header title="Guess a Number" />
			{content}
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default Game;