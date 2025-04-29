'use client';

import { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useFormContext, useWatch } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { Spinner } from '@radix-ui/themes';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { Grid, Text } from '@/libs/primitives';
import { Detail } from '@/types/place/place-constant';

const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

type Props = {
  details: Detail[];
};

const Description = ({ details }: Props) => {
  const { setValue, getValues } = useFormContext();
  const PlaceDetails = useWatch({ name: 'PlaceDetails' });

  const [editorStates, setEditorStates] = useState(
    details.reduce((acc, field) => {
      const existingDetail = PlaceDetails?.find((detail: { detailId: number }) => detail.detailId === field.id);

      if (existingDetail?.descriptions) {
        const blocksFromHTML = convertFromHTML(existingDetail.descriptions);
        const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
        acc[field.id] = EditorState.createWithContent(contentState);
      } else {
        acc[field.id] = EditorState.createEmpty();
      }

      return acc;
    }, {} as { [key: number]: EditorState })
  );

  const handleEditorStateChange = (id: number, newState: EditorState) => {
    setEditorStates(prev => ({
      ...prev,
      [id]: newState,
    }));

    const contentState = newState.getCurrentContent();
    const descriptions = draftToHtml(convertToRaw(contentState)).trim();

    if (descriptions === '<p></p>' || descriptions === '') return;

    const updatedDetails = getValues('PlaceDetails') || [];
    const updatedIndex = updatedDetails.findIndex((detail: { detailId: number }) => detail.detailId === id);

    if (updatedIndex !== -1) {
      updatedDetails[updatedIndex].descriptions = descriptions;
    } else {
      updatedDetails.push({ detailId: id, descriptions });
    }

    setValue('PlaceDetails', updatedDetails, { shouldDirty: true });
  };

  return (
    <Grid height='max-content' gap='24px' pb='24px' style={{ padding: '16px' }}>
      {/* Render ALL editors */}
      {details.map(item => (
        <Grid key={item.id} gap='8px'>
          <Text as='label' size='4' weight='bold'>
            {item.name}
          </Text>

          <Editor
            editorStyle={{
              minHeight: '144px',
              overflow: 'auto',
              border: '1px solid #CDCED7',
              borderRadius: '8px',
              padding: '8px',
              position: 'static',
              height: 'fit-content',
              direction: 'ltr',
            }}
            toolbar={{
              fontFamily: {
                options: ['IRANSansXFaNum-Regular'],
                defaultFontFamily: 'IRANSansXFaNum-Regular',
              },
              remove: {
                show: false,
              },
            }}
            editorState={editorStates[item.id]}
            toolbarClassName='toolbarClassName'
            wrapperClassName='wrapperClassName'
            editorClassName='editorClassName'
            onEditorStateChange={newState => handleEditorStateChange(item.id, newState)}
            placeholder={item.name}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Description;
