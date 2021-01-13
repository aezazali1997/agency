import {createUseStyles} from 'react-jss'
export const styles=createUseStyles({
  navBar:{
    display:'flex',
    padding:'1rem 2rem',
    backgroundColor:'#7FBEEB',
    width:'100vw',
    justifyContent:'space-between',
    position:'fixed',
    zIndex:'999'
  },
  /* logo and name of the website */
  logoName:{
    display:'flex',
    alignItems:'center'
    
  },
  logo:{
    "& img":{
    width:50,
    height:50,
    margin :'.5rem .5rem 0 0'
    }
  }
  ,name:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  }
  ,tagLine:{
    fontSize:'2rem',
    margin:'0 .4rem',
    color:'#fff',
    fontWeight:600,
  }
  ,tagDescription:{
    fontSize:'1.1rem',
    margin:'0 1rem',
    color:'#fff',
  },
  agency:{
    fontWeight:800,
  }
  /* navlinks styling */
  ,
  linkContainer:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
     
  }
  ,navLink:{
    listStyleType:'none',
      "& li":{
        display:'inline-block',
        margin:'0 1rem',
          "& a":{
              textDecoration:'none',
              fontSize:'1.2rem',
              fontWeight:700,
              textTransform:'uppercase',
              color:'#fff',
              transition:' all .2s ease',
              "&:hover":{
                color:'#000'
              },
              "& img":{
                width:18,
                height:18,
                marginRight:'.4rem'
              }
      }
    }
  }
})