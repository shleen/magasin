import React from 'react';
import { Image, View, Text } from 'react-native';

import { RouteProp } from '@react-navigation/native';

import { styles } from './styles';
import { RootStackParamList } from './types';

type CreateGarmentsProps = RouteProp<RootStackParamList, 'Create Garments'>;

const CreateGarments = ({ route }: { route: CreateGarmentsProps }) => {
  const { outfit_img_uri } = route.params;

  return (
    <View
      style={{
        ...styles.container,
        ...{
          flexDirection: 'column',
          alignContent: 'center',
          paddingTop: 40,
        },
      }}
    >
      <Image source={{ uri: outfit_img_uri }} style={{ width: '70%', height: '40%' }} />

      <View
        style={{
          marginVertical: 40,
        }}
      >
        <Text style={styles.caption}>
          Stunning.
        </Text>
        <Text style={styles.caption}>
          Tell us more.
        </Text>
      </View>
    </View>
  );
};

export default CreateGarments;
