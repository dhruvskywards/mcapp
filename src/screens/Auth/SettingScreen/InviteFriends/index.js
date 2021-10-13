import React, { useState,useEffect } from 'react';
import { SafeAreaView,ScrollView,Text, TextInput, TouchableOpacity, View ,Share,Linking} from 'react-native';
import { scale } from 'react-native-size-matters';
import IconFeather from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome'
import HeaderwithCenterTitle from '../../../../components/HeaderWithCenterTitle';
import styles from './style'
const InviteFriends = () => {

return(
    <View>
        <ScrollView
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{ paddingVertical:scale(10)}}>
         
         <HeaderwithCenterTitle  title={'Follow and Invite Friends'}  onPress={()=>{navigation.goBack()}} />
       
         <View style={styles.flexRow}>
            <IconFeather name="user-plus" size={20}   />
            <TouchableOpacity  
                onPress={() => {   
                }}
             >
             <Text>Follow Contacts</Text>
            </TouchableOpacity>
            </View>
            
            <View style={styles.flexRow}> 
                <IconFont name="whatsapp" size={20}    />
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL('whatsapp://send?text="MCApp User"')
                    }}
                    >
                    <Text style={styles.textGeneralSettings}>Invite Friends By Whatsapp</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.flexRow}> 
                <MIcon name="email-outline"  size={25}  />
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL('mailto:?subject=McApp&body=MCApp User') }
                        
                    }
                    >
                    <Text style={styles.textGeneralSettings}>Invite Friends By Email</Text>
                </TouchableOpacity>
            </View>
        
            <View style={styles.flexRow}> 
                <MIcon name="message-processing-outline"  size={25}  />
                <TouchableOpacity
                    onPress={() => {
                        const operator = Platform.select({ios: '&', android: '?'});
                        Linking.openURL(`sms:${operator}body=${"MCAPP"}`);
                    }}
                    >
                    <Text style={styles.textGeneralSettings}>Invite Friends By SMS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.flexRow}> 
                <MIcon name="share-variant"  size={25}  />
                <TouchableOpacity
                    onPress={() => {
                        Share.share({
                            title: 'App link',
                            message: 'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en', 
                            url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
                        }, {
                            // Android only:
                            dialogTitle: 'Share MCAPP',
                            // iOS only:
                            excludedActivityTypes: [
                            'com.apple.UIKit.activity.PostToTwitter'
                            ]
                        })
                    }}
                >
                    <Text style={styles.textGeneralSettings}>Invite Friends By...</Text>
                </TouchableOpacity>
            </View>
       
        
       
        
        </ScrollView>
    </View>
    );

};


export default InviteFriends;
