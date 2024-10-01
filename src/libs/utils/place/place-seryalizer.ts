import { placeWorkTimeSchedule } from '@/constants/place';

type Category = {
  id: number;
  name: string;
  score: number;
};

export const serializeCategories = (categories: Category[]) => {
  return categories.map(category => ({
    categoryId: category.id,
    score: category.score,
  }));
};

type TripSeason = {
  id: number;
  name: string;
  score: number;
  timing: number | undefined;
};

export const serializeTripSeasons = (tripSeasons: TripSeason[]) => {
  return tripSeasons.map(tripSeason => ({
    tripSeasonId: tripSeason.id,
    score: tripSeason.score,
    timing: tripSeason.timing,
  }));
};

type TripLimitation = {
  id: number;
  name: string;
  score: number;
};

export const serializeTripLimitations = (tripLimitations: TripLimitation[]) => {
  return tripLimitations.map(tripLimitation => ({
    tripLimitationId: tripLimitation.id,
    score: tripLimitation.score,
  }));
};

type PlaceWorkTimes = {
  dayOfWeek: string;
  type: string;
  isTimed: boolean;
  timing: { time: string; key: string; faKey: string }[];
}[];

// Serializer function
export const serializePlaceWorkTimeSchedule = (schedule: typeof placeWorkTimeSchedule): PlaceWorkTimes => {
  return schedule.map(day => ({
    dayOfWeek: day.dayOfWeek,
    type: day.type.find(statusItem => statusItem.key === (day.isTimed ? 'timed' : 'open' || 'closed'))?.key || '',
    isTimed: day.isTimed,
    timing: day.timing.map(timingItem => ({
      time: timingItem.time,
      key: timingItem.key,
      faKey: timingItem.faKey,
    })),
  }));
};

type InputType = { id: number; name: string; description: string };
type OutputType = { detailId: number; descriptions: string };

export const detailsSerializerForEdit = (inputArray: InputType[]): OutputType[] => {
  return inputArray.map(item => ({
    detailId: item.id,
    descriptions: item.description,
  }));
};

type PlaceWorkTimeItem = {
  id: number;
  placeId: number;
  dayOfWeek: string;
  firstOpenTime: string;
  secondOpenTime: string;
  firstCloseTime: string;
  secondCloseTime: string;
  type: string | null;
};

type SerializedPlaceWorkTimeItem = {
  dayOfWeek: string;
  faDay: string;
  isTimed: boolean;
  timing: {
    time: string;
    key: string;
    faKey: string;
  }[];
  type: 'OPEN' | 'TIMED' | 'CLOSED';
};

export function serializePlaceWorkTime(placeWorkTime: PlaceWorkTimeItem[]): SerializedPlaceWorkTimeItem[] {
  const dayTranslations: { [key: string]: string } = {
    SATURDAY: 'شنبه',
    SUNDAY: 'یک‌شنبه',
    MONDAY: 'دوشنبه',
    TUESDAY: 'سه‌شنبه',
    WEDNESDAY: 'چهارشنبه',
    THURSDAY: 'پنج‌شنبه',
    FRIDAY: 'جمعه',
  };

  const timingKeys: { [key: string]: string } = {
    firstOpenTime: 'ساعت شروع اول',
    secondOpenTime: 'ساعت شروع دوم',
    firstCloseTime: 'ساعت پایان اول',
    secondCloseTime: 'ساعت پایان دوم',
  };

  return placeWorkTime.map((item): SerializedPlaceWorkTimeItem => {
    const isTimed = item.firstOpenTime !== '00:00' && item.secondOpenTime !== '00:00' && item.firstCloseTime !== '00:00' && item.secondCloseTime !== '00:00';
    const type: 'OPEN' | 'TIMED' | 'CLOSED' = isTimed ? 'TIMED' : item.firstOpenTime === '00:00' && item.firstCloseTime === '00:00' ? 'CLOSED' : 'OPEN';

    return {
      dayOfWeek: item.dayOfWeek,
      faDay: dayTranslations[item.dayOfWeek] || item.dayOfWeek,
      isTimed,
      timing: [
        { time: item.firstOpenTime, key: 'firstOpenTime', faKey: timingKeys.firstOpenTime },
        { time: item.secondOpenTime, key: 'secondOpenTime', faKey: timingKeys.secondOpenTime },
        { time: item.firstCloseTime, key: 'firstCloseTime', faKey: timingKeys.firstCloseTime },
        { time: item.secondCloseTime, key: 'secondCloseTime', faKey: timingKeys.secondCloseTime },
      ],
      type,
    };
  });
}

type SerializedTiming = {
  dayOfWeek: string;
  faDay: string;
  isTimed: boolean;
  timing: {
    time: string | null;
    key: string;
    faKey: string;
  }[];
  type: 'open' | 'timed' | 'closed';
};

type FlattenedPlaceWorkTime = {
  dayOfWeek: string;
  faDay: string;
  isTimed: boolean;
  firstOpenTime: string | null;
  secondOpenTime: string | null;
  firstCloseTime: string | null;
  secondCloseTime: string | null;
  type: 'open' | 'timed' | 'closed';
};

export function flattenPlaceWorkTime(placeWorkTime: SerializedTiming[]): FlattenedPlaceWorkTime[] {
  return placeWorkTime.map(item => {
    const times: { [key: string]: string | null } = {
      firstOpenTime: null,
      secondOpenTime: null,
      firstCloseTime: null,
      secondCloseTime: null,
    };

    // Process each timing key and assign it to the correct property
    item.timing.forEach(timingItem => {
      times[timingItem.key] = timingItem.time;
    });

    return {
      dayOfWeek: item.dayOfWeek,
      faDay: item.faDay,
      isTimed: item.isTimed,
      firstOpenTime: times.firstOpenTime,
      secondOpenTime: times.secondOpenTime,
      firstCloseTime: times.firstCloseTime,
      secondCloseTime: times.secondCloseTime,
      type: item.type.toLowerCase() as 'open' | 'timed' | 'closed',
    };
  });
}

// Example usage: