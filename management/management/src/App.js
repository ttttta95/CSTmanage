import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{ 'id': 1,
  'image': 'https:picsum.photos/64/64',
  'name':'나동빈',
  'birthday': '961222',
  'gender': '남자',
  'job': '디자이너'
},
{
  'id': 2,
  'image': 'https:picsum.photos/64/64',
  'name':'지창욱',
  'birthday': '980503',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'https:picsum.photos/64/64',
  'name':'이연우',
  'birthday': '000928',
  'gender': '여자',
  'job': '개발자'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;