import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import FooterButton from 'src/components/FooterButton';
import style from './style';
import cake from 'src/assets/image/cake.png';
import DatePicker from 'react-native-datepicker';
import theme from 'src/utils/theme';
import Textinput from '../../../../components/TextInput';
import {useDispatch} from 'react-redux';
import * as actions from 'src/store/action/localuserdataAction';

const Step2 = ({navigation}) => {
  const dispatch = useDispatch();
  const [date, setdate] = useState(null);
  const [gender, setgender] = useState(null);
  const data = [
    {
      label: 'Male',
    },
    {
      label: 'Female',
    },
    {
      label: 'Prefer not to say',
    },
    {
      label: 'Other : ',
    },
  ];
  const display = () => {
    const params = {
      DOB: new Date(date).toISOString(),
      gender: gender.label,
    };
    return navigation.navigate('Step3'), dispatch(actions.setuserdata(params));
  };
  return (
    <ScrollView contentContainerStyle={style.maincontainer}>
      <View style={style.container}>
        <Text style={style.MaintitleText}>Keep it real</Text>
        <Text style={style.SubtitleText}>
          This <Text style={style.TextBold}>won’t</Text> be part of your{' '}
          <Text style={style.TextBold}>public profile</Text>, but we need it,
          just in case you’re the worlds next{' '}
          <Text style={style.TextBold}>top talent</Text>!
        </Text>
        <Image style={style.imageStyle} source={cake} />
        <Text style={style.titleText}>Add your date of birth</Text>
        <DatePicker
          date={date}
          showIcon={false}
          placeholder={'MM/DD/YY'}
          format={'MM/DD/YY'}
          maxDate={new Date()}
          customStyles={{
            dateInput: style.dateInput,
            placeholderText: style.PlaceHolderText,
          }}
          style={style.Calenderstyle}
          onDateChange={value => setdate(value)}
        />
        <Text style={style.RadioBtntitleText}>Whats your vibe?</Text>
        <RadioButtonRN
          style={style.radiobtn}
          box={false}
          data={data}
          textStyle={style.RadioBtnItemText}
          deactiveColor={theme.TEXT_VARAINT_1}
          activeColor={theme.TEXT_VARAINT_1}
          selectedBtn={value => setgender(value)}
        />
        <View style={style.textInput}>
          <Textinput
            customStyle={style.CustomtextInput}
            multiline={false}
            placeholder={''}
            onChangeText={value => setgender(value)}
          />
        </View>
      </View>
      <View style={style.button}>
        <FooterButton
          title={'Continue'}
          onPress={() => {
            display();
          }}
        />
      </View>
    </ScrollView>
  );
};
export default Step2;
