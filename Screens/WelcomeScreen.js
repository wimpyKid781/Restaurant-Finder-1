import React,{Component} from 'react';
import {Alert, Text, TouchableOpacity, View, Modal, KeyboardAvoidingView} from 'react-native'
export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : '',
            firstName : '',
            lastName : '',
            phoneNumber : '',
            address: '',
            confirmPassword : '',
            isModalVisible : false
        }
    }
    signUp = (email, password, confirmPassword) => {
       if(passwerd != confirmPassword){
           Alert.alert('The passwords you have entered do not match.')
       }
       else{
           firebase.auth().createUserWithEmailAndPassword(email, password)
           .then(()=>{
             db.collections('users').add({
                 firstName: this.state.firstName,
                 lastName: this.state.lastName,
                 email : this.state.email,
                 password : this.state.password,
                 phoneNumber: this.state.phoneNumber,
                 address: this.state.address,
             })
           })
           return(
               Alert.alert('You has been succesfully added as a user.')
               [
                   {text: 'OK!', onPress: () => this.setState({isModalVisible:false})}
               ]
           )
       }
    }
    login =(email, password) =>{
     firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
        Alert.alert('Succesfull login!')
    })
    }
    modal=()=>{
        return(
          <Modal
          animationType  = 'fade'
          transparent = 'true'
          >
        <View>
            <ScrollView>
                <KeyboardAvoidingView>
                    <Text>
                        Add an account!
                    </Text>
                    <Text>
                        First Name
                    </Text>
                    <TextInput 
                    placeholder = {'Enter your First Name here'}
                    maxLength = {15}
                    onChangeText = {(text) =>{
                        this.setState({
                            firstName: text
                        })
                    }}
                    />
                    <Text>
                        Last Name
                    </Text>
                    <TextInput 
                    placeholder = {'Enter your Last Name here'}
                    maxLength = {20}
                    onChangeText = {(text) =>{
                        this.setState({
                            lastName: text
                        })
                    }}
                    />
                    <Text>
                        Phone Number
                    </Text>
                    <TextInput 
                    placeholder = {'Enter your Phone Number here'}
                    maxLength = {10}
                    keyboardType = {'numeric'}
                    onChangeText = {(text) =>{
                        this.setState({
                            phoneNumber: text
                        })
                    }}
                    />
                    <Text>
                        Address
                    </Text>
                    <TextInput 
                    placeholder = {'Enter your Address here'}
                    multiline = {true}
                    keyBoardType = {'alpha-numeric'}
                    onChangeText = {(text) =>{
                        this.setState({
                            address: text
                        })
                    }}
                    />
                    <Text>
                        Email
                    </Text>
                    <TextInput 
                    placeholder = {'Enter your Email here'}
                    keyBoardType = {'email-address'}
                    onChangeText = {(text) =>{
                        this.setState({
                            email: text
                        })
                    }}
                    />
                    <Text>
                        Password
                    </Text>
                    <TextInput 
                    placeholder = {'Enter your Password here'}
                    secureTextEntry = {true}
                    onChangeText = {(text) =>{
                        this.setState({
                            password: text
                        })
                    }}
                    />
                    <Text>
                        Confirm Password
                    </Text>
                    <TextInput 
                    placeholder = {'Confirm Password'}
                    secureTextEntry = {true}
                    onChangeText = {(text) =>{
                        this.setState({
                            confirmPassword: text
                        })
                    }}
                    />
                    <TouchableOpacity onPress={() =>
                    this.signUp(this.state.email, this.state.password, this.state.confirmPassword)}>
                        <Text>
                            Register
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                    this.setState({
                        isModalVisible : false
                    })}>
                        <Text>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
            </View>
        </Modal>
        )
    }
    render(){
        return(
            <View>
                {
                    this.modal()
                }
                <Text>
                    Restaurant Finder
                </Text>
                <TextInput 
                placeholder="xyz@abc.com"
                keyBoardType = {'email-address'}
                onChangeText={(text)=>{
                    this.setState({
                      emailId: text
                    })
                  }}
                />
                <TextInput
                style={styles.loginBox}
                secureTextEntry = {true}
                placeholder="enter Password"
                onChangeText={(text)=>{
                  this.setState({
                    password: text
                  })
                }}
              />
              <TouchableOpacity onPress={() =>
            this.login(this.state.email, this.state.password)
            }>
                  <Text>
                      Log In!
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>
            this.setState({isModalVisible : true})
            }>
                  <Text>
                      Sign Up!
                  </Text>
              </TouchableOpacity>
            </View>
        )
    }
}