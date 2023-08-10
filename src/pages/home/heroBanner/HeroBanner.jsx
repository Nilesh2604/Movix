import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch'
import { useSelector} from 'react-redux/es/hooks/useSelector';
import Img from '../../../components/lazyLoadimage/img';
import ContentWrapper from '../../../components/contentWrapper/contentWrapper.jsx';
const HeroBanner = () => {
const [background,setbackground]=useState("");
const [query,setQuery]=useState("");
const navigate=useNavigate();
const {url}=useSelector((state)=>state.home)

const {data,loading}=useFetch("/movie/upcoming");
useEffect(()=>{

  const bg=url.backdrop + data?.results[Math.floor(Math.random()*20)].backdrop_path
   setbackground(bg)
},[data])

const searchQueryHandler=(e)=>{
  if(query.length>0 && event.key==="Enter"){
    navigate(`/search/${query}`)

  }
}
const searchQueryHandlerButton=(e)=>{
  if(query.length>0){
    navigate(`/search/${query}`)

  }
}

  return (
      <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button  
                          onClick={searchQueryHandlerButton}>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};
export default HeroBanner