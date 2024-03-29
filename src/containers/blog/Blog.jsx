import React from 'react';
import './blog.css';
import Article from '../../components/article/Article'
import {blog01,blog02,blog03,blog04,blog05,} from './imports'
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>A lot is happening, We are blogging about.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="November 9th 2023" title="Placeholder title"/>
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="November 9th 2023" title="Placeholder title"/>
        <Article imgUrl={blog03} date="November 9th 2023" title="Placeholder title"/>
        <Article imgUrl={blog04} date="November 9th 2023" title="Placeholder title"/>
        <Article imgUrl={blog05} date="November 9th 2023" title="Placeholder title"/>
          </div>
      </div>
    </div>
  )
}

export default Blog
