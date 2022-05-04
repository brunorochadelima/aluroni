import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Prato() {
  console.log(useLocation());
  return <div>Prato</div>;
}
