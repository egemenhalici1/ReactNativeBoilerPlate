import { I18n } from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import tr from './tr';
import en from './en';

const locales = RNLocalize.getLocales();

const i18n = new I18n({ en, tr });
i18n.defaultLocale = locales[0].languageTag;
i18n.enableFallback = true;


export default i18n;