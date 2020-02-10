import React,{ useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { uuid } from 'uuidv4'; 
import ItemInput from './components/ItemInput';
import ListItems from './components/ListItems';


function App() {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false)
 
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

  return (
    <View style={styles.container}>
      <Button title="press to add item" onPress={() => setOpenModal(true)} />
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});

export default App;