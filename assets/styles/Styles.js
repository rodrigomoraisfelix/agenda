import {StyleSheet} from 'react-native';

export default StyleSheet.create({


        container: {
            flex: 1,
            alignItems:'center',
            
            backgroundColor:'#B0E0E6'
          
        },
        mes:{
            marginTop:10,
            backgroundColor:'#F0FFFF',
            width:320,
            padding:10  ,
        },
        data:{
            flexDirection: 'row',
            marginTop:20
        },
        titulo:{
            fontWeight:'bold',
            fontSize:15,
            marginBottom:10
        },
        containerDias:{
            justifyContent:'center'
        },
        dia:{
            marginTop:4 ,
            width:55,  
            fontWeight:'bold',
            fontSize:40,
            borderRightWidth:1,
            borderColor:'black'
        },
        informacao:{
            marginLeft:10,
            marginTop:5
        }      
});