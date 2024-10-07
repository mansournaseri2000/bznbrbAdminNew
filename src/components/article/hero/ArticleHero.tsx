import React from 'react';

import { Button, Grid, TextField } from '@/libs/primitives';

const ArticleHero = () => {
  return (
    <Grid width={'100%'} columns={'2'} gapX={'5'} style={{ gridTemplateColumns: '0.3fr 3fr' }}>
      <Button>افزودن مقاله </Button>
      <TextField placeholder='جستجوی عنوان  مقاله' />
    </Grid>
  );
};

export default ArticleHero;
