import React, { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { Spinner } from '@radix-ui/themes';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { Checkbox, Grid, TextArea } from '@/libs/primitives';

// Import debounce to prevent excessive updates

const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

const TextContent = () => {
  const items = [
    {
      name: 'سرفصل های مقاله',
      id: 1,
    },
    {
      name: 'متن مقاله',
      id: 2,
    },
  ];

  const { setValue, getValues, control, watch } = useFormContext();
  const PlaceDetails = useWatch({ name: 'articleDetail' });

  const [editorStates, setEditorStates] = useState(
    items.reduce((acc, field) => {
      const detail = PlaceDetails?.find((detail: { detailId: number }) => detail.detailId === field.id);

      if (detail && detail.descriptions) {
        const blocksFromHTML = convertFromHTML(detail.descriptions);
        const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
        acc[field.id] = EditorState.createWithContent(contentState);
      } else {
        acc[field.id] = EditorState.createEmpty();
      }

      return acc;
    }, {} as { [key: number]: EditorState })
  );

  // Function to handle editor state change and update descriptions dynamically
  const handleEditorStateChange = (id: number, newState: EditorState) => {
    setEditorStates(prev => ({
      ...prev,
      [id]: newState,
    }));

    // Convert editor content to HTML
    const contentState = newState.getCurrentContent();
    const descriptions = draftToHtml(convertToRaw(contentState)).trim();

    // Prevent updating if content is empty
    if (descriptions === '<p></p>' || descriptions === '') return;

    // Update PlaceDetails in react-hook-form
    const updatedDetails = getValues('articleDetail') || [];
    const updatedIndex = updatedDetails.findIndex((detail: { detailId: number }) => detail.detailId === id);

    if (updatedIndex !== -1) {
      updatedDetails[updatedIndex].descriptions = descriptions;
    } else {
      updatedDetails.push({ detailId: id, descriptions });
    }

    setValue('articleDetail', updatedDetails, { shouldDirty: true });
  };

  console.log(watch());

  return (
    <Grid width={'100%'} gapY={'5'}>
      <Controller name='brief' control={control} render={({ field }) => <TextArea {...field} placeholder='متن روی کارت' rows={4} />} />
      <Controller name='summery' control={control} render={({ field }) => <TextArea {...field} placeholder='چکیده مقاله' rows={4} />} />

      <Grid>
        {items.map(item => {
          return (
            <Editor
              key={item.id}
              editorStyle={{
                minHeight: '144px',
                overflow: 'auto',
                border: '1px solid #CDCED7',
                borderRadius: '8px',
                padding: '8px',
                position: 'static',
                height: 'fit-content',
              }}
              editorState={editorStates[item.id]}
              toolbarClassName='toolbarClassName'
              wrapperClassName='wrapperClassName'
              editorClassName='editorClassName'
              onEditorStateChange={newState => handleEditorStateChange(item.id, newState)}
              placeholder={item.name}
            />
          );
        })}
      </Grid>

      <Controller
        name='isSlider'
        control={control}
        render={({ field }) => <Checkbox {...field} size={'2'} label='نمایش در صفحه اصلی' checked={field.value} onCheckedChange={checked => field.onChange(checked)} />}
      />
    </Grid>
  );
};

export default TextContent;
