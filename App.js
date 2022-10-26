import { StatusBar } from "expo-status-bar";
import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default class App extends Component{

  state = {
    number: 0,
    botao: 'Começar',
    ultimo: null,
  }
  controle = null;

  startTimer = ()=>{
   
    if(this.controle != null){
      clearInterval(this.controle);
      this.controle = null;

      this.setState({botao: 'Retomar'});
    }else{
      this.controle = setInterval(()=>{
        this.setState( {number: this.state.number + 0.1} )
      },100);
      this.setState({botao: 'Parar'});
    }
  }

  cleanUpTimer = () => {
    if(this.controle != null){
      clearInterval(this.controle);
      this.controle = null;
    }
    this.setState({ultimo: this.state.number, number: 0, botao: 'Retomar'});
  }



  render(){
    return(

      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Image
                source={require('./src/img/cronometro.png')}
                style={styles.cronometro}
              />
              <Text style={styles.numero}>{this.state.number.toFixed(1)}</Text>
          </View>

            
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.btn1} onPress={this.startTimer}>
                <Text style={styles.btnText}>{this.state.botao}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn2} onPress={this.cleanUpTimer}>
                <Text style={styles.btnText}>Zerar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.tempoAnterior}>
              <Text style={styles.tempoAnteriorText}>
                {this.state.ultimo > 0 ? 'Tempo anterior: ' + this.state.ultimo.toFixed(2) + 's' : ''}  
              </Text>
            </View>
        </View>
      </View>
    );
  }
}
