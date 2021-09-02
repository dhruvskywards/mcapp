import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import style from './CompetitionCanceled/style';
import FooterButton from 'src/components/FooterButton';
import canceledIcon from 'src/assets/image/CanceledIcon.png';
import { useNavigation } from "@react-navigation/native";

const CompetitionCanceled = () => {
  const navigation = useNavigation();
  return (
    <View style={style.maincontainer}>
      <View style={style.container}>
        <Image source={canceledIcon} />
        <Text style={style.titleText}>This competition has been Ended</Text>
      </View>
      <TouchableOpacity style={{ position: 'absolute',
        bottom: 0,justifyContent:'center',alignItems:'center',
        width: '100%',backgroundColor:'#000',height:50,borderTopLeftRadius:25,borderTopRightRadius:25 }}
        onPress={()=>{navigation.navigate("HomeScreen")}}
      >
          <Text style={{color:'#FFF',fontWeight:'bold'}}>Back to Home</Text>
      </TouchableOpacity>
      {/*<View style={style.button}>*/}
      {/*  <FooterButton title={'Back to lobby'} />*/}
      {/*</View>*/}
    </View>
  );
};
export default CompetitionCanceled;
