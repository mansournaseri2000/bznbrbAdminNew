type FeatureItem = {
  id: number;
  name: string;
  en_name: string | null;
};

type FeatureCategory = {
  title: string;
  id: number;
  items: FeatureItem[];
};

export const serializeFeatures = (features: FeatureCategory[]) => {
  const serialized: { featureId: number }[] = [];

  // Iterate over each feature category
  features?.forEach(category => {
    // Iterate over each item in the category
    category?.items.forEach(item => {
      // Push the serialized feature object
      serialized.push({ featureId: item.id });
    });
  });

  return serialized;
};
