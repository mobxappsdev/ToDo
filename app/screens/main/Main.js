import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {Container, Header, Content, Body, Title, List, ListItem,
  Button,  Form, Item, Input, Label } from 'native-base'
import {setTaskList} from '../../redux/actions';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tasksList:[],
      taskName:''
    }
  }

  componentDidMount(){
    (this.props.task.tasksList==='')
    ?
      this.setState({
        tasksList:[]
      })
    :
      this.setState({
        tasksList:JSON.parse(this.props.task.tasksList)
      })
  }

  addItemsToArray = ()=>{
    if(this.state.taskName!== ''){
      this.state.tasksList.push(this.state.taskName)
      this.setState({
        tasksList:this.state.tasksList,
        taskName:''
      })
      this.props.setTaskList(JSON.stringify(this.state.tasksList))
    }else{
        Alert.alert('Task is a required field.');
    }
  }

  deleteItemsInArray = (array, item)=>{
    Alert.alert(
      'Are you sure you want to delete this task?',
      '',
      [
        {
          text: 'Yes',
          onPress:()=>{
            const dataArray = array.filter(e => e!== item)
            this.setState({
              tasksList:dataArray
            })
            this.props.setTaskList(JSON.stringify(this.state.tasksList))
          }
        },
        {
          text: 'No'
        }
      ],
      { cancelable: false }
    )
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
              <ListItem button onPress={()=>this.deleteItemsInArray
                (this.state.tasksList, item)}>
                <Text style={{fontSize:18}}>{item}</Text>
              </ListItem>
            }
          />
        </Container>

        <Container style={{flex:0.1, flexDirection: 'row', marginTop: 8,
          marginBottom: 8, marginLeft:16, marginRight: 16}}>
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
              <Text style={{color: 'white'}}>Add</Text>
            </Button>
          </View>
        </Container>
      </Container>
    )
  }
}

function mapStateToProps(state){
  return{
    task:state.task
  }
}

function mapDispatchToProps(dispatch){
  return{
    setTaskList: bindActionCreators(setTaskList, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Main);
