import React from 'react';

import { Grid } from '@/libs/primitives';

const UiPrimitivesPage = () => {
  return (
    <Grid columns={'1'} rows={'10'} style={{ border: '1px solid red', minHeight: '100vh' }}>
      <Grid style={{ border: '1px solid red', minHeight: '300px' }}>1</Grid>
      <Grid style={{ border: '1px solid red', minHeight: '300px' }}>1</Grid>
      <Grid style={{ border: '1px solid red', minHeight: '300px' }}>1</Grid>
      <Grid style={{ border: '1px solid red', minHeight: '300px' }}>1</Grid>
      <Grid style={{ border: '1px solid red', minHeight: '300px' }}>1</Grid>
    </Grid>
  );
};

export default UiPrimitivesPage;
