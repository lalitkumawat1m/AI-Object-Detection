"use client";

import Webcam from "react-webcam"
import {useRef,useEffect} from "react";

const ObjectDetection = () => {
    const webcamRef=useRef(null);

const showmyVideo =()=>{
    if(webcamRef.current!==null && webcamRef.current.video?.readyState===4){
        const myVideoWidth=webcamRef.current.video.videoWidth;
        const myVideoHeight=webcamRef.current.video.VideoHeight;

        webcamRef.current.video.width = myVideoWidth;
        webcamRef.current.video.height = myVideoHeight;
    }
}

useEffect(()=>{
    showmyVideo();

},[]);

  return (
    <div className="mt-8">
        <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
        <Webcam
        ref={webcamRef}
        className="rounded-md w-full lg:h-[720px]"
        muted
        />
        </div>
    </div>
  )
}
export default ObjectDetection