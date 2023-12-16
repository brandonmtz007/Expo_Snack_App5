import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [resultado, setResultado] = useState('0');
  const [operacion, setOperacion] = useState(0);

  Calcular = (valor1, valor2, valor) => {
    if (!!valor1 && !!valor2) {
      const a = parseFloat(valor1);
      const b = parseFloat(valor2);
      if (valor == 0) {
        const c = a + b;
        setResultado(a + '+' + b + '=' + c);
      }
      if (valor == 1) {
        const c = a - b;
        setResultado(a + '-' + b + '=' + c);
      }
      if (valor == 2) {
        const c = a * b;
        setResultado(a + '*' + b + '=' + c);
      }
      if (valor == 3) {
        const c = a / b;
        setResultado(a + '/' + b + '=' + c);
      }
    } else {
      setResultado('Error!');
    }
  };

  var radio_props = [
    { label: 'Sumar', value: 0 },
    { label: 'Restar', value: 1 },
    { label: 'Multiplicar', value: 2 },
    { label: 'Dividir', value: 3 },
  ];

  return (
    <View style={{ padding: 10, fontSize: 24 }}>
      <Text
        style={{
          padding: 15,
          fontSize: 24,
          backgroundColor: 'orange',
          color: 'white',
          textAlign: 'center',
        }}>
        Calculadora con radio buttons
      </Text>

      <TextInput
        style={{
          height: 40,
          backgroundColor: 'blueviolet',
          color: 'white',
          fontWeight: 'bold',
          borderColor: 'green',
          borderWidth: 2,
          padding: 5,
          marginTop: 10,
        }}
        placeholder="Valor 1"
        placeholderTextColor="white"
        onChangeText={(text1) => setText1(text1)}
        keyboardType="numeric"
      />
      <TextInput
        style={{
          height: 40,
          backgroundColor: 'blueviolet',
          color: 'white',
          fontWeight: 'bold',
          borderColor: 'green',
          borderWidth: 2,
          padding: 5,
          marginTop: 5,
        }}
        placeholder="Valor 2"
        placeholderTextColor="white"
        onChangeText={(text2) => setText2(text2)}
        keyboardType="numeric"
      />

      <RadioForm
        style={{ marginTop: 10 }}
        radio_props={radio_props}
        initial={0}
        onPress={(value) => {
          setOperacion(value);
        }}
      />

      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 30,
        }}
        onPress={() => {
          Calcular(text1, text2, operacion);
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            textAlignVertical: 'center',
            textAlign: 'center',
            top: 12,
          }}>
          Calcular
        </Text>
      </TouchableOpacity>

      <Text style={{ padding: 10, fontSize: 32 }}>{resultado}</Text>
    </View>
  );
}
