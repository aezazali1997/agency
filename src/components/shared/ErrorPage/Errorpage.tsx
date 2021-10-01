import React from 'react'
import {styles} from './ErrorPage.style'
import errorImage from '../../../images/404.png'
type Props = {
  setNav:(value:boolean) => void
}
export const Errorpage:React.FC<Props> = ({setNav}) => {
  const classes=styles();
  setNav(false)
  return (
    <div>
      <img className={classes.wrapper} src={errorImage} alt="" />
    </div>
  )
}
