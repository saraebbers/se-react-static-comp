import React from 'react';
import Story from './Story';
import './Stories.css';
import Author from './Author';



const Stories = (props) => {
  return (
    <div className='Stories'>
      <div className='stories-header'>
        <h3>{props.stories.storiesTitle}</h3>
        <a href='#'>See more</a>
      </div>
      <div className='stories-grid'>
        {
          props.stories.map( (story, index) => {
                  console.log(story.authImg)
            return (
                <div>
                  <h3> {story.title} </h3>
                  <p className='story-info'> {story.desc} </p>
                  <img src={story.authImg} className='authImg' />
                </div>
              )
          })
        }
      </div>
    </div>
  )
}

export default Stories;
