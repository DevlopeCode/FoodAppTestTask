/* eslint-disable react/react-in-jsx-scope */
import {View, TextInput, StyleSheet} from 'react-native';

export const SearchHeader = ({
  handleSearch,
  searchText,
}: {
  handleSearch: any;
  searchText: any;
}) => {
  return (
    <View style={styles.headerContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
  },
  searchButtonText: {
    color: 'white',
  },
});
