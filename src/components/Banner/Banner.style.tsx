import {createUseStyles} from 'react-jss'
export const styles=createUseStyles({
  banner:{
    display:'flex',
    padding:'0 .4rem',
    justifyContent:'center',
    backgroundColor:"#dddee3",
    height:'94vh'
  },
  bannerTxt:{
    width:'50%',
    margin:'0 5rem',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
  }
  ,
  prominentTxt:{
    fontSize:'4rem',
    color:'#56CBF9',
    margin:'1rem 0',
  },
  paragraph:{
    margin:'1rem 0',
    fontSize:'1.5rem',
    color:'#56CBF9'
  },
  bannerImg:{
    width:'50%',
    position:'relative',
    overflow:'hidden'
  },
  learnMore:{
    marginTop:'2rem',
    "& a":{
      position:'relative',
      fontSize:'1.6rem',
      fontWeight:800,
      color:'#56CBF9',
      textDecoration:'none',
      transition:'all .2s ease',
      top:0,
      "&:hover":{
        color:'#000',
        top:-5,
        }                      
      },
      "& div":{
        postion:'relative',
        width:35,
        height:35,
        marginLeft:20,
        textAlign:'center',
        borderRadius:20,
        display:'inline-block',
        backgroundColor:'#fff',
        transition:'all .3s ease',
      },
      "&:hover div":{
        height:30,
        width:30,
      }
      ,
      "&:hover span":{
          position:'relative',
          right:0,
      }
    },
  circle:{
    display:'inline-block',
  },
  roundBackground:{
    position:'absolute',
    width:1000,
    height:1000,
    borderRadius:1000,
    backgroundColor:"#6ccef6",
    transition:'all 2s ease',


    "&:hover":{
      marginLeft:'50px',
   

    }
    },
    roundForeground:{
      postion:'absolute',
      marginLeft:50,
      marginTop:100,
      backgroundColor:'#dddee3',
      height:800,
      width:800,
      borderRadius:1000,
    },
    roundImage:{
      position:'absolute',
      borderRadius:500,
      width:700,
      height:700,
      margin:'50px 0 0 50px',
      transition:'all 2s ease'
    },
    serviceContainer:{
      display:'flex',
      justifyContent:'space-between',
      backgroundColor:"#fff",
      height:"100vh"
    }
})