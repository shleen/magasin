import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { COLORS } from './constants';
import { styles } from './styles';
import { RootStackParamList } from './types';

const AddOutfitButton = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  const [image, setImage] = React.useState<string>('');

  const banner = (
    <View
      style={{
        backgroundColor: COLORS.BEIGE,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Text>ADD AN OUTFIT</Text>
    </View>
  );

  React.useEffect(() => {
    if (image) {
      navigation.navigate('Create Garments', { outfit_img_uri: image });
    }
  }, [image]);

  return (
    <TouchableWithoutFeedback
      onPress={async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      }}
    >
      <View
        style={{
          ...styles.container,
          ...{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }
        }}
      >
        {banner}
        <Image
          style={{
            width: '70%',
            height: '70%',
          }}
          source={require('./assets/add_outfit.webp')}
        />
        {banner}
      </View>
    </TouchableWithoutFeedback>
  );
}

const DummyGarment = () => {

  return (
    <Image
      style={styles.container}
      source={require('./assets/dummy.webp')}
    />
  )
};

const Home = ({ navigation, route }: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  const rows = 6;
  const columns = 3;

  const [garments, setGarments] = React.useState([
    <AddOutfitButton navigation={navigation} route={route} />,
    <DummyGarment />,
    <DummyGarment />,
    <DummyGarment />,
    <DummyGarment />,
    <DummyGarment />
  ]);
  return (
    <View style={styles.container}>
        {
          garments.map((g, i) =>
            <View
              key={i}
              style={{
                width: `${100/columns}%`,
                height: `${100/rows}%`,
              }}
            >
              {g}
            </View>
          )
        }
      <StatusBar /> {/* ??? do i need this? */}
      </View>
  );
};

export default Home;
