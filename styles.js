import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100vh',
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    width:200,
    height: 350,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cronometro:{
    width: 200,
    height: 250,
  },
  numero:{
    position: 'relative',
    marginTop: -220,
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    zIndex: 1,
  },
  buttons:{
    width: 150,
    height: 40,
    flexDirection:'row',
    marginTop: 0,
    justifyContent: 'space-between',
  },
  btn1:{
    width: 72,
    height: 35,
    textAlign:'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 20,
    padding: 5,
    fontWeight: 'bold', 
  },
  btn2:{
    width: 72,
    height: 35,
    textAlign:'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 50,
    padding: 5, 
  },
  btnText:{
    fontWeight: 'bold',
  },
  tempoAnterior:{
    marginTop: 20,
  },
  tempoAnteriorText:{
    fontSize: 25,
    color: 'white',
  }
});
