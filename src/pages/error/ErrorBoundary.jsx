// import React, { useState } from 'react';
// import PageNotFound from './PageNotFound';

// function ErrorBoundary(props) {
//     const [hasError, setHasError] = useState(false);

//     function handleCatch(error, errorInfo) {
//         console.error('Error:', error, errorInfo);
//         setHasError(true);
//     }

//     if (hasError) {
//         return <PageNotFound />;
//     }

//     return <React.Fragment>{props.children}</React.Fragment>;
// }

// export default ErrorBoundary;