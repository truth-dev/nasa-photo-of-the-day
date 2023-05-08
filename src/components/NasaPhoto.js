import React from 'react';

import styled, {keyframes} from 'styled-components'


const kf = keyframes`
50%{
    opacity: 1;
    transform: scale(1) rotateY(0);
}
`

const StyledDetails = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 8px;
border-bottom: 4px solid black;

background-color: ${pr => pr.theme.primaryColor};
p.explanation{
    display: flex;
   
    color: ${props => props.theme.white};
    display: flex;
    padding: 8px;
    border-top: 2px ;
    border-left: 2px ;
    border-right: 2px ;
    border-bottom: 2px ;
    border-color: solid white;
    border-style: inset;
    animation:${kf} 0.5s ease-in-out forwards;

}

h3{

  color: ${props =>props.theme.titleColor}; 
  display: flex;
  padding: 8px;
  border-top: 2px ;
  border-left: 2px ;
  border-right: 2px ;
  border-bottom: 2px ;
  border-color: solid white;
  border-style: inset;

}

img{
    width: 30%;
 


}

p{
    color:${props => props.theme.dateColor}

}

`

const NasaPhoto = (props) => {
    return(
        
   <StyledDetails className='nasa-photo-wrapper'>
    <h3>{props.photo.title}</h3>
    <p>{props.photo.date}</p>
    <img src={props.photo.hdurl}/>
    <p className='explanation'>{props.photo.explanation}</p>
   </StyledDetails>
    )
}
export default NasaPhoto;