import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Styles from './assets/styles/Styles';

export default function App() {
  return (
    <View style={Styles.container}>
      {/* formatação do mes */}
      <View style={Styles.mes}>
        <Text style={Styles.titulo}>Dezembro</Text>


        {/* formataçao todas as informaçoes dentro do dia */}
        <View style={Styles.data}>  
        {/* formataçao dia do mes */}
          <Text style={Styles.dia}>12</Text>
          <View style={Styles.containerDias}>
            {/* Datas comemorativa */}
            <Text style={Styles.informacao}>Meu Ániversário</Text>
          </View>
        </View>


        {/* formataçao todas as informaçoes dentro do dia */}
        <View style={Styles.data}>  
        {/* formataçao dia do mes */}
          <Text style={Styles.dia}>25</Text>
           {/* Datas comemorativa */}
          <View style={Styles.containerDias}>
            <Text style={Styles.informacao}>Nátal</Text>
          </View>
        </View>

         {/* formataçao todas as informaçoes dentro do dia */}
         <View style={Styles.data}>  
        {/* formataçao dia do mes */}
          <Text style={Styles.dia}>31</Text>
           {/* Datas comemorativa */}
          <View style={Styles.containerDias}>
            <Text style={Styles.informacao}>Ano Novo</Text>
          </View>
        </View>


      {/*fechamento do mes */}
      </View>
      <View style={Styles.mes}>
        <Text style={Styles.titulo}>Janeiro</Text>


        {/* formataçao todas as informaçoes dentro do dia */}
        <View style={Styles.data}>  
        {/* formataçao dia do mes */}
          <Text style={Styles.dia}>1</Text>
          <View style={Styles.containerDias}>
            {/* Datas comemorativa */}
            <Text style={Styles.informacao}>Tudo De Novo(Infelizmente)</Text>
          </View>
        </View>     
      {/*fechamento do mes */}
      </View>
      <View style={Styles.mes}>
        <Text style={Styles.titulo}>Fevereiro</Text>


        {/* formataçao todas as informaçoes dentro do dia */}
        <View style={Styles.data}>  
        {/* formataçao dia do mes */}
        
          <Text style={Styles.dia}>28</Text>
          <View style={Styles.containerDias}>
            {/* Datas comemorativa */}
            <Text style={Styles.informacao}>Mês Random do Caraio</Text>
            <Text style={Styles.informacao}>Existe pra que?</Text>
          </View>
        </View>     
      {/*fechamento do mes */}
      </View>
    </View>
  );
}

