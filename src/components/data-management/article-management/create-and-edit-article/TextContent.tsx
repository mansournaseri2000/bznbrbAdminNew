import React, { useEffect, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Controller, useFormContext } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { Spinner } from '@radix-ui/themes';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { Button, Checkbox, Flex, Grid, Text, TextArea } from '@/libs/primitives';
import { typoVariant } from '@/theme/typo-variants';

// Import debounce to prevent excessive updates

const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false,
  loading: () => <Spinner />,
});

type Props = {
  data: any;
  state: any;
};

const TextContent = ({ data, state }: Props) => {
  const { control, setValue, watch } = useFormContext();

  const [editorStateTable, setEditorStateTable] = useState(EditorState.createEmpty());
  const detailTable = watch('tableOfContent');

  // Local state for the `content` editor
  const [editorStateContent, setEditorStateContent] = useState(EditorState.createEmpty());
  const detailContent = watch('content');

  // Initialize editor state when form values change (e.g., page load)
  useEffect(() => {
    if (detailTable && detailTable !== '') {
      const blocksFromHTML = convertFromHTML(detailTable);
      const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
      setEditorStateTable(EditorState.createWithContent(contentState));
    }
  }, [detailTable, data, state]);

  useEffect(() => {
    if (detailContent && detailContent !== '') {
      const blocksFromHTML = convertFromHTML(detailContent);
      const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
      setEditorStateContent(EditorState.createWithContent(contentState));
    }
  }, [detailContent, data, state]);

  // Handle changes in the `tableOfContent` editor content
  const handleEditorChangeTable = (newEditorState: EditorState) => {
    setEditorStateTable(newEditorState);
  };

  // Handle changes in the `content` editor content
  const handleEditorChangeContent = (newEditorState: EditorState) => {
    setEditorStateContent(newEditorState);
  };

  // Handle submit action
  const onSubmit = () => {
    // Extract content from both editors
    const contentStateTable = editorStateTable.getCurrentContent();
    const descriptionsTable = draftToHtml(convertToRaw(contentStateTable)).trim();

    const contentStateContent = editorStateContent.getCurrentContent();
    const descriptionsContent = draftToHtml(convertToRaw(contentStateContent)).trim();

    // Update form state with both editor content
    setValue('tableOfContent', descriptionsTable); // Update `tableOfContent`
    setValue('content', descriptionsContent); // Update `content`
  };

  return (
    <Grid width={'100%'} gapY={'5'}>
      <Controller name='brief' control={control} render={({ field }) => <TextArea {...field} placeholder='خلاصه مقاله' rows={4} />} />
      <Controller name='summery' control={control} render={({ field }) => <TextArea {...field} placeholder='summery' rows={4} />} />

      {/* Table of Content Editor */}
      <Flex direction={'column'} gap={'4'}>
        <Button style={{ width: 'max-content', marginInlineStart: 'auto' }} size={'4'} type='button' variant='soft' onClick={onSubmit}>
          <Text {...typoVariant.body1}>ثبت اطلاعات </Text>
        </Button>
        <Controller
          name='tableOfContent'
          control={control}
          render={() => <Editor editorState={editorStateTable} onEditorStateChange={handleEditorChangeTable} wrapperClassName='demo-wrapper' editorClassName='demo-editor' />}
        />
      </Flex>

      <Controller
        name='content'
        control={control}
        render={() => <Editor editorState={editorStateContent} onEditorStateChange={handleEditorChangeContent} wrapperClassName='demo-wrapper' editorClassName='demo-editor' />}
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
