import React from 'react';
import { View , Text, StyleSheet } from 'react-native';
import Styles from '../global/styles';

const Number = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{props.children}</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: Styles.secondary,
		padding: 10,
		borderRadius: 10,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	number: {
		color: Styles.secondary,
		fontSize: 22,
	}
});

export default Number;