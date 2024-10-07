import React from 'react';

import MainWebContent from '@/components/web-content/main/MainWebContent';
import PlannerWebContent from '@/components/web-content/planner/PlannerWebContent';
import TopPointsWebContent from '@/components/web-content/top-points/TopPointsWebContent';

export default function WebContent({ params }: { params: { slug: 'main' | 'planner' | 'top-points' } }) {
  const renderElement = (key: 'main' | 'planner' | 'top-points') => {
    switch (key) {
      case 'main':
        return <MainWebContent />;
      case 'planner':
        return <PlannerWebContent />;
      case 'top-points':
        return <TopPointsWebContent />;
      default:
        return null;
    }
  };
  return renderElement(params.slug);
}
