import { Suspense } from 'react';
import RoutesSetting from './Routes';

function App() {
  return (
    <Suspense fallback={<div />}>
      <RoutesSetting />
    </Suspense>
  );
}

export default App;
