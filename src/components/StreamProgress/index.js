import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const StreamProgress = ({ progressCount } ) => {
  const [countDown, setCountDown] = useState(0);
  let pc = progressCount;
  useEffect(() => {
    let prg = 0;
    const startCountDown = (lv) => {
      setTimeout(() => {
        // this.setState({ indeterminate: false });
        setInterval(() => {
          prg += 1 / lv;
          if (prg > 1) {
            prg = 1;
          }
          setCountDown(prg);
        }, 1000);
      }, 1000);
    };
    startCountDown(pc);
  }, [pc]);
  return (
    <View>
      <ProgressBar
        progress={countDown ?? 90}
        // duration={progress}
        color="#00FF99"
        unfilledColor="#E6E6E6"
        borderColor="rgba(255,255,255,0.1)"
        width={200}
        height={5}
      />
    </View>
  );
};
export default StreamProgress;
