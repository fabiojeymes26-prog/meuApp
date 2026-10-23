import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('home');

  const handleSelectCategory = (categoryName: string) => {
    console.log('Categoria selecionada:', categoryName);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Barra superior de título */}
      <View style={styles.topHeaderBar}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Zezin Raposa</Text>
          <View style={styles.miniAvatar}>
            <Image
              source={{ uri: 'https://api.a0.dev/assets/image?text=pixel%20art%20fox%20icon&aspect=1:1' }}
              style={styles.fullImage}
            />
          </View>
        </View>
      </View>

      {/* Conteúdo com Imagem/Estilo de Fundo de Céu */}
      <View style={styles.mainContainer}>
        {/* Pipa/Papagaio decorativo no topo direito */}
        <View style={styles.kiteContainer}>
          <Image
            source={{ uri: 'https://api.a0.dev/assets/image?text=colorful%20kite%20illustration&aspect=1:1' }}
            style={styles.kiteImage}
            resizeMode="contain"
          />
        </View>

        {/* Nuvens Decorativas de Fundo */}
        <View style={[styles.cloud, styles.cloudTopLeft]} />
        <View style={[styles.cloud, styles.cloudBigCenter]} />

        {/* Seção de Botões Principais */}
        <View style={styles.menuContainer}>
          
          {/* Botão Superior: ABC / Alfabeto */}
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => handleSelectCategory('ABC')}
            activeOpacity={0.8}
          >
            <View style={[styles.circleIcon, styles.abcCircle]}>
              <Text style={styles.abcText}>ABC</Text>
            </View>
          </TouchableOpacity>

          {/* Segunda Linha: Matemática e Histórias */}
          <View style={styles.rowContainer}>
            
            {/* Botão Matemática (+ - x ÷) */}
            <TouchableOpacity
              style={[styles.cardButton, styles.halfCard]}
              onPress={() => handleSelectCategory('Matematica')}
              activeOpacity={0.8}
            >
              <View style={styles.mathGrid}>
                <View style={[styles.mathMiniCircle, { backgroundColor: '#A2C9EF' }]}>
                  <Text style={styles.mathSymbol}>+</Text>
                </View>
                <View style={[styles.mathMiniCircle, { backgroundColor: '#E88B88' }]}>
                  <Text style={styles.mathSymbol}>-</Text>
                </View>
                <View style={[styles.mathMiniCircle, { backgroundColor: '#F0D479' }]}>
                  <Text style={styles.mathSymbol}>×</Text>
                </View>
                <View style={[styles.mathMiniCircle, { backgroundColor: '#A3D9A5' }]}>
                  <Text style={styles.mathSymbol}>÷</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Botão Histórias (Livro) */}
            <TouchableOpacity
              style={[styles.cardButton, styles.halfCard]}
              onPress={() => handleSelectCategory('Historias')}
              activeOpacity={0.8}
            >
              <View style={styles.bookContainer}>
                <Image
                  source={{ uri: 'https://api.a0.dev/assets/image?text=cute%20blue%20storybook%20with%20sun%20and%20clouds&aspect=1:1' }}
                  style={styles.bookImage}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>

          </View>

        </View>
      </View>

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
            source={require('../../assets/images/tabIcons/home.png')}
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
            source={require('../../assets/images/tabIcons/icone-pata.png')}
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
    backgroundColor: '#BFE6FF', // Cor de fundo azul céu suave[cite: 14]
  },
  topHeaderBar: {
    height: 48,
    backgroundColor: '#A2D9F9',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: '#000',
    zIndex: 10,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0085FF',
    marginRight: 8,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  miniAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#000',
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 20,
  },
  kiteContainer: {
    position: 'absolute',
    top: 20,
    right: 30,
    width: 90,
    height: 120,
  },
  kiteImage: {
    width: '100%',
    height: '100%',
  },
  cloud: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    borderRadius: 100,
  },
  cloudTopLeft: {
    width: 180,
    height: 60,
    top: 10,
    left: -30,
  },
  cloudBigCenter: {
    width: 320,
    height: 140,
    bottom: 120,
  },
  menuContainer: {
    width: '100%',
    alignItems: 'center',
    zIndex: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  cardButton: {
    width: 140,
    height: 140,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#BBB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  halfCard: {
    width: '46%',
  },
  circleIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#5B8FB9',
  },
  abcCircle: {
    backgroundColor: '#72A0C1',
  },
  abcText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    letterSpacing: 2,
  },
  mathGrid: {
    width: 100,
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
  mathMiniCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  mathSymbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  bookContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookImage: {
    width: '100%',
    height: '100%',
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