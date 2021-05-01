export const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  headline: 'Analyze the speed of your induction motor',
  description:
    'Get speed of two slip ring induction motors for different types of cascading operation.',
  buttonLabel: 'Get Started',
  imgStart: '',
  img: require('../../images/home-main.svg'),
  alt: 'Credit Card',
  start: ''
};

export const homeObjTwo = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  headline: 'Case A',
  description:
    'Torque of both machines are in same direction.',
  buttonLabel: 'Find Speed',
  imgStart: 'start',
  img: require('../../images/machine-2.svg'),
  alt: 'Vault',
  linkTo:'/machine-2',
  start: 'true'
};

export const homeObjThree = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  headline: 'Case B',
  description:
    "Torque of both machines are in different direction.",
  buttonLabel: 'Find Speed',
  imgStart: '',
  img: require('../../images/machine-3.svg'),
  alt: 'Vault',
  linkTo:'/machine-3',
  start: ''
};
