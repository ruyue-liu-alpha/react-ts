// import axios from 'axios';
// import React, { Suspense, useEffect, useState } from 'react';

// const ComputedOne = React.lazy(() => import('Components/ComputedOne'));
// const ComputedTwo = React.lazy(() => import('Components/ComputedTwo'));

// function App() {
//   const [showTwo, setShowTwo] = useState<boolean>(false);
//   const [data, setData] = useState({});
//   const getData = async () => {
//     const result = await axios.get('http://history.muffinlabs.com/date/2/14');
//     setData(result);
//     console.log('res=', result);
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div className="app">
//       <Suspense fallback={<div>Loading...</div>}>
//         <ComputedOne a={2} b={3} />
//         {showTwo && <ComputedTwo a={3} b={4} />}
//         <button type="button" onClick={() => setShowTwo(true)}>
//           显示Two
//         </button>
//       </Suspense>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { add } from 'Utils/math';

function App() {
  return <div className="app">{add(5, 6)}</div>;
}

export default App;
