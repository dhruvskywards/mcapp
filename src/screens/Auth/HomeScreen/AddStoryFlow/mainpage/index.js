import React from 'react';
import {View, ScrollView} from 'react-native';
import FooterTabBar from '../../../../../components/FooterTabBar';
import style from './style';

const AddStoryFlow = ({navigation, route}) => {
  // const [profile_photo, setPhoto] = useState(null);
  const ContentType = route.params?.ContentType;
  console.log('ContentType==>', ContentType);
  return (
    <ScrollView contentContainerStyle={style.scrollViewContainer}>
      <View style={style.maincontainer}>
        <FooterTabBar ContentType={ContentType} />
      </View>
    </ScrollView>
  );
};
export default AddStoryFlow;
