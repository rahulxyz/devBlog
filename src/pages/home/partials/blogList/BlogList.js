import React, { Component } from 'react';
import ListItem from '../../../../components/listItem/ListItem';

const list = [
  {
    title: "title",
    description:
      "Well. 2020 is finally over! What a strange, challenging and draining year that was! As I’m sure you are, I’m really hoping 2021 will start…",
    author: "Max Payne",
    timestamp: "Jan 7, 2021",
  },
];

class BlogList extends Component {
  state = {};

  render() {
    return (
      <ul>
        {list.map((item) => (
          <ListItem
            title={item.title}
            description={item.description}
            author={item.author}
            timestamp={item.timestamp}
          />
        ))}
      </ul>
    );
  }
}

export default BlogList;
