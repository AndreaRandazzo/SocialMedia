import React from 'react';
import {Button, Text, View} from 'react-native';
import i18n from '../../i18n';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';

const toggleLanguage = () => {
  const newLanguage = i18n.language === 'en' ? 'it' : 'en';
  i18n.changeLanguage(newLanguage);
};

const SwitchLanguageButton = props => {
  const {t, i18n} = useTranslation();

  return (
    <View style={{padding: 20}}>
      <Text>{t(props.text)}</Text>
      <Button title={t('changeLanguage')} onPress={() => toggleLanguage()} />
    </View>
  );
};

SwitchLanguageButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SwitchLanguageButton;
