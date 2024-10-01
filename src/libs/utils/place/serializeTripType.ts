
type TripType = {
  id: number;
  name: string;
  score: number;
};


export const serializeTripType = (tripTypes: TripType[]) => {
  console.log(tripTypes,"tripTypestripTypestripTypes");
  
  return tripTypes.map(tripType => ({
    tripTypeId: tripType.id,
    score: tripType.score,
  }));
};