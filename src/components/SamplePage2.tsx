import React from 'react';
import { Link } from 'react-router-dom';

export const SamplePage2: React.VFC = () => {
  return (
    <div>
      <h3>Sample Page 2</h3>
      <Link to="/">Home</Link>
    </div>
  );
};
