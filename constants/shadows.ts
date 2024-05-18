import { col } from "./Colors_Styles";

export const boxShadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1.0,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2.0,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4.0,
    elevation: 8,
  },
  xl: {
  shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 20,
  },
  insetSm: {
    shadowColor: '#000',
    shadowOffset: { width: -1, height: -1 },
    shadowOpacity: 0.8,
    shadowRadius: 1.0,
    elevation: 2,
  },
  insetMd: {
    shadowColor: '#000',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.8,
    shadowRadius: 2.0,
    elevation: 4,
  },
  insetLg: {
    shadowColor: '#000',
    shadowOffset: { width: -4, height: -4 },
    shadowOpacity: 0.8,
    shadowRadius: 4.0,
    elevation: 8,
  },
  insetXl: {
    shadowColor: '#000',
    shadowOffset: { width: -8, height: -8 },
    shadowOpacity: 0.8,
    shadowRadius: 8.0,
    elevation: 16,
  },
  glowSm: {
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  glowMd: {
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  glowLg: {
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
  },
  glowXl: {
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 16,
  },
};

export const textShadows = {
  rightSm: {
    textShadowColor: col.dark,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius:2,
  },
  rightMd: {
    textShadowColor: col.dark,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  rightLg: {
    textShadowColor: col.dark,
     textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  rightXl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
  },
    right2xl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 4,
  },
      right3xl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5,
  },
  leftSm: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius:1,
  },
  leftMd: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -2, height: -2 },
    textShadowRadius:2,
  },
  leftLg: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -3, height: -3 },
    textShadowRadius:3,
  },
  leftXl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -4, height: -4 },
    textShadowRadius: 4,
  },
  left2xl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -5, height: -5 },
    textShadowRadius: 5,
  },
  left3xl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -6, height: -6 },
    textShadowRadius: 6,
  },
  glowSm: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },
  glowMd: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
  glowLg: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  glowXl: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  glow2xl: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  glow3xl: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
};