import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {Container, Header, Content, Body, Title, List, ListItem,
  Button,  Form, Item, Input, Label } from 'native-base'

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tasksList:[],
      taskName:''
    }
  }

  addItemsToArray = ()=>{
    this.state.tasksList.push(this.state.taskName);
    this.setState({
      tasksList:this.state.tasksList,
      taskName:''
    })
    console.log(this.state.tasksList);
  }

  deleteItemsInArray = (array, item)=>{
    const dataArray = array.filter(e => e!== item)
    this.setState({
      tasksList:dataArray
    })
  }

  render(){
    return(
      <Container>
        <Header>
          <Body style={{flex:1, alignItems: 'center'}}>
            <Title>
              ToDo
            </Title>
          </Body>
        </Header>

        <Container  style={{marginTop: 8}}>
          <List dataArray={this.state.tasksList}
            renderRow={
              (item)=>
              <ListItem button onPress={()=>this.deleteItemsInArray(this.state.tasksList, item)}>
                <Text style={{fontSize:18}}>{item}</Text>
              </ListItem>
            }
          />
        </Container>

        <Container style={{flex:0.1, flexDirection: 'row', marginTop: 8, marginBottom: 8, marginLeft:16, marginRight: 16}}>
          <View style={{flex:4}}>
            <Form>
              <Item >
                <Input
                  onChangeText={(text)=> this.setState({taskName:text})}
                  value={this.state.taskName}
                  placeholder='Task'/>
              </Item>
            </Form>
          </View>
          <View style={{flex:1}}>
            <Button full rounded info onPress={this.addItemsToArray}>
              <Text>Add</Text>
            </Button>
          </View>
        </Container>
      </Container>
    )
  }
}