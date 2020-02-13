import React,{ useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import { uuid } from 'uuidv4'; 
import ItemInput from './components/ItemInput';
import ListItems from './components/ListItems';
import Game from './Game';
import { MaterialIcons } from '@expo/vector-icons';


function App() {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openGame, setOpenGame] = useState(false);
 
  const handleAddItem = text => {
    setItems(prevText => [...prevText, {id:uuid(),value: text}])
    setOpenModal(false);
  }

  const handleOnDelete = id => {
  setItems(prevItems => { 
    return prevItems.filter((item) => item.id !== id);    
    });
  }

  const cancelBtn = () => {
    setOpenModal(false);
  }
  
  let content;
  const openWindowGame = () => {
    openGame === false ? setOpenGame(true) : setOpenGame(false)
  }

  if (openGame) {
      content = <Game />
    }

  return (
    <View style={styles.container} >
      <Button title="press to add item" onPress={() => setOpenModal(true)} />
      <View style={styles.btnOpenGame}>
        <MaterialIcons name="gamepad" size={40} onPress={openWindowGame} />
      </View>
      <View>
        <ItemInput 
        handleAddItem={handleAddItem}
        state={openModal}
        cancelBtn={cancelBtn}
        />
      </View>
        <FlatList 
          data={items}
          keyExtractor={item => item.id}
          renderItem={item => 
            <ListItems 
              id={item.item.id} 
              text={item.item.value} 
              handleOnDelete={handleOnDelete}
            />
          }
        />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  btnOpenGame: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default App;