import React from 'react'
import { useLocation } from "react-router-dom";


export default function Thanks() {
  let history = useLocation();
  return (
    <div>
      {JSON.stringify(history)}
    </div>
  )
}
