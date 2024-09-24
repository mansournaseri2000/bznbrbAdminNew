'use client';

import { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Controller, useFormContext } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { convertToRaw, EditorState, RawDraftContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { Button, Flex, Grid, Modal, Text, TextArea, TextField } from '@/libs/primitives';
import { details } from '@/types/place';

import Container from '../Container';

const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false });

interface SubmittedData {
  detailId: number;
  descriptions: string;
}

const editorFields = [
  { id: 5, name: 'زمان مناسب بازدید' },
  { id: 13, name: 'نکات منفی' },
  { id: 2, name: 'تاریخچه ' },
  { id: 14, name: 'منبع' },
  { id: 7, name: 'پیشنهاد ویژه' },
  { id: 9, name: 'امکانات ویژه' },
  { id: 3, name: 'ویژگی‌ها' },
  { id: 10, name: 'وسایل مورد نیاز' },
  { id: 12, name: 'نکات مثبت' },
  { id: 1, name: 'مشخصات' },
  { id: 6, name: 'سانس‌ها ' },
  { id: 4, name: 'سیمای عمومی' },
  { id: 11, name: 'سایر اطلاعات' },
];

type Props = {
  details: details[];
};

const Description = ({ details }: Props) => {
  const [editorStates, setEditorStates] = useState<Record<number, EditorState>>(
    editorFields.reduce(
      (acc, field) => {
        acc[field.id] = EditorState.createEmpty();
        return acc;
      },
      {} as Record<number, EditorState>
    )
  );
  console.log(details);

  const [descriptionItems, setDescriptionItems] = useState([
    { id: 1, title: 'عنوان', description: 'لورم اپیسوم متن ساختگی' },
    { id: 2, title: 'عنوان', description: 'لورم اپیسوم متن ساختگی' },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const { control } = useFormContext();

  const handleEditorStateChange = (id: number, newState: EditorState) => {
    setEditorStates(prevStates => ({
      ...prevStates,
      [id]: newState,
    }));
  };

  console.log(descriptionItems);

  const handleRemoveItem = (id: number) => {
    setDescriptionItems(prevItems => prevItems.filter(item => item.id !== id));
    // Optionally, you can also clear the editor state for the removed item
    setEditorStates(prevStates => {
      const newStates = { ...prevStates };
      delete newStates[id]; // Remove editor state for the deleted item
      return newStates;
    });
  };

  const handleSubmit = () => {
    const data: SubmittedData[] = editorFields.reduce<SubmittedData[]>((acc, field) => {
      const rawContent: RawDraftContentState = convertToRaw(
        editorStates[field.id]?.getCurrentContent() || EditorState.createEmpty().getCurrentContent()
      );
      const htmlContent: string = draftToHtml(rawContent);
      const isEmpty = !rawContent.blocks.some(block => block.text.trim() !== '');

      if (!isEmpty) {
        acc.push({
          detailId: field.id,
          descriptions: htmlContent,
        });
      }

      return acc;
    }, []);

    console.log(data);
  };

  return (
    <>
      <Container height='auto' title='توضیحات'>
        <Grid height={'max-content'} gap={'16px'}>
          {/* <Button style={{ width: 'max-content' }} variant='soft' size={'4'} onClick={() => setIsOpen(true)}>
            <Text>افزودن توضیح</Text>
          </Button> */}
          <Grid gap={'16px'}>
            {editorFields.map(field => (
              <Grid
                overflow={'hidden'}
                p={'16px'}
                gap={'16px'}
                key={field.id}
                style={{ border: '1px solid #000', borderRadius: '8px' }}
              >
                <Flex align={'center'} justify={'between'}>
                  <Text>{field.name}</Text>
                  <Button size={'4'} variant='soft' type='button' onClick={() => handleRemoveItem(field.id)}>
                    حذف مورد
                  </Button>
                </Flex>
                <Editor
                  editorStyle={{ minHeight: '200px', overflow: 'auto' }}
                  editorState={editorStates[field.id]}
                  toolbarClassName='toolbarClassName'
                  wrapperClassName='wrapperClassName'
                  editorClassName='editorClassName'
                  onEditorStateChange={newState => handleEditorStateChange(field.id, newState)}
                />
              </Grid>
            ))}
          </Grid>
          <Button variant='soft' size={'4'} type='button' onClick={handleSubmit}>
            <Text>ثبت</Text>
          </Button>
        </Grid>
      </Container>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Grid gap={'8px'}>
          <Controller
            name='pointName'
            control={control}
            render={({ field }) => <TextField {...field} placeholder='نام عنوان' aria-label='textFiled' />}
          />
          <Controller
            name='summary_of_the_description'
            control={control}
            render={({ field }) => <TextArea {...field} placeholder='خلاصه توضیحات' aria-label='TextArea' />}
          />
          <Grid gap={'16px'} columns={'2'}>
            <Button variant='soft' size={'4'}>
              <Text>ثبت</Text>
            </Button>
            <Button type='button' onClick={() => setIsOpen(false)} variant='solid' size={'4'}>
              <Text>انصراف</Text>
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default Description;

/**
 * styled-component
 * _______________________________________________________________________________
 */

{
  /* <Grid gap={'16px'}>
{descriptionItems.map(item => (
  <DescriptionCard key={item.id} title={item.title} description={item.description} />
))}
</Grid> */
}
