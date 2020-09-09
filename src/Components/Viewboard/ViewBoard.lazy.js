import React, { lazy, Suspense } from 'react';

const LazyViewBoard = lazy(() => import('./ViewBoard'));

const ViewBoard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewBoard {...props} />
  </Suspense>
);

export default ViewBoard;
