import React from 'react';
import {
  GluestackUIProvider,
  Button, ButtonText, Divider, Text } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';

const COLORS = {
  GREY: '#EDEDED',
};

enum GARMENT_TYPE {
  TOP,
  BOTTOM,
  SHOE
};

const GarmentImage = () => {
  return (
    <Image
      style={{
        width: 200,
        height: 200,
      }}
      source={require('./assets/garment_templates/cropped_thick_tank.png')}
    />
  );
};

const GarmentType = () => {
  const options = [
    { icon: 'top.png', text: 'Top' },
    { icon: 'bottoms.png', text: 'Bottoms' },
    { icon: 'shoes.png', text: 'Shoes' },
  ];
  return (
    <View
      style={{
        width: '90%',
        flexDirection: 'row',
      }}
    >
      {options.map(op => 
        <View key={op.text}>
          <Button
            size="md"
            variant="outline"
            action="secondary"
            style={{
              paddingHorizontal: 16,
              
            }}
          >
            <Image
              style={{
                width: 16,
                height: 16,
              }}
              source={require(`./assets/icons/${op.icon}`)}
            />
            <ButtonText
              style={{
                marginLeft: 4,
              }}
            >{op.text}</ButtonText>
          </Button>
        </View>
      )}
    </View>
  );
};

type GarmentTypeTypeProps = {
  type: GARMENT_TYPE,
};

const GarmentTypeType = (props: GarmentTypeTypeProps) => {
  let options: { icon: string, text: string, }[] = [];
  if (props.type == GARMENT_TYPE.TOP) {
    options = [
      { icon: 'tshirt.png', text: 'T-shirt' },
      { icon: 'top.png', text: 'Button-up' },
      { icon: 'tanktop.png', text: 'Tank top' },
    ];
  }
  else {
    options = [
    ];
  }

  return (
    <View
      style={{
        width: '90%',
        flexDirection: 'row',
        overflow: 'scroll',
      }}
    >
      {options.map(op => 
        <View key={op.text}>
          <Button
            size="md"
            variant="outline"
            action="secondary"
            style={{
              paddingHorizontal: 16,
            }}
          >
            <Image
              style={{
                width: 16,
                height: 16,
              }}
              source={require(`./assets/icons/${op.icon}`)}
            />
            <ButtonText
              style={{
                marginLeft: 4,
              }}
            >{op.text}</ButtonText>
          </Button>
        </View>
      )}
    </View>
  );
}

const ButtonGroupDivider = () => <Divider w="$80%" h={3} marginVertical={10} borderRadius={3} variant="horizontal" bg={COLORS.GREY} />;

export default function App() {
  const [garmentType, setGarmentType] = React.useState(GARMENT_TYPE.TOP);

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
          }}
        >
          <Text
            style={{
              fontSize: 20
            }}
          >Your Garment</Text>
        </View>
        <GarmentImage />
        <ButtonGroupDivider />

        <GarmentType />
        <ButtonGroupDivider />

        <GarmentTypeType type={garmentType} />
        <ButtonGroupDivider />

        <StatusBar />
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
