'use client';

import { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useFormContext, useWatch } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { Spinner } from '@radix-ui/themes';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { Button, Flex, Grid, Text } from '@/libs/primitives';
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

  const [key, setKey] = useState<{ id: number; name: string }>(details[0]);

  const [editorStates, setEditorStates] = useState(
    details.reduce((acc, field) => {
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
    <>
      <Grid height={'max-content'} gap={'16px'} pb={'20px'}>
        {/* Render the tabs for editor fields */}
        <Flex py={'24px'} gap={'8px'} overflowX={'scroll'}>
          {details.map(item => (
            <Button type='button' key={item.id} onClick={() => setKey(item)} variant={key.name === item.name ? 'soft' : 'solid'} size={'4'}>
              <Text>{item.name}</Text>
            </Button>
          ))}
        </Flex>

        {/* Render the selected editor */}
        <Grid gap={'16px'}>
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
              fontFamily: ("inherit") , 
            }}
            toolbar={{
              fontFamily: {
                options: [""],
              },
            }}
            editorState={editorStates[key.id]}
            toolbarClassName='toolbarClassName'
            wrapperClassName='wrapperClassName'
            editorClassName='editorClassName'
            onEditorStateChange={newState => handleEditorStateChange(key.id, newState)}
            placeholder={key.name}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Description;
