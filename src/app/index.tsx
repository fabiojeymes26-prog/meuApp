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
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [apelido, setApelido] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica para entrar
    router.replace('/home');
  };

  const handleNavigateToRegister = () => {
    // Lógica para ir para a tela de cadastro
    router.push('/cadastro');
  };

  const handleForgotPassword = () => {
    // Lógica para recuperar senha
    router.push('/recupereasenhapt1');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Barra superior azul */}
      <View style={styles.topBar} />

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
            <Text style={styles.speechText}>informe sua{'\n'}conta</Text>
          </View>
        </View>

        {/* Campos do Formulário */}
        <View style={styles.formContainer}>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>apelido</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#999"
              value={apelido}
              onChangeText={setApelido}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>senha</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#999"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
            
            {/* Link Esqueceu a senha */}
            <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordText}>esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* Botão Entrar */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleLogin} activeOpacity={0.8}>
          <Text style={styles.primaryButtonText}>entrar</Text>
        </TouchableOpacity>

        {/* Botão Cadastrar */}
        <TouchableOpacity style={styles.secondaryButton} onPress={handleNavigateToRegister} activeOpacity={0.8}>
          <Text style={styles.secondaryButtonText}>cadastrar</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Barra inferior azul */}
      <View style={styles.bottomBar} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBEBEB', // Fundo cinza claro da tela[cite: 3]
  },
  topBar: {
    height: 40,
    backgroundColor: '#A2D9F9', // Azul claro do topo[cite: 3]
    width: '100%',
  },
  bottomBar: {
    height: 40,
    backgroundColor: '#A2D9F9', // Azul claro da parte inferior[cite: 3]
    width: '100%',
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
    marginBottom: 16,
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
    borderRadius: 25, // Bordas bem arredondadas como na imagem[cite: 3]
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-start',
    marginTop: 6,
    marginLeft: 4,
  },
  forgotPasswordText: {
    color: '#0033CC',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  primaryButton: {
    backgroundColor: '#0085FF', // Azul vibrante do botão entrar[cite: 3]
    height: 52,
    width: '80%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#000',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    letterSpacing: 1,
  },
  secondaryButton: {
    backgroundColor: '#738693', // Tom cinza/azulado do botão cadastrar[cite: 3]
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
  secondaryButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    letterSpacing: 1,
  },
});