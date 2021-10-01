import {createUseStyles} from 'react-jss';
export const styles = createUseStyles({
model:{
  position:'fixed',
  top:0,
  left:0,
  bottom:0,
  right:0,
  background:'rgba(0,0,0,1)',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  zIndex:99,
"& h1":{
    color:'#000',
  fontSize:'2rem',
  padding:'1rem 2rem',
  background:'#ededed'
}
}
})