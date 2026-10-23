import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    // Lógica para enviar o código de recuperação
    router.push('/recupereasenhapt2');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Barra superior azul */}
      <View style={styles.topBar} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          
          {/* Seção do mascote e balão de fala */}
          <View style={styles.headerSection}>
            <View style={styles.mascotContainer}>
              <Image
                source={require('../../assets/images/zezin-explica.png')}
                style={styles.mascotImage}
                resizeMode="contain"
              />
            </View>

            {/* Balão de fala pixelado */}
            <View style={styles.speechBubble}>
              <Text style={styles.speechText}>informe seu{'\n'}email</Text>
            </View>
          </View>

          {/* Campo de e-mail */}
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>email</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* Botão Enviar Código */}
          <TouchableOpacity style={styles.button} onPress={handleSendCode} activeOpacity={0.8}>
            <Text style={styles.buttonText}>enviar codigo</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>

      {/* Barra inferior azul */}
      <View style={styles.bottomBar} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBEBEB', // Fundo cinza claro da tela[cite: 12]
  },
  topBar: {
    height: 40,
    backgroundColor: '#A2D9F9', // Azul claro do topo[cite: 12]
    width: '100%',
  },
  bottomBar: {
    height: 40,
    backgroundColor: '#A2D9F9', // Azul claro da parte inferior[cite: 12]
    width: '100%',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    width: '100%',
  },
  mascotContainer: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mascotImage: {
    width: '100%',
    height: '100%',
  },
  speechBubble: {
    borderWidth: 4,
    borderColor: '#000',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  speechText: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
    fontWeight: '500',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  input: {
    height: 48,
    backgroundColor: '#EAEAEA',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 25, // Campo arredondado[cite: 12]
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#0085FF', // Azul vibrante do botão[cite: 12]
    height: 52,
    width: '80%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 3,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    letterSpacing: 1,
  },
});