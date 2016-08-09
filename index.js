import React from 'react'

var Hello = React.createClass({
  render: function() {
    return <span>Hello</span>
  }
})

var World = React.createClass({
  render: function() {
    return <span>world!</span>
  }
})

export default React.createClass({
  render: function() {
    return <div><Hello/> <World/></div>
  }
})