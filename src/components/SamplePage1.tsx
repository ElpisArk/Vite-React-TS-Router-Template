import React from 'react';
import { Link } from 'react-router-dom';

export const SamplePage1: React.VFC = () => {
  return (
    <div>
      <h3>Sample Page 1</h3>
      <Link to="/">Home</Link>
    </div>
  );
};
