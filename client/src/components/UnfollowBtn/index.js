import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'


function UnfollowBtn(props) {
return(
<Button className="float-right" variant="danger" id={props.id}>Unfollow</Button>
)
}

export default UnfollowBtn