import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

import styles from './styles';

if (
  Platform.OS === 'android'
  && UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default class LongText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  componentDidUpdate(nextProps, nextState) {
    LayoutAnimation.spring();
  }

  changeIsExpanded() {
    const { isExpanded } = this.state;

    this.setState({
      isExpanded: !isExpanded,
    });
  }

  render() {
    const { isExpanded } = this.state;
    const { children = '-' } = this.props;

    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.changeIsExpanded()}>
          <View>
            <Text
              style={[
                styles.content,
                isExpanded ? styles.expanded : styles.collapsed,
              ]}
            >
              {children}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
