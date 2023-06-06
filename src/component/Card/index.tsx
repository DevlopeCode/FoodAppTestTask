/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {TouchableOpacity, Text, Image} from 'react-native';
import {styles} from '../../styles/rootStyle';
import {FoodList} from '../../utils/RawData';
import {AirbnbRating} from 'react-native-elements';

export const FoodItemCard = ({
  item,
  onPress,
  description = false,
}: {
  item: FoodList;
  onPress: any;
  description?: boolean;
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Image
        source={{uri: item.image}}
        style={{height: 100, width: '100%', resizeMode: 'cover'}}
      />
      <AirbnbRating defaultRating={item.rating} size={10} reviewSize={0} />

      <Text style={styles.specialties}>{item.specialties.join(', ')}</Text>
      {description && (
        <Text style={styles.specialties}>{item.description}</Text>
      )}
      <Text style={styles.price}> ₹ {item.price}</Text>
    </TouchableOpacity>
  );
};
