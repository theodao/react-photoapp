import React from 'react';
import { EmptyState } from '@gotitinc/design-system';

export default ({ title = '' }) => (
  <div
    style={{
      maxWidth: '1140px',
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
    }}
  >
    <EmptyState name="general">
      <EmptyState.Heading>{title} Empty</EmptyState.Heading>
    </EmptyState>
  </div>
);
