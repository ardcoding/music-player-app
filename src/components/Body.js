import React, { Component } from 'react'
import Songs from './Songs'
import TopSongs from './TopSongs'

export default class Body extends Component {
  render() {
    return (
      <div className='w-10/12 m-auto flex'>
        <Songs className='w-3/12'/>
        <TopSongs className="w-7/12"/>
      </div>
    //   <div className='w-10/12 m-auto flex' style={{border:"2px solid green"}}>
    //     <Songs className='w-3/12' style={{border:"2px solid red"}}/>
    //     <TopSongs className="w-7/12" style={{border:"2px solid yellow"}}/>
    //   </div>
    )
  }
}
