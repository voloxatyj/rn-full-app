import React,{useState} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';


const ItemInput = props => {
	const [text, setText] = useState('');
	
	const handleChangeText = text => setText(text);

	return (
		<View style={styles.inputContainer}>
			<TextInput 
				style={styles.input}
				placeholder="please enter item name"
				onChangeText={handleChangeText}
				value={text}
			/>
			<Button title="add" onPress={props.handleAddItem.bind(this,text)}/>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		padding: 10,
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})

export default ItemInput;