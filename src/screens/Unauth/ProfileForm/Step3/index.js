import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import style from './style';
import FooterButton from 'src/components/FooterButton';
import theme from 'src/utils/theme';
import {CommonActions} from '@react-navigation/native';
import {setSessionData, getSessionData} from 'src/utils/asyncStorage';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from 'src/store/action/intrestListAction';
import * as pushdataaction from 'src/store/action/localuserdataAction';
import * as postdataaction from 'src/store/action/userdatapostAction';
import * as userActions from 'src/store/action/getUserProfile';
import sessionKey from 'src/utils/const';

const Step3 = ({navigation}) => {
  const dispatch = useDispatch();
  const getIntrestlist = () => {
    dispatch(
      actions.intrestList(
        async success => {},
        error => {},
      ),
    );
  };

  useEffect(() => {
    getIntrestlist();
  }, []);
  const intrestdata = useSelector(state => state?.intrestList?.intrest);
  const [selectedid, setSelectedid] = useState([]);
  const [email, setEmail] = useState();

  const userdata = useSelector(state => state?.localuserdata?.userdata);

    useEffect(async () => {
        const emailid = await getSessionData('authtoken');
        setEmail(emailid);
    }, []);
  console.log('Selected id==>', selectedid);
  console.log('userData==>', JSON.stringify(userdata));

  const signup = () => {
    const params = {
      firebaseId:userdata?.firebaseId,
      email: email,
      username: userdata.username,
      gender: userdata.gender,
        phone:email,
      profilepic: userdata.profilepic,
      intrestIds: selectedid,
      dob: userdata.DOB,
      location:'gujarat',
      country:'india'

    };
    setSessionData('userformFlag', '1');
    return navigation.dispatch(
      CommonActions.reset({index: 1, routes: [{name: 'Home'}]}),
      dispatch(
        postdataaction.userDataPost(
          params,
          res => {
            console.log(res)
            dispatch(
              userActions.GetUserProfile(
                userdata.email,
                async data => {
                    console.log(data);
                  await setSessionData(sessionKey.userData, JSON.stringify(data));
                },
                error => {
                  //show err
                  console.log(error);
                },
              ),
            );
          },
          e => {
            console.log(e);
          },
        ),
      ),
    );
  };
  const pushInUserdata = id => {
    const params = {
      intrestid: id,
    };
    setSelectedid(id);
    dispatch(pushdataaction.setuserdata(params));
  };

  return (
    <View style={style.maincontainer}>
      <View style={style.container}>
        <Text style={style.MaintitleText}>Keep it real</Text>
        <Text style={style.SubtitleText}>
          <Text style={style.titleTextBold}>Select at least 1</Text> interest or
          talent(s).
        </Text>
        <ScrollView
          style={style.ScroolView}
          showsVerticalScrollIndicator={false}>
          {intrestdata.map(item => (
            <View style={style.row}>
              <View style={style.border}>
                <Pressable
                  style={[
                    style.radiobtn,
                    {
                      backgroundColor: selectedid.includes(item.id)
                        ? theme.BLACK
                        : theme.WHITE,
                    },
                  ]}
                  onPress={() => {
                    if (selectedid.includes(item.id)) {
                      var accountDetailCopy = selectedid;
                      var filteredArray = accountDetailCopy.filter(
                        accountType => item.id !== accountType,
                      );
                      setSelectedid(filteredArray);
                    } else {
                      if (selectedid.length < 4) {
                        setSelectedid(prestate => {
                          return [...prestate, ...[item.id]];
                        });
                      }
                    }
                  }}
                />
              </View>
              <Text style={style.titleText}>{item.name}</Text>
            </View>
          ))}
          {/* <RadioButtonRN
            style={style.radiobtn}
            box={false}
            data={intrestdata}
            textStyle={style.titleText}
            deactiveColor={theme.TEXT_VARAINT_1}
            activeColor={theme.TEXT_VARAINT_1}
            selectedBtn={e => pushInUserdata(e.id)}
          /> */}
        </ScrollView>
      </View>
      <View style={style.button}>
        <FooterButton
          title={'Continue'}
          onPress={() => {
            signup();
          }}
        />
      </View>
    </View>
  );
};
export default Step3;
