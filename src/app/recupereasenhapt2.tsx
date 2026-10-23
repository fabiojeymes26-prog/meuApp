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

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleResetPassword = () => {
    // Lógica para redefinir a senha e fazer login
    router.replace('/');
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
              <Text style={styles.speechText}>informe sua{'\n'}nova senha</Text>
            </View>
          </View>

          {/* Campos do Formulário */}
          <View style={styles.formContainer}>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>codigo</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#999"
                value={codigo}
                onChangeText={setCodigo}
                keyboardType="number-pad"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>nova senha</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#999"
                secureTextEntry
                value={novaSenha}
                onChangeText={setNovaSenha}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>confirmar senha</Text>
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#999"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
            </View>

          </View>

          {/* Botão Login */}
          <TouchableOpacity style={styles.button} onPress={handleResetPassword} activeOpacity={0.8}>
            <Text style={styles.buttonText}>login</Text>
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
    backgroundColor: '#EBEBEB', // Fundo cinza claro da tela[cite: 13]
  },
  topBar: {
    height: 40,
    backgroundColor: '#A2D9F9', // Azul claro do topo[cite: 13]
    width: '100%',
  },
  bottomBar: {
    height: 40,
    backgroundColor: '#A2D9F9', // Azul claro da parte inferior[cite: 13]
    width: '100%',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
    marginBottom: 20,
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
    borderRadius: 25, // Campos com bordas arredondadas[cite: 13]
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#0085FF', // Azul vibrante do botão[cite: 13]
    height: 52,
    width: '80%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#000',
    marginTop: 10,
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