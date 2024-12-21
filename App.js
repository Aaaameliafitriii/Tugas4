// Import React and React Native components
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const FutsalScoreApp = () => {
  // State to manage team scores
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  // Function to handle score increment
  const incrementScore = (team) => {
    if (team === 'A') {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);
      if (newScore === 10) {
        Alert.alert('Congratulations!', 'Team A wins!');
      }
    } else if (team === 'B') {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);
      if (newScore === 10) {
        Alert.alert('Congratulations!', 'Team B wins!');
      }
    }
  };

  // Function to handle score decrement
  const decrementScore = (team) => {
    if (team === 'A' && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === 'B' && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  // Function to reset scores
  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Futsal Score Keeper</Text>

      {/* Team A Section */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team A</Text>
        <Text style={styles.score}>{scoreTeamA}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => incrementScore('A')} />
          <Button title="-" onPress={() => decrementScore('A')} />
        </View>
      </View>

      {/* Team B Section */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team B</Text>
        <Text style={styles.score}>{scoreTeamB}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => incrementScore('B')} />
          <Button title="-" onPress={() => decrementScore('B')} />
        </View>
      </View>

      {/* Reset Button */}
      <View style={styles.resetContainer}>
        <Button title="Reset Scores" onPress={resetScores} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    marginBottom: 10,
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
  resetContainer: {
    marginTop: 20,
  },
});

export default FutsalScoreApp;
