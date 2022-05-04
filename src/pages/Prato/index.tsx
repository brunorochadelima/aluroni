import React from 'react';
import { useParams } from 'react-router-dom';

export default function Prato() {
  console.log(useParams());
  return <div>Prato</div>;
}
