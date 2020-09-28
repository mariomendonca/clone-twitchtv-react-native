import React from 'react'
import { Text } from 'react-native'

import data from './data'
import { 
  List, 
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from './styles'


export default function CategoryList() {

  const CategoryItem = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source}/>
        <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle/>
        <Info>51.9K</Info>
      </CategoryStatus>
    </CategoryContainer>
    )

  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
      {/* <Text style={{color: 'white'}}>Hello</Text> */}
    </List>
  )
}