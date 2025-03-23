import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const AnnouncementCard = () => {
  // Sample data for the cards
  const announcements = [
    {
      id: "1",
      title: "🥤The Tumbler You've Been Waiting For🥤",
      description:
        "Your Titan Tumbler is here! Grab yours for just 38 Bubble Points!",
      image: require("../assets/tumbler.jpg"),
    },
    {
      id: "2",
      title: "🥤The Tumbler You've Been Waiting For🥤",
      description:
        "Your Titan Tumbler is here! Grab yours for just 38 Bubble Points!",
      image: require("../assets/tumbler.jpg"),
    },
    {
      id: "3",
      title: "🥤The Tumbler You've Been Waiting For🥤",
      description:
        "Your Titan Tumbler is here! Grab yours for just 38 Bubble Points!",
      image: require("../assets/tumbler.jpg"),
    },
    {
      id: "4",
      title: "🥤The Tumbler You've Been Waiting For🥤",
      description:
        "Your Titan Tumbler is here! Grab yours for just 38 Bubble Points!",
      image: require("../assets/tumbler.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.boldText}>Announcements</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Card List Section */}
      <View>
        {announcements.slice(0, 3).map((item) => (
          <View key={item.id} style={styles.card}>
            {/* Image */}
            <Image source={item.image} style={styles.cardImage} />

            {/* Content (Title, Description, Button) */}
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <View style={styles.textWrapper}>
                  <Text
                    style={styles.cardTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={styles.cardDescription}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.description}
                  </Text>
                </View>
                <TouchableOpacity style={styles.viewButton}>
                  <Text style={styles.viewButtonText}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  seeAllText: {
    color: "#f6962f",
    fontSize: 14,
  },
  card: {
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: 520, // Adjusted height for better aspect ratio
    borderRadius: 8,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 10,
  },
  textContainer: {
    flexDirection: "row", // Aligns title/description and button in a row
    justifyContent: "space-between", // Adds space between text and button
    alignItems: "center", // Vertically centers the content
  },
  textWrapper: {
    flex: 1, // Allows the text to take up available space
    marginRight: 10, // Adds spacing between text and button
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
  },
  viewButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fdecd6",
    borderRadius: 16,
  },
  viewButtonText: {
    color: "#df963c",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default AnnouncementCard;