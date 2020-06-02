import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import { handleUnfollow, removeFollower } from '../../utils/accountsAPI'


function UnfollowBtn(props) {

const handleClick = (id) => {
   console.log(id)
}

return(
<Button className="float-right" variant="danger" id={props.id} onClick={() => handleClick((props.id))}>Unfollow</Button>
)
}

export default UnfollowBtn