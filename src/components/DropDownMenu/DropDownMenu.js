import React, {useRef} from 'react';
import Menu, {MenuItem} from 'react-native-material-menu';
import {ScrollView, Pressable} from 'react-native';
import fonts from '../../utils/fonts';
import theme from '../../utils/theme';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const DropDownMenu = props => {
  const {
    iconName = 'dots-vertical',
    menuProps,
    onChange = () => {},
    data,
    button = null,
    iconColor = theme.TEXT_COMMON_SILVER,
  } = props;

  const menuref = useRef();
  const showMenu = () => {
    menuref.current.show();
  };
  const hideMenu = () => {
    menuref.current.hide();
  };
  return (
    <Menu
      ref={menuref}
      style={{maxHeight: 500}}
      button={
        button ? (
          <Pressable
            onPress={() => {
              showMenu();
            }}>
            {button()}
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              showMenu();
            }}>
            <MIcon name={iconName} size={25} color={iconColor} />
          </Pressable>
        )
      }
      {...menuProps}>
      <ScrollView>
        {data.map(({label, value}) => {
          return (
            <MenuItem
              style={{backgroundColor: theme.WHITE}}
              textStyle={[fonts.Proxima_Nova_Sbold, {color: theme.BLACK}]}
              key={value}
              onPress={() => {
                onChange(value);
                hideMenu();
              }}>
              {label}
            </MenuItem>
          );
        })}
      </ScrollView>
    </Menu>
  );
};

export default DropDownMenu;
