import '../i18n';
import i18n from 'i18next';

export function getI18nextLng() {
  return localStorage.getItem('i18nextLng');
}

export function initializeI18n() {
  i18n.changeLanguage(getI18nextLng(), (err, t) => {
    if (err) {
      console.error('Error changing language:', err);
      return;
    }
    // 在语言设置成功后，你可以执行其他操作
    console.log('Language changed to:', getI18nextLng());
  });
}
