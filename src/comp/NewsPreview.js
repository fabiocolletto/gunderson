import React from 'react';
import { useTranslation } from 'react-i18next';
import './NewsPreview.css';

const ServicePreview = () => {
  const { t } = useTranslation();

  return (
    <div className="main-service">
      <div className="service-content">
        {t('NewsPreview.text')}
      </div>
    </div>
  );
};

export default ServicePreview;