import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SampleHome: React.VFC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} // アンマウント時
    >
      <div>
        <nav>
          <ul>
            <li>
              <Link to="page1">Sample Page1</Link>
            </li>
            <li>
              <Link to="page2">Sample Page2</Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};
