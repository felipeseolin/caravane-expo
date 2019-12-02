import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { watchAllCaravanas } from '../../actions';
import Section from '../../components/Section';
import CaravanaItem from '../../components/CaravanaItem';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalByLoad: 10,
      total: 10
    };
  }

  componentWillMount() {
    this.load();
  }

  load() {
    this.setState({ isLoading: true });
    this.props.watchAllCaravanas(this.state.total);
    this.setState({ isLoading: false });
  }

  loadMore = () => {
    const { totalByLoad, total } = this.state;
    const newTotal = total + totalByLoad;
    this.setState({ total: newTotal });
    this.props.watchAllCaravanas(newTotal);
  };

  render() {
    const { allCaravanas, navigation } = this.props;
    if (allCaravanas == null) {
      return <ActivityIndicator/>;
    }

    return (
      <View style={styles.container}>

        <Section description="As melhores caravanas você encontra aqui!">
          <FlatList
            style={styles.list}
            data={allCaravanas}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              (
                <CaravanaItem
                  caravana={item}
                  onPress={() => {
                    navigation.navigate('CaravanaDetailsScreen', { caravana: item });
                  }}
                />
              )}
            keyExtractor={(item) => item.id}
            onEndReached={this.loadMore}
            onEndReachedThreshold={0}
          />
        </Section>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50
  }
});


const mapStateToProps = (state) => {
  const { listAllCaravanas } = state;

  if (listAllCaravanas === null) {
    return { allCaravanas: listAllCaravanas };
  }

  const keys = Object.keys(listAllCaravanas);
  const listAllCaravanasWithId = keys.map((key) => {
    return { ...listAllCaravanas[key], id: key };
  });

  return { allCaravanas: listAllCaravanasWithId };
};
export default connect(mapStateToProps, { watchAllCaravanas })(HomeScreen);
