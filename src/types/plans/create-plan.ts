export interface TripFormData {
  origin: {
    city: string;
    province: string;
  };
  destination: {
    city: string;
    province: string;
  };
  startTime: {
    time: null | Date;
    date: null | Date;
  };
  endTime: {
    time: null | Date;
    date: null | Date;
  };
  means_of_travel: string;
  place_of_residence: string;
  Type_of_tourist_place: number[];
  sortBy: string;
  number_Of_Adult_Passengers: string;
  number_Of_Child_Passengers: string;
  number_Of_Minor_Passengers: string;
  Type_Of_Passengers: string[];
  isExpand: boolean;
  justInside: boolean;
  max_date: null | Date;
  min_Date: null | Date;
  minTime: boolean;
  secondDate: Date | null;
  firstDate: Date | null;
  arrDateSame: null | boolean;
}

export const defaultFormValues: TripFormData = {
  max_date: null,
  arrDateSame: null,
  firstDate: null,
  min_Date: null,
  minTime: false,
  secondDate: null,
  origin: {
    city: '',
    province: '',
  },
  destination: {
    city: '',
    province: '',
  },
  startTime: {
    time: null,
    date: null,
  },
  endTime: {
    time: null,
    date: null,
  },
  means_of_travel: '',
  place_of_residence: '',
  Type_of_tourist_place: [],
  sortBy: '',
  number_Of_Adult_Passengers: '',
  number_Of_Child_Passengers: '',
  number_Of_Minor_Passengers: '',
  Type_Of_Passengers: [],
  isExpand: false,
  justInside: false,
};
