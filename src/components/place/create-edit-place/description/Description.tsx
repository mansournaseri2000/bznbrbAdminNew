'use client';

import { useState } from 'react';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useFormContext, useWatch } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { Spinner } from '@radix-ui/themes';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { Button, Flex, Grid, Text } from '@/libs/primitives';
import { Detail } from '@/types/place/place-constant';

import Container from '../Container';

const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

type Props = {
  details: Detail[];
};

const Description = ({ details }: Props) => {
  const { setValue } = useFormContext();
  const PlaceDetails = useWatch({ name: 'PlaceDetails' });
  const [key, setKey] = useState<{ id: number; name: string }>(details[0]);

  const [editorStates, setEditorStates] = useState(
    details.reduce(
      (acc, field) => {
        const detail = PlaceDetails?.find((detail: { id: number }) => detail.id === field.id);

        if (detail && detail.description) {
          const blocksFromHTML = convertFromHTML(detail.description);
          const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
          acc[field.id] = EditorState.createWithContent(contentState);
        } else {
          acc[field.id] = EditorState.createEmpty();
        }

        return acc;
      },
      {} as { [key: number]: EditorState }
    )
  );

  // Function to handle editor state change
  const handleEditorStateChange = (id: number, newState: EditorState) => {
    setEditorStates({
      ...editorStates,
      [id]: newState,
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const PlaceDetails = details
      .map(field => {
        const contentState = editorStates[field.id].getCurrentContent();
        const descriptions = draftToHtml(convertToRaw(contentState)).trim(); // Convert to HTML and trim spaces

        // Return only if descriptions is not an empty string
        if (descriptions !== '<p></p>' && descriptions !== '') {
          return {
            detailId: field.id,
            descriptions,
          };
        }

        return null;
      })
      .filter(detail => detail !== null);

    setValue('PlaceDetails', PlaceDetails);
  };

  return (
    <>
      <Container height='max-content' title='توضیحات'>
        <Grid height={'max-content'} gap={'16px'} pb={'20px'}>
          {/* Render the tabs for editor fields */}
          <Flex py={'24px'} gap={'16px'} overflowX={'auto'}>
            {details.map(item => (
              <Button type='button' key={item.id} onClick={() => setKey(item)} variant={key.name === item.name ? 'soft' : 'solid'} size={'4'}>
                <Text>{item.name}</Text>
              </Button>
            ))}
          </Flex>

          {/* Render the selected editor */}
          <Grid gap={'16px'}>
            <Flex justify={'between'} align={'center'}>
              <Text>{key.name}</Text>
              <Button style={{ width: 'max-content', minWidth: '150px' }} variant='soft' size={'4'} type='button' onClick={handleSubmit}>
                <Text>ثبت</Text>
              </Button>
            </Flex>
            <Editor
              editorStyle={{
                minHeight: '150px',
                overflow: 'auto',
                border: '1px solid #00000046',
                borderRadius: '8px',
                padding: '8px',
                position: 'static',
                height: 'fit-content',
              }}
              editorState={editorStates[key.id]} // Set the correct editor state for the selected key
              toolbarClassName='toolbarClassName'
              wrapperClassName='wrapperClassName'
              editorClassName='editorClassName'
              onEditorStateChange={newState => handleEditorStateChange(key.id, newState)}
              placeholder={key.name}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Description;
