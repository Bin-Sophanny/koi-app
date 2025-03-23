import React, { useRef, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";

const categories = [
  { id: "best-sellers", title: "Best Sellers", image: require("../assets/like_color.png") },
  { id: "chewy-tea", title: "Chewy Tea", image: require("../assets/chewy_tea.png")},
  { id: "milk-tea", title: "Milk Tea", image: require("../assets/milk_tea.png")},
  { id: "signature-macchiato", title: "Signature Macchiato", image: require("../assets/signature_drink.png")},
  { id: "flavored-tea", title: "Flavored Tea & Juice", image: require("../assets/flavor_tea.png")},
  { id: "handmade-cafe", title: "Handmade Cafe" },
];

const items = {
  "best-sellers": Array(5).fill({ name: "Yakult Green Tea", price: "$2", image: require("../assets/yakult.png") }),
  "chewy-tea": Array(5).fill({ name: "Yakult Green Tea", price: "$2", image: require("../assets/yakult.png") }),
  "milk-tea": Array(5).fill({ name: "Yakult Green Tea", price: "$2", image: require("../assets/yakult.png") }),
  "signature-macchiato": Array(5).fill({ name: "Yakult Green Tea", price: "$2", image: require("../assets/yakult.png") }),
  "flavored-tea": Array(9).fill({ name: "Yakult Green Tea", price: "$2", image: require("../assets/yakult.png") }),
  "handmade-cafe": Array(8).fill({ name: "Yakult Green Tea", price: "$2", image: require("../assets/yakult.png") }),
};

const MenuScreen = () => {
  const rightScrollViewRef = useRef(null);
  const leftScrollViewRef = useRef(null);
  const sectionRefs = useRef({});
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const sectionLayouts = useRef({});

  const scrollToSection = (section) => {
    if (sectionRefs.current[section]) {
      sectionRefs.current[section].measureLayout(
        rightScrollViewRef.current,
        (x, y) => {
          rightScrollViewRef.current.scrollTo({ y, animated: true });
          setActiveCategory(section);

          setTimeout(() => {
            const categoryIndex = categories.findIndex((cat) => cat.id === section);
            if (categoryIndex !== -1) {
              leftScrollViewRef.current.scrollTo({
                y: categoryIndex * 60,
                animated: true,
              });
            }
          }, 100);
        }
      );
    }
  };

  const handleRightPanelScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    let newActiveCategory = activeCategory;
    categories.forEach((category) => {
      const layout = sectionLayouts.current[category.id];
      if (layout && offsetY >= layout.y - 20 && offsetY < layout.y + layout.height) {
        newActiveCategory = category.id;
      }
    });

    if (newActiveCategory !== activeCategory) {
      setActiveCategory(newActiveCategory);
    }
  };

  return (
    <View style={styles.container}>
      {/* Left Panel */}
      <View style={styles.leftPane}>
        <ScrollView
          ref={leftScrollViewRef}
          contentContainerStyle={styles.categoryList}
          showsVerticalScrollIndicator={false}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => scrollToSection(category.id)}
              style={styles.categoryButton}
              activeOpacity={0.7}
            >
              {/* Icon and Text Container */}
              <View style={styles.iconTextContainer}>
                <Image
                  source={category.image || null}
                  style={[styles.categoryIcon, activeCategory !== category.id && { tintColor: "gray" }]}
                />
                <Text style={[
                  styles.categoryItem,
                  activeCategory === category.id && styles.activeCategory
                ]}>
                  {category.title}
                </Text>
              </View>

              {/* Vertical Indicator */}
              {activeCategory === category.id && (
                <View style={styles.verticalIndicator} />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Right Panel */}
      <View style={styles.rightPane}>
        <ScrollView
          ref={rightScrollViewRef}
          contentContainerStyle={styles.menuList}
          onScroll={handleRightPanelScroll}
          scrollEventThrottle={16}
        >
          {categories.map((category) => (
            <View
              key={category.id}
              ref={(el) => (sectionRefs.current[category.id] = el)}
              onLayout={(event) => {
                const { y, height } = event.nativeEvent.layout;
                sectionLayouts.current[category.id] = { y, height };
              }}
            >
              {/* Section Header with Icon */}
              <View style={styles.sectionHeader}>
                {category.image && (
                  <Image source={category.image} style={styles.sectionIcon} />
                )}
                <Text style={styles.sectionTitle}>{category.title}</Text>
              </View>
              
              {/* Menu Items */}
              
              {items[category.id]?.map((item, index) => (
                <TouchableOpacity 
                activeOpacity={0.7}
                key={`${category.id}-${index}`}
                >
                <View key={index} style={styles.menuItem}>
                  <View style={styles.textContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                  </View>
                  <Image source={item.image} style={styles.itemImage} />
                </View>
                </TouchableOpacity>
              ))}
              
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff"
  },
  leftPane: {
    width: "30%",
    backgroundColor: "#f8f8f8",
    borderRightWidth: 1,
    borderColor: "#eee"
  },
  categoryList: {
    alignItems: "center",
    paddingVertical: 20
  },
  categoryButton: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20
  },
  categoryIcon: {
    width: 30,
    height: 30,
    marginBottom: 8,
    resizeMode: "contain"
  },
  categoryItem: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    textAlign: "center",
  },
  activeCategory: {
    color: "#333",
    fontWeight: "700"
  },
  rightPane: {
    flex: 1,
    padding: 20
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 20
  },
  sectionIcon: {
    width: 30,
    height: 30,
    marginRight: 12,
    resizeMode: "contain"
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333"
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  textContainer: {
    flex: 1,
    marginRight: 10
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333"
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
    marginTop: 4
  },
  itemImage: {
    width: 80,
    height: 100,
    resizeMode: "contain"
  },
  verticalIndicator: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: '#f6962f',
    borderRadius: 2
  },
  iconTextContainer: {
    alignItems: 'center'
  },
});

export default MenuScreen;