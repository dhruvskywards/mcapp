import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import style from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import comments from '../../../assets/image/comments.png';
import send from '../../../assets/image/send.png';
import {scale} from 'react-native-size-matters';
import theme from '../../../utils/theme';
import {HOME_MENU_ITEMS} from '../../../utils/StaticJsonHelpers';
import DropDownMenu from '../../DropDownMenu/DropDownMenu';

const CardFooter = ({onSendPress}) => {
  const [like, setlike] = useState(false);
  return (
    <View style={style.maincontainer}>
      <View style={style.innerView}>
        <Pressable onPress={() => setlike(!like)} style={style.likeView}>
          <FontAwesome
            name="heart"
            size={scale(19)}
            color={like ? theme.RED : theme.WHITE}
          />
        </Pressable>
        <View style={style.messageview}>
          <Image style={style.imageContainer} source={comments} />
          <Text style={style.messageText}>248</Text>
          <Pressable style={style.sendicon} onPress={onSendPress}>
            <Image style={style.sendimage} source={send} />
          </Pressable>
        </View>
      </View>
      <View>
        <DropDownMenu data={HOME_MENU_ITEMS} iconColor={theme.WHITE} />
      </View>
    </View>
  );
};

export default CardFooter;
