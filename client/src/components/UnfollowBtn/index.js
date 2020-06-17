import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import { handleUnfollow, removeFollower } from '../../utils/accountsAPI'



function UnfollowBtn(props) {

   const [disabled, setDisabled] = useState(false)
   const [btn, setBtn] = useState("Unfollow")

const handleClick = (id) => {
   console.log(id)
   handleUnfollow(id)
   removeFollower(id)
   setDisabled(true)
   setBtn("Unfollowed")
}

return(
<Button className="float-right" variant="danger" disabled={disabled} id={props.id} onClick={() => handleClick((props.id))}>{btn}</Button>
)
}

export default UnfollowBtn