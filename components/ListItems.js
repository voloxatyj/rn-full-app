import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItems = props => {
	return (
			<TouchableOpacity activeOpacity={0.8} onPress={props.handleOnDelete.bind(this, props.id)}>
				<View style={styles.listItem}>
					<Text>{props.text}</Text>
				</View>
			</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
	},
})

export default ListItems;