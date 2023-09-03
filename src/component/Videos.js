import React from "react";
import videos from "../Css/Videos.css";
import { Button } from "@mui/material";
 
const Videos=()=>{
    return(
        <>
<h3>Watch the live videos from my official Youtube channel</h3>
<div className="iframe">
<iframe width="560" 
height="315" src="https://www.youtube.com/embed/vhd2LoLyjm8?si=Xg25vnT5WM-gMipy" title="YouTube video player" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/lJojYpcQryM?si=WT3R029O-UFFiLwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<h3>Watch the latest videos from my official Youtube channel</h3>
<div className="iframe">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0vjmVeSY8jM?si=sfT9KQT7GRJ6-dmp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Na0HD-sEy24?si=wZmF9mf_RixefLzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
{/* <Button>Open Youtube to watch videos and subscribe for update</Button> */}
<input type="submit" value="Open Youtube to watch videos and subscribe for update" className="button"/>
{/* <Same btn="Open Youtube to subscribe"/> */}
        </>
    )
}

export default Videos;