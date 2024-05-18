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
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2.0,
  },
  rightMd: {
    textShadowColor: col.dark,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4.0,
  },
  rightLg: {
    textShadowColor: col.dark,
     textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6.0,
  },
  rightXl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8.0,
  },
    right2xl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10.0,
  },
      right3xl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 12.0,
  },
  leftSm: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 1.0,
  },
  leftMd: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 2.0,
  },
  leftLg: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 4.0,
  },
  leftXl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 10.0,
  },
  left2xl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 12.0,
  },
  left3xl: {
    textShadowColor: col.dark,
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 14.0,
  },
  glowSm: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  glowMd: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  glowLg: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  glowXl: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
  },
  glow2xl: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  glow3xl: {
    textShadowColor: col.light,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 24,
  },
};