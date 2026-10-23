import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Platform,
  TextInput,
} from 'react-native';

// Lista de itens disponíveis na loja/inventário
const ITEMS = [
  { id: 'pirate_hat', category: 'hat', name: 'Chapéu de Pirata', icon: 'https://api.a0.dev/assets/image?text=pixel%20art%20pirate%20hat&aspect=1:1' },
  { id: 'sleep_mask', category: 'face', name: 'Mascara de Dormir', icon: 'https://api.a0.dev/assets/image?text=pixel%20art%20sleep%20mask%20green&aspect=1:1' },
  { id: 'sunglasses', category: 'eyes', name: 'Óculos de Sol', icon: 'https://api.a0.dev/assets/image?text=pixel%20art%20sunglasses%20orange&aspect=1:1' },
  { id: 'mask_purple', category: 'face', name: 'Máscara Roxa', icon: 'https://api.a0.dev/assets/image?text=pixel%20art%20carnival%20mask%20purple&aspect=1:1' },
  { id: 'mask_fox', category: 'face', name: 'Máscara Raposa', icon: 'https://api.a0.dev/assets/image?text=pixel%20art%20fox%20mask&aspect=1:1' },
  { id: 'mask_gold', category: 'face', name: 'Máscara Dourada', icon: 'https://api.a0.dev/assets/image?text=pixel%20art%20gold%20mask&aspect=1:1' },
  { id: 'badge_blue', category: 'accessory', name: 'Broche Azul', icon: 'https://api.a0.dev/assets/image?text=pixel%20art%20blue%20badge&aspect=1:1' },
  { id: 'helmet_astro', category: 'hat', name: 'Capacete Espacial', icon: 'https://api.a0.dev/assets/image?text=pixel%20art%20space%20helmet&aspect=1:1' },
  { id: 'backpack', category: 'accessory', name: 'Mochila', icon: 'https://api.a0.dev/assets/image?text=pixel%20art%20backpack&aspect=1:1' },
];

type InventoryItem = (typeof ITEMS)[number];

export default function CustomizationScreen() {
  const router = useRouter();
  const [petName, setPetName] = useState('zezin raposa');
  const [isEditingName, setIsEditingName] = useState(false);
  
  // Itens atualmente equipados (máximo 4 slots)
  const [equippedItems, setEquippedItems] = useState<InventoryItem[]>([
    ITEMS[0], // Chapéu de Pirata
    ITEMS[1], // Máscara de Dormir
    ITEMS[2], // Óculos
  ]);

  const [activeTab, setActiveTab] = useState('settings');

  // Função para equipar ou desequipar um item
  const toggleEquipItem = (item: InventoryItem) => {
    const isAlreadyEquipped = equippedItems.some((e) => e.id === item.id);

    if (isAlreadyEquipped) {
      // Remove o item se já estiver equipado
      setEquippedItems(equippedItems.filter((e) => e.id !== item.id));
    } else {
      // Se não excedeu o limite de 4 slots, adiciona
      if (equippedItems.length < 4) {
        setEquippedItems([...equippedItems, item]);
      } else {
        // Se já tem 4 itens, substitui o último
        const updated = [...equippedItems];
        updated[3] = item;
        setEquippedItems(updated);
      }
    }
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

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Seção Nome do Personagem */}
        <View style={styles.nameSection}>
          <Text style={styles.nameLabel}>Nome: </Text>
          {isEditingName ? (
            <TextInput
              style={styles.nameInput}
              value={petName}
              onChangeText={setPetName}
              onBlur={() => setIsEditingName(false)}
              autoFocus
            />
          ) : (
            <TouchableOpacity onPress={() => setIsEditingName(true)}>
              <Text style={styles.nameText}>{petName}</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.divider} />

        {/* Área Central: Mascote e Slots da Direita */}
        <View style={styles.mainCustomizationArea}>
          
          {/* Visualização do Mascote */}
          <View style={styles.mascotDisplayContainer}>
            <Image
              source={require('../../assets/images/zezin-explica.png')}
              style={styles.mascotImage}
              resizeMode="contain"
            />
          </View>

          {/* Slots de Equipados (4 Caixas no lado direito) */}
          <View style={styles.slotsContainer}>
            {[0, 1, 2, 3].map((index) => {
              const item = equippedItems[index];
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.slotBox, item && styles.slotBoxActive]}
                  onPress={() => item && toggleEquipItem(item)}
                  activeOpacity={0.7}
                >
                  {item && (
                    <Image source={{ uri: item.icon }} style={styles.itemIcon} resizeMode="contain" />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

        </View>

        <View style={styles.divider} />

        {/* Inventário / Seleção de Acessórios (Grade Inferior) */}
        <View style={styles.inventoryContainer}>
          <View style={styles.inventoryGrid}>
            {ITEMS.map((item) => {
              const isEquipped = equippedItems.some((e) => e.id === item.id);
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.inventoryItem, isEquipped && styles.inventoryItemEquipped]}
                  onPress={() => toggleEquipItem(item)}
                  activeOpacity={0.7}
                >
                  <Image source={{ uri: item.icon }} style={styles.itemIcon} resizeMode="contain" />
                </TouchableOpacity>
              );
            })}
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
    backgroundColor: '#EBEBEB',
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
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 80,
    alignItems: 'center',
  },
  nameSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  nameLabel: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
  nameText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  nameInput: {
    fontSize: 20,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingHorizontal: 4,
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#BBB',
    marginVertical: 14,
  },
  mainCustomizationArea: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  mascotDisplayContainer: {
    width: 200,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mascotImage: {
    width: '100%',
    height: '100%',
  },
  slotsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 220,
  },
  slotBox: {
    width: 52,
    height: 52,
    backgroundColor: '#EBEBEB',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slotBoxActive: {
    borderColor: '#0085FF',
    borderWidth: 2,
    backgroundColor: '#FFF',
  },
  inventoryContainer: {
    width: '100%',
    marginTop: 10,
  },
  inventoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inventoryItem: {
    width: 60,
    height: 60,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 4,
  },
  inventoryItemEquipped: {
    backgroundColor: 'rgba(0, 133, 255, 0.15)',
    borderWidth: 1.5,
    borderColor: '#0085FF',
    borderRadius: 8,
  },
  itemIcon: {
    width: 44,
    height: 44,
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