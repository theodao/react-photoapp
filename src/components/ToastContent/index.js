/* eslint-disable indent */
import React from 'react';
import { Icon } from '@gotitinc/design-system';

export default ({
  iconName = 'helpCircle',
  iconSize = 'medium',
  content = '',
  title = 'Default',
}) => (
  <div className="u-flex u-flexGrow-1">
    <div className="u-marginRightExtraSmall">
      <Icon name={iconName} size={iconSize} />
    </div>
    <div className="u-flexGrow-1">
      <div className="u-fontMedium u-marginBottomExtraSmall">{title}</div>
      <div>
        {typeof content === 'string'
          ? content
          : content.map((item) => {
              return <li>{item}</li>;
            })}
      </div>
    </div>
  </div>
);
