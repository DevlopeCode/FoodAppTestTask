import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const CustomFilterDropdown = ({
  options,
  onSelect,
  selected,
  specialties,
}: {
  options: any;
  onSelect: any;
  selected: any;
  specialties: string;
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option: any) => {
    onSelect(option);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={{fontSize: 12}}>{specialties}</Text>

        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}>
          <Text numberOfLines={1} style={styles.selectedOption}>
            {selected ? selected : 'Select'}
          </Text>
        </TouchableOpacity>
      </View>

      {isDropdownOpen && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleOptionSelect(item)}>
                <Text style={styles.optionText} numberOfLines={1}>
                  {item.lable ? item.lable : item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000000,
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
    width: 60,
  },
  selectedOption: {
    fontSize: 10,
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    maxHeight: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  optionButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    zIndex: 9999999,
  },
});

export default CustomFilterDropdown;
