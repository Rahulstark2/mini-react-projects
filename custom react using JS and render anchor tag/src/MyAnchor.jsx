import React from 'react';

function MyAnchor({ href, children }) {
  return (
    <a href={href} className="text-blue-500 hover:text-blue-800 underline">
      {children}
    </a>
  );
}

export default MyAnchor;
