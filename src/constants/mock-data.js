import {scale} from 'react-native-size-matters';

export const swiperData = [
  {
    backgroundImage: require('src/assets/image/bg_img.png'),
    logo: require('src/assets/image/logo.png'),
    title: 'The premier live & online music competition platform. No cap…',
  },
  {
    title: 'Create & Vibe',
    subTitle:
      "Collab & create content such as videos, photos & podcasts. We don't do the follower thing over here, we have connections. Make your content go viral no invite needed.",
    image: {headerImage1: require('src/assets/image/slideOne.png')},
    customWidth: scale(130),
  },
  {
    title: 'Competitions',
    subTitle:
      'Be a judge & place your rating honestly to increase your chances of winning a prize(s). Contestants show off your talents & win through a separate prize pool. Bring that fire!',
    image: {
      headerImage1: require('src/assets/image/slideTwo.png'),
      headerImage2: require('src/assets/image/slideThree.png'),
    },
    customWidth1: scale(190),
    customWidth2: scale(105),
  },
  // {
  //   title: 'Create & Vibe',
  //   subTitle:
  //     'Be a judge & place your rating honestly to increase your chances of winning a prize(s). Contestants show off your talents & win through a separate prize pool. Bring that fire!',
  //   customWidth: scale(105),
  // },
  {
    title: 'Maximum Exposure',
    subTitle:
      'Increase your social media foot print. Over here talent is the lay of the land, get discovered the right way. Live-stream to your Instagram, YouTube & Twitch at the same time.',
    image: {
      headerImage1: require('src/assets/image/slideFour.png'),
      headerImage2: require('src/assets/image/slideFive.png'),
    },
    customWidth1: scale(80),
    customWidth2: scale(105),
  },
  // {
  //   title: 'Maximum Exposure',
  //   subTitle:
  //     'Increase your social media foot print. Over here talent is the lay of the land, get discovered the right way. Live-stream to your Instagram, YouTube & Twitch at the same time.',
  //   customWidth: scale(105),
  // },
];

export const UserData = [
  {
    url: require('src/assets/image/User.png'),
    Username: 'Hellcat83',
    userType: 'Musician / Rapper',
  },
  {
    url: require('src/assets/image/User.png'),
    Username: 'TheWeeknd8080',
    userType: 'Musician / Rapper',
  },
  {
    url: require('src/assets/image/User.png'),
    Username: 'Mira87',
    userType: 'Rapper / Producer',
  },
];

export const PrizeDetails = [
  {
    title: 'Contestant Prize Payouts',
    subTitle:
      'Only one contestant can win, unless specifically specified in the terms & conditions. This prize will be credited to the winning contestant profile wallet once the prize has been claimed at the end of this competition.',
  },
  {
    title: 'Audience Prize Payouts',
    subTitle:
      'Late entries 2 minutes into this competition will not be eligible for audience prize payouts. All ties will be split evenly or will be subject to a tie breaker mini-game. Please see terms & conditions.',
  },
];

export const EditPhotoOptions = [
  {
    title: 'Contrast',
    image: require('src/assets/image/Contrast.png'),
  },
  {
    title: 'Brightness',
    image: require('src/assets/image/Brightness.png'),
  },
  {
    title: 'Saturation',
    image: require('src/assets/image/Saturation.png'),
  },
  {
    title: 'HueRotate',
    image: require('src/assets/image/Structure.png'),
  },
  {
    title: 'Temprature',
    image: require('src/assets/image/Warmth.png'),
  },
  {
    title: 'Tint',
    image: require('src/assets/image/ComicPattern.png'),
  },
  {
    title: 'Threshold',
    image: require('src/assets/image/RGB.png'),
  },
  {
    title: 'Night',
    image: require('src/assets/image/Vibrance.png'),
  },
  {
    title: 'Predator',
    image: require('src/assets/image/Sharpen.png'),
  },
];
