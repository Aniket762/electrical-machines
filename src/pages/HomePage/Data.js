export const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  headline: 'Analyze the speed of your induction motor',
  description:
    'Get speed of two slip ring induction motors for different types of cascading operation. f1 = input frequency of voltage to MIM (Main Induction Motor) p1 = number of poles in MIM p2 = number of poles in AIM (Auxiliary Induction Motor) ',
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
    'The shaft of the motors are coupled with each other.',
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
    "Torque of both machines are in different direction.",
  buttonLabel: 'Find Speed',
  imgStart: '',
  img: require('../../images/machine-3.svg'),
  alt: 'Vault',
  linkTo:'/machine-3',
  start: ''
};
