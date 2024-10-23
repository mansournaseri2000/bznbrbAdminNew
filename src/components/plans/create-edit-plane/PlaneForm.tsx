'use client';

import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { CaretDownIcon } from '@radix-ui/react-icons';
import { Popover, SegmentedControl } from '@radix-ui/themes';

import { CityOptions, passengersNumberOptions, passengersTypeOptions, planResidenceOptions, StateOptions, touristPlaceTypeConstant, tourVehicleOptions } from '@/constants/plans';
import { Button, CheckboxGroup, Container, Flex, Grid, Heading, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import DatePickerComponent from '@/libs/shared/CustomDatePicker';
import TimePickerComponent from '@/libs/shared/CustomTimePicker';
import { colorPalette } from '@/theme';

const PlaneForm = () => {
  const methods = useForm({
    defaultValues: {
      mabdaState: '',
      mabdaCity: '',
      maqsadState: '',
      maqsadCity: '',
      startDate: '',
      startTime: '',
      returnDate: '',
      returnTime: '',
      tourVehicle: '',
      planResidence: '',
      touristPlaceType: [{ featureId: 1 }, { featureId: 2 }, { featureId: 3 }, { featureId: 4 }, { featureId: 5 }],
      adultPassengers: '',
      childPassengers: '',
      minorPassengers: '',
      passengersType: [{ featureId: 1 }, { featureId: 2 }, { featureId: 3 }, { featureId: 4 }, { featureId: 5 }],
    },
  });
  const {
    control,
    watch,
    formState: { errors },
  } = methods;

  const router = useRouter();

  console.log('Watch', watch());

  console.log('touristPlaceTypeOptions', touristPlaceTypeConstant);
  return (
    <FormProvider {...methods}>
      <Flex width={'100%'} direction={'column'} gap={'4'} p={'5'}>
        <Flex width={'100%'} direction={'column'} gap={'2'}>
          <Heading>آدرس مبدا</Heading>
          <Flex width={'100%'} gap={'4'}>
            <Controller
              name='mabdaState'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder='استان'
                  size={'3'}
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {StateOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />

            <Controller
              name='mabdaCity'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder=' شهر'
                  size={'3'}
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {CityOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />
          </Flex>
        </Flex>
        <Flex width={'100%'} direction={'column'} gap={'2'}>
          <Heading>آدرس مقصد</Heading>
          <Flex width={'100%'} gap={'4'}>
            <Controller
              name='maqsadState'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder=' استان'
                  size={'3'}
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {StateOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />

            <Controller
              name='maqsadCity'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder=' شهر'
                  size={'3'}
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {CityOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />
          </Flex>
        </Flex>
        <Container height='auto' title='تاریخ و ساعت حرکت'>
          <Grid gap={'4'} columns={'2'}>
            <Flex direction={'column'} gap={'2'}>
              <Heading mb={'2'}>تاریخ و ساعت حرکت</Heading>
              <Grid gap={'4'} columns={'2'}>
                <DatePickerComponent inputMode='none' placeholder='تاریخ حرکت' name='birthDate' errorText={errors.startDate?.message} />
                <TimePickerComponent errorText={errors.startTime?.message} name='startTime' inputMode='none' />
              </Grid>
            </Flex>
            <Flex direction={'column'} gap={'2'}>
              <Heading mb={'2'}>تاریخ و ساعت بازگشت</Heading>
              <Grid gap={'4'} columns={'2'}>
                <DatePickerComponent inputMode='none' placeholder='تاریخ بازگشت' name='returnDate' errorText={errors.returnDate?.message} />
                <TimePickerComponent errorText={errors.returnTime?.message} name='startTime' inputMode='none' />
              </Grid>
            </Flex>
          </Grid>
        </Container>

        <Flex width={'100%'} direction={'column'} gap={'2'}>
          <Heading>وسیله و اسکان</Heading>
          <Flex width={'100%'} gap={'4'}>
            <Controller
              name='tourVehicle'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder='وسیله سفر'
                  size={'3'}
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {tourVehicleOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />

            <Controller
              name='planResidence'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder='محل اسکان'
                  size={'3'}
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {planResidenceOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />
          </Flex>
        </Flex>

        <Container height='auto' title='گردشگری'>
          <Heading mb={'2'}>گردشگری</Heading>
          <Grid height={'max-content'} gap={'16px'} columns={'2'}>
            {touristPlaceTypeConstant.map((item, index) => (
              <Popover.Root key={index}>
                <Popover.Trigger>
                  <Button
                    style={{
                      paddingInline: '15px',
                      borderRadius: '8px',
                      border: `1px solid ${colorPalette.gray[7]}`,
                      color: colorPalette.gray[9],
                      backgroundColor: '#fff',
                    }}
                    variant='solid'
                    size={'4'}
                  >
                    <Flex align={'center'} width={'100%'} justify={'between'}>
                      <Text>{item.name}</Text>
                      <CaretDownIcon style={{ scale: 1.5 }} />
                    </Flex>
                  </Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Flex direction={'column'}>
                    <CheckboxGroup store='touristPlaceType' items={item.features} isRow={false} />
                  </Flex>
                </Popover.Content>
              </Popover.Root>
            ))}

            <SegmentedControl.Root size={'3'} style={{ width: '100%' }}>
              <SegmentedControl.Item value='پربازدید'>پربازدید</SegmentedControl.Item>
              <SegmentedControl.Item value='معمولی'>معمولی</SegmentedControl.Item>
              <SegmentedControl.Item value='بکر و ناشناختع'>بکر و ناشناخته</SegmentedControl.Item>
            </SegmentedControl.Root>
          </Grid>
        </Container>

        <Container height='auto' title='مسافران'>
          <Heading mb={'2'}>مسافران</Heading>
          <Grid height={'max-content'} gap={'16px'} columns={'4'} align={'center'}>
            <Controller
              name='adultPassengers'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder='تعداد مسافرین بزرگسال'
                  size={'3'}
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {passengersNumberOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />
            <Controller
              name='childPassengers'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder='تعداد مسافرین کودک'
                  size={'3'}
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {passengersNumberOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />
            <Controller
              name='minorPassengers'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder='تعداد مسافرین خردسال'
                  size={'3'}
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {passengersNumberOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />
            {passengersTypeOptions.map((item, index) => (
              <Popover.Root key={index}>
                <Popover.Trigger>
                  <Button
                    style={{
                      paddingInline: '15px',
                      borderRadius: '8px',
                      border: `1px solid ${colorPalette.gray[7]}`,
                      color: colorPalette.gray[9],
                      backgroundColor: '#fff',
                    }}
                    variant='solid'
                    size={'4'}
                  >
                    <Flex align={'center'} width={'100%'} justify={'between'}>
                      <Text>{item.name}</Text>
                      <CaretDownIcon style={{ scale: 1.5 }} />
                    </Flex>
                  </Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Flex direction={'column'}>
                    <CheckboxGroup store='passengersType' items={item.features} isRow={false} />
                  </Flex>
                </Popover.Content>
              </Popover.Root>
            ))}
          </Grid>
        </Container>
        <Flex gap={'4'}>
          <Button size={'3'}>ثبت و ساخت</Button>
          <Button size={'3'} onClick={() => router.push('/plans')}>
            لغو و بازگشت
          </Button>
        </Flex>
      </Flex>
    </FormProvider>
  );
};

export default PlaneForm;
