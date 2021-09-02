import {showMessage} from 'react-native-flash-message';
import Colors from '../../utils/theme';
class FlashMessage {
  displayMessage = payload => {
    showMessage({
      message: payload.message,
      position: payload.position,
      //icon: payload.icon,
      backgroundColor: payload.bgColor,
      color: Colors.WHITE,
    });
  };
}

export default new FlashMessage();
