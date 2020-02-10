import React,{useState} from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';


const ItemInput = props => {
	const [text, setText] = useState('');
	
	const handleChangeText = text => setText(text);

	const onAddItem = () => {
		props.handleAddItem(text);
		setText('');
	}

	return (
		<Modal visible={props.state} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput 
					style={styles.input}
					placeholder="please enter item name"
					onChangeText={handleChangeText}
					value={text}
				/>
				<View style={styles.btnContainer}>
					<View style={styles.btn}>
						<Button title="add" onPress={onAddItem}/>
					</View>
					<View style={styles.btn}>
						<Button title="cancel" color="red" onPress={props.cancelBtn} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	input: {
		padding: 10,
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
		marginBottom: 10,
	},
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '80%',
	},
	btn: {
		width: '40%',
	},
})

export default ItemInput;