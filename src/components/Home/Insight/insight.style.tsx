import {createUseStyles} from 'react-jss'
export const styles=createUseStyles({
  container:{
    padding:'4rem 1rem'
  },
  col:{
    display:'flex',
    height:600,
  },
  textSpaceLeft:{
    margin:"3rem 0 0 5rem",
  },
  titleText:{
    fontSize:'3.5rem'
  },
  imgContainer:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-end',
    margin:1,
  },
  darkContainer:{
    backgroundColor:'#252b34',
    display:"flex",
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center',
    padding:'0 5rem',
  },
  imgoffice:{
    height:300,
  },
  anchorHeading:{
    textDecoration:'none',
    color:'#fff',
    margin:'1rem 0',
    fontSize:'1.242rem',
    "&:hover,&:active":{
      textDecoration:'underline',
    
    },
  },
  writtenBY:{
      color:"#fff",
      "& span":{
        color:"#7fbeeb",
        fontWeight:700,
        marginLeft:5
      }
    },
    blueBackground:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      padding:"0 3rem",
      width:900,
      backgroundColor:'#015492',
      margin:1,
      "& a":{
        textDecoration:'none',
        color:"#fff",
        "&:hover, &:active":{
          textDecoration:'underline'
        }
      },
      "& p":{
        color:"#fff",
        fontSize:'1.2rem',
        "& span":{
          fontWeight:800,
          marginLeft:5,
        }
      }
    },
    secondCol:{
      display:"flex",
    },

})