export const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  headline: 'Analyze the speed of your induction motor',
  description:
    'Get speed of two slip ring induction motors for different types of cascading operation where the shaft of the motors are coupled with each other.',
  buttonLabel: 'Get Started',
  imgStart: '',
  img: require('../../images/home-main.svg'),
  alt: 'Credit Card',
  linkTo:'/machine-2',
  start: ''
};

export const homeObjTwo = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  headline: 'Torque of both machines in same direction',
  description:
    'While giving the rotor output of first machine to the stator of the second, the resultant mmf of the second machine sets up an air-gap flux which rotates in same direction as that of the rotor.',
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
  headline: 'Torque of both machines in different direction',
  description:
    "While giving the rotor output of first machine the stator of the second, the resultant mmf of the second machine sets up an air-gap flux which rotates in different direction as that of the rotor.",
  buttonLabel: 'Find Speed',
  imgStart: '',
  img: require('../../images/machine-3.svg'),
  alt: 'Vault',
  linkTo:'/machine-3',
  start: ''
};
