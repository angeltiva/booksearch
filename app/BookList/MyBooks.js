'use strict'

import config from '../common/config'
import BookDetail from './BookDetail'

import React, {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  ActivityIndicatorIOS,
  TouchableHighlight,
  Component,
  PixelRatio
} from 'react-native'

var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

var styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: '#666',
    marginTop: config.gapHuge,
  },
  listView: {
    marginTop: config.navBarHeight,
    marginBottom: config.tabBarHeight,
    backgroundColor: config.bgGray
  },
  card: {
    backgroundColor: config.bgWhite,
    marginTop: config.gapSmall,
  },
  bookContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: config.gapMedium
  },
  thumbnail: {
    width: 64,
    height: 100,
    marginRight: config.gapHuge,
    marginLeft: config.gapHuge,
    marginTop: config.gapMedium
  },
  rightContainer: {
    // thumbnail 占据自身大小的空间，剩下的空间都给 rightContainer
    flex: 1,
    marginTop: config.gapMedium
  },
  title: {
    color: '#333',
    fontSize: config.fontLarge,
    marginBottom: config.gapSmall
  },
  author: {
    color: '#bbb',
  },
  rightbottomContainer: {
    flexDirection: 'row',
    marginTop: config.gapMedium,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  pageCount: {
    flex: 1,
    height: 24,
    color: '#333',
    fontSize: config.fontSmall,
    borderColor: '#ccc',
    borderWidth: 2,
    padding: 5,
    marginRight: config.gapHuge
  },
  bookKind: {
    flex: 4,
    color: '#ccc'
  }

})


export default class BookList extends Component {

  state = {
      loading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
  };

  constructor(props, context) {
    super(props, context)
    if (Array.isArray(this.props.books)) {
      this.state.dataSource = this.state.dataSource.cloneWithRows(this.props.books);
    }
  }

  componentDidMount() {
    fetch(REQUEST_URL)
    .then(
      response => response.json()
    )
    .then(
      responseData => {
        this.setState({
          loading: false,
          dataSource: this.state.dataSource.cloneWithRows(responseData.items)
        })
      },
      () => {
        this.setState({
          loading: false
        })
      }
    )
  }

  renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicatorIOS size="large" />
        <Text style={styles.loadingText}>
          Loading...
        </Text>
      </View>
    )
  }

  showBookDetail(book) {
    this.props.navigator.push({
      title: book.volumeInfo.title,
      component: BookDetail,
      passProps: {book}
    })
  }

  renderBook(book) {
    return (
      <TouchableHighlight
        underlayColor="#ddd"
        style={styles.card}
        onPress={() => this.showBookDetail(book)}>
        <View style={styles.bookContainer}>
          <Image
            source={{uri: book.volumeInfo.imageLinks.smallThumbnail}}
            style={styles.thumbnail} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>
               《{book.volumeInfo.title}》
            </Text>
            <Text style={styles.author}
            numberOfLines={3}>
              {book.volumeInfo.description}
            </Text>
            <View style={styles.rightbottomContainer}>
              <Text style={styles.bookKind}>
                {book.volumeInfo.authors}
              </Text>
              <Text style={styles.pageCount}>
                共{book.volumeInfo.pageCount}页
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading()
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBook.bind(this)}
        style={styles.listView} />
    )
  }
}
