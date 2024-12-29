import React, { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Controller, useFormContext } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { Spinner } from '@radix-ui/themes';
import { EditorState } from 'draft-js';

import { Checkbox, Grid, TextArea } from '@/libs/primitives';
import { colorPalette } from '@/theme';

const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

const TextContent = () => {
  const methods = useFormContext();
  const { control } = methods;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <Grid width={'100%'} gapY={'5'}>
      <Controller name='brief' control={control} render={({ field }) => <TextArea {...field} placeholder='خلاصه مقاله' rows={4} />} />
      <Controller name='summery' control={control} render={({ field }) => <TextArea {...field} placeholder='summery' rows={4} />} />
      <Controller
        name='tableOfContent'
        control={control}
        render={({ field }) => (
          <Editor
            {...field}
            editorState={editorState}
            onEditorStateChange={newState => {
              setEditorState(newState);
              field.onChange(newState); // Pass the state to react-hook-form
            }}
            editorStyle={{
              minHeight: '150px',
              overflow: 'auto',
              border: `1px solid ${colorPalette.gray[7]}`,
              borderRadius: '8px',
              padding: '8px',
              position: 'static',
              height: 'fit-content',
            }}
            toolbarClassName='toolbarClassName'
            wrapperClassName='wrapperClassName'
            editorClassName='editorClassName'
            placeholder='سرفصل های مقاله'
          />
        )}
      />
      <Controller
        name='content'
        control={control}
        render={({ field }) => (
          <Editor
            {...field}
            editorStyle={{
              minHeight: '150px',
              overflow: 'auto',
              border: `1px solid ${colorPalette.gray[7]}`,
              borderRadius: '8px',
              padding: '8px',
              position: 'static',
              height: 'fit-content',
            }}
            toolbarClassName='toolbarClassName'
            wrapperClassName='wrapperClassName'
            editorClassName='editorClassName'
            placeholder='متن مقاله'
          />
        )}
      />
      <Controller
        name='isSlider'
        control={control}
        render={({ field }) => <Checkbox {...field} size={'2'} label='نمایش در صفحه اصلی' checked={field.value} onCheckedChange={checked => field.onChange(checked)} />}
      />
    </Grid>
  );
};

export default TextContent;
