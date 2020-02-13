import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../global/styles';

const Header = props => {
	return(
		<View style={styles.header}> 
			<Text style={styles.title}>{props.title}</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		backgroundColor: Styles.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: 'black',
		fontSize: 25,
		fontStyle: 'italic',
		fontWeight: 'bold',
	},
});

export default Header;