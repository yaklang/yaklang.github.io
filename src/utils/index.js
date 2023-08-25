import { i18nextLng } from "../globalsVar";
import '../i18n';
import i18n from 'i18next';

export function getI18nextLng() {
  return i18nextLng;
}

export function setI18nextLng(lng) {
  i18nextLng = lng;
}

export function initializeI18n() {
  console.log(1111, getI18nextLng());
  i18n.changeLanguage(getI18nextLng());
}
