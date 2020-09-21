import React from 'react';


const Footer=()=> {
    const year= new Date().getFullYear();
  return (
    <>
    <p className="foot">copyright © {year}</p>
 </>
  );
}

export default Footer;
