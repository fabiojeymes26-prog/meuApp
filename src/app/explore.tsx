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

export default function ProfileScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('João Silva');
  const [idade, setIdade] = useState('22');
  const [senha, setSenha] = useState('********');
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('paws');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Barra superior azul */}
      <View style={styles.topBar} />

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Cabeçalho: Avatar e Nível */}
        <View style={styles.headerSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/logo-zezin.jpg')}
              style={styles.avatarImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.nivelContainer}>
            <Text style={styles.label}>Nivel</Text>
            <View style={styles.nivelBox}>
              <Text style={styles.nivelText}>LVL. 5</Text>
            </View>
          </View>
        </View>

        {/* Campos do Formulário */}
        <View style={styles.formContainer}>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={nome}
              editable={isEditing}
              onChangeText={setNome}
              placeholderTextColor="#777"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Idade</Text>
            <TextInput
              style={styles.input}
              value={idade}
              editable={isEditing}
              keyboardType="numeric"
              onChangeText={setIdade}
              placeholderTextColor="#777"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>senha</Text>
            <TextInput
              style={styles.input}
              value={senha}
              editable={isEditing}
              secureTextEntry={!isEditing}
              onChangeText={setSenha}
              placeholderTextColor="#777"
            />
          </View>

        </View>

        {/* Botão Editar Informações */}
        <TouchableOpacity style={styles.button} onPress={handleEditToggle} activeOpacity={0.8}>
          <Text style={styles.buttonText}>
            {isEditing ? 'Salvar Informações' : 'Editar Informações'}
          </Text>
        </TouchableOpacity>

        {/* Seção de Missões */}
        <View style={styles.missionsSection}>
          <Text style={styles.sectionTitle}>MISSOES</Text>
          <View style={styles.missionsCard}>
            
            <View style={styles.missionItem}>
              <Text style={styles.missionText}>1- complete 1 missão</Text>
            </View>

            <View style={styles.missionItem}>
              <Text style={styles.missionText}>2- suba ate o nivel 5</Text>
              <Text style={styles.checkIcon}> ✓</Text>
            </View>

            <View style={styles.missionItem}>
              <Text style={styles.missionText}>3- complete 10 missões</Text>
            </View>

          </View>
        </View>

      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'home' && styles.activeTab]} 
          onPress={() => {
            setActiveTab('home');
            router.replace('/home');
          }}
        >
          <Image
            source={require('@/assets/images/tabIcons/home.png')}
            style={styles.tabIcon}
            accessibilityLabel="Início"
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'paws' && styles.activeTab]} 
          onPress={() => {
            setActiveTab('paws');
            router.replace('/explore');
          }}
        >
          <Image
            source={require('@/assets/images/tabIcons/icone-pata.png')}
            style={styles.tabIcon}
            accessibilityLabel="Explorar"
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'settings' && styles.activeTab]} 
          onPress={() => {
            setActiveTab('settings');
            router.replace('/personalização');
          }}
        >
          <Text style={styles.tabIconText} accessibilityLabel="Personalização">⚙</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  topBar: {
    height: 40,
    backgroundColor: '#A2D9F9',
    width: '100%',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 80,
    alignItems: 'center',
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  avatarContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#000',
    overflow: 'hidden',
    backgroundColor: '#A2D9F9',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  nivelContainer: {
    flex: 1,
    marginLeft: 20,
  },
  nivelBox: {
    height: 48,
    backgroundColor: '#C5D0CD',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginTop: 4,
  },
  nivelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  formContainer: {
    width: '100%',
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 15,
    color: '#000',
    marginBottom: 4,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  input: {
    height: 48,
    backgroundColor: '#C5D0CD',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  button: {
    backgroundColor: '#0085FF',
    height: 46,
    width: '65%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#000',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 3,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  missionsSection: {
    width: '100%',
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  missionsCard: {
    width: '100%',
    backgroundColor: '#C5D0CD',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 12,
    padding: 16,
    minHeight: 180,
  },
  missionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  missionText: {
    fontSize: 16,
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  checkIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#A2D9F9',
    flexDirection: 'row',
    borderTopWidth: 1.5,
    borderTopColor: '#000',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1.5,
    borderRightColor: '#000',
  },
  tabIcon: {
    width: 28,
    height: 28,
    tintColor: '#000',
  },
  tabIconText: {
    fontSize: 28,
    lineHeight: 32,
    color: '#000',
  },
  activeTab: {
    backgroundColor: '#91C8E8',
  },
});