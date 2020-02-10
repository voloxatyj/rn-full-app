import React,{ useState } from 'react';
import { StyleSheet, Text, View, VirtualizedListsrr, FlatList } from 'react-native';
import { uuid } from 'uuidv4'; 
import ItemInput from './components/ItemInput';
import ListItems from './components/ListItems';


function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = text => {
    setItems(prevText => [...prevText, {id:uuid(),value: text}])
  }

  return (
    <View style={styles.container}>
      <View>
        <ItemInput 
        handleAddItem={handleAddItem}
        />
      </View>
        <FlatList 
          data={items}
          keyExtractor={item => item.id}
          renderItem ={ item => <ListItems text={item.item.value} />
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