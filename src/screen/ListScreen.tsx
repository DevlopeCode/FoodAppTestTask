import {FlatList, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {FoodItemCard} from '../component/Card';
import {styles} from '../styles/rootStyle';
import {Food, FoodList} from '../utils/RawData';
import {SearchHeader} from '../component/Header';
import CustomDropdown from '../component/DropDown';
import {navigate} from '../navigation/NavigationService';
import {Switch} from 'react-native-elements';
import {SvgXml} from 'react-native-svg';
import {Grid, List, NonVeg, Veg} from '../utils/svg';

const RatingOption: any = {
  '1 >=': 1,
  '2 >=': 2,
  '3 >=': 3,
  '4 >=': 4,
  '5 >=': 5,
};

const ListScreen = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [isVeg, seIsVeg] = useState<any>(true);
  const [category, setCategory] = useState<any>(null);
  const [ratingCount, setRatingCount] = useState<any>(null);
  const StarOption = ['1 >=', '2 >=', '3 >=', '4 >=', '5 >='];
  let filteredFood = Food.foodList.filter(item => {
    const titleMatch = item.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const vegMatch = item.veg === isVeg;
    const categoryuMatch =
      category === null || item.specialties.includes(category);
    const RatinguMatch =
      ratingCount === null || item.rating <= RatingOption[ratingCount];
    return titleMatch && vegMatch && categoryuMatch && RatinguMatch;
  });
  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const handleSearch = (text: React.SetStateAction<string>) => {
    setSearchText(text);
  };
  const renderItem = ({item}: {item: FoodList}) => {
    return (
      <FoodItemCard
        item={item}
        onPress={() => navigate('DetailsScreen', item)}
      />
    );
  };
  const onReset = () => {
    seIsVeg(!isVeg);
    setCategory(null);
    setRatingCount(null);
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.viewToggle}
        onPress={() => {
          onReset();
        }}>
        <Text style={styles.viewToggleText}>Reset</Text>
      </TouchableOpacity>
      <SearchHeader handleSearch={handleSearch} searchText={searchText} />

      <View style={styless.filterContainer}>
        <View style={styless.filterContainer}>
          <SvgXml xml={!isGridView ? List : Grid} height={15} />
          <Switch value={isGridView} onValueChange={toggleView} />
        </View>
        <View style={styless.filterContainer}>
          <SvgXml xml={isVeg ? Veg : NonVeg} height={15} width={30} />
          <Switch
            onChange={() => {
              seIsVeg(!isVeg);
            }}
            value={isVeg}
          />
        </View>

        <CustomDropdown
          specialties="category"
          selected={category}
          options={filteredFood.map(item => item.specialties).flat()}
          onSelect={(e: React.SetStateAction<string>) => setCategory(e)}
        />
        <CustomDropdown
          specialties="rating"
          selected={ratingCount}
          options={StarOption}
          onSelect={(e: React.SetStateAction<string>) => setRatingCount(e)}
        />
      </View>

      <FlatList
        data={filteredFood}
        key={isGridView ? 'grid' : 'list'}
        numColumns={isGridView ? 2 : 1}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
const styless = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    zIndex: 9999999,
  },
  searchBar: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  foodItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default ListScreen;
