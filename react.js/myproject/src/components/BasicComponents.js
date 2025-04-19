import React from 'react'
const data = "learn more about react.js";
const styles = {color:'green'};

export default function BasicComponents() {
  return (
    <h2 style={{color:styles.color}}>{data}</h2>
  )
}
