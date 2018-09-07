import React from 'react';
// import Button from './Button';
import './Story.css';
import Author from './Author';

const Story = (props) => {
  console.log(props);
  return (
    <div className='Story'>
      <img src={props.image} />
      <div className='story-info'>
        <h3 className='story-info' >{props.title}</h3>
        <p className='story-info' >{props.desc}</p>
        <Author 
          authName={props.authName}
          authImg={props.authImg}
          estTime={props.estTime}
          />
      </div>
    </div>
  )
}

export default Story;