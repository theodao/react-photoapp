import React from 'react';
import { EmptyState } from '@gotitinc/design-system';

export default ({ title = '' }) => (
  <div
    style={{
      maxWidth: '1140px',
      display: 'flex',
      justifyContent: 'center',
      margin: '0 auto',
    }}
  >
    <EmptyState name="general">
      <EmptyState.Heading>{title} Empty</EmptyState.Heading>
    </EmptyState>
  </div>
);
