import { createContext, useContext } from 'react';

interface State {
  provinceID: number | null;
  plannerData: any | null;
}

interface ProvinceContextType {
  state: State;
  setProvinceID: (id: number) => void;
  updatePlannerData: (data: any) => void;
}

// Set initial state with provinceID = 8 and optional plannerData
const getInitialState = (initialPlannerData: any | null): State => ({
  provinceID: 8,
  plannerData: initialPlannerData,
});

// Create context with default values to avoid null errors
const ProvinceContext = createContext<ProvinceContextType>({
  state: getInitialState(null),
  setProvinceID: () => {},
  updatePlannerData: () => {},
});

// Custom hook to use Province context
export const useProvince = (): ProvinceContextType => {
  const context = useContext(ProvinceContext);
  if (!context) {
    throw new Error('useProvince must be used within a ProvinceProvider');
  }
  return context;
};
