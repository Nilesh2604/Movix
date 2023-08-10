import React from 'react'
import { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/contentWrapper.jsx'
import VideoPopup from '../../../components/videoPopup/VideoPopup'
import Img from '../../../components/lazyLoadimage/img.jsx'
import { PlayIcon } from '../PlayIcon'
import "./style.scss"


const VideosSection = ({data,loading}) => {
const [show,setShow]=useState();
const [videoId,setVideoId]=useState(null);

const loadingSkeleton=()=>{
    return (
        <div className="skItem">
            <div className="thumb skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row2 skeleton"></div>
        </div>
    )

}


  return (
    <div className="videosSection">
        <ContentWrapper>
            <div className="sectionHeading">
                Official Videos
            </div>
            {!loading?(
                <div className="videos">
                   {data?.results?.map((video)=>(
                    <div 
                    key={video.id}
                    className="videoItem"
                    onClick={()=>{
                        setVideoId(video.key);
                        setShow(true)
                    }}>
                        <div className='videoThumbnail'>
                            <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}/>
                            <PlayIcon/>
                        </div>
                        <div className="videoTitle">
                            {video.name}
                        </div>
                    </div>


                   ))}
                </div>

            ):(
                <div className="videoSkeleton">
                    {loadingSkeleton()}
                    {loadingSkeleton()}
                    {loadingSkeleton()}
                    {loadingSkeleton()}
                    {loadingSkeleton()}
                </div>
            )}
        </ContentWrapper>
        <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
        />
    </div>
  )
}

export default VideosSection