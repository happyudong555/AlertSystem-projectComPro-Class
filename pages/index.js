import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import 
{ 
    Button, Collapse, CardImg, Card, 
    CardBody, CardText,CardTitle, CardSubtitle, Table,
    Nav, Navbar, NavItem, NavLink, NavbarBrand, ListGroup,
    ListGroupItem, Label, Row, Col, TabContent, TabPane
}
from 'reactstrap'
import { notification, Icon, Alert } from 'antd'
import classnames from 'classnames'
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }
    render() {
        let createAccount = () => {
            const email = document.getElementById('email');
            const username = document.getElementById('username');
            const password = document.getElementById('password');
            saveUser(email.value, username.value, password.value);
        }
        let saveUser = (email, username, password) => {
            if (email.length && username.length && password.length < 6) {
                const args = {
                    message: 'Create Account failed',
                    description:'because your password is less than 6 character ! , please try again.',
                    icon: <Icon type="exclamation-circle" style={{color:'#e81908'}}/>
                  };
                notification.open(args);
            }
            else {
<<<<<<< HEAD
                let firebaseRef = firebase.database().ref().child('users/');
=======
                let firebaseRef = firebase.database().ref().child('users');
>>>>>>> 74c87042f406ea98675fd9d24d25dd2bd70e3ecf
                    firebaseRef.push({
                    email: email,
                    username: username,
                    password: password
                });
                const args = {
                    message: 'You Create Account Succesful',
                    icon: <Icon type="check-circle" style={{color:'#10da10'}}/>
                  };
                notification.open(args);
            }
            signUp();
        }
        let signUp = () => {
            const email = document.getElementById('email').value
            const username = document.getElementById('username').value
            const password = document.getElementById('password').value
            document.getElementById('SignUpform').reset();
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
        }
        let logIn = () => {
            const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            document.getElementById('LogInform').reset();
            firebase.auth().signInWithEmailAndPassword(email, password).catch((users) => {
                if (users) {
<<<<<<< HEAD
                    location.href = '/dashboard'
=======
                    window.location = '/dashboard'
>>>>>>> 74c87042f406ea98675fd9d24d25dd2bd70e3ecf
                }
            });
        }
        let resetPassword = () => {
            const sendEmail = document.getElementById('sendEmail').value
            document.getElementById('resetPasswordform').reset();
            firebase.auth().sendPasswordResetEmail(sendEmail).then(function() {
                // Email sent.
                const args = {
                    message: 'Reset Password Succesful',
                    icon: <Icon type="check-circle" style={{color:'#10da10'}}/>
                };
                notification.open(args);
              }).catch(function(error) {
                // An error happened.
                const args = {
                    message: 'Reset Password failed',
                    icon: <Icon type="exclamation-circle" style={{color:'#e81908'}}/>
                };
                notification.open(args);
              });
        }
        return (
            <div>
                <Head>
                <title>ALERT SYSTEM</title>
                <link rel="stylesheet" href="static/css/bootstrap/dist/css/bootstrap.min.css" />
                <script type="text/javascript" src="static/js/jquery/dist/jquery.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"></script>
                <script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>
                <script type="text/javascript" src="static/js/firebase.connect.js"></script>
                </Head>
                <div className="container clearfix" style={{marginTop:50,marginBottom:50}}>
                    <div className="row">
                        <img src="static/image/logo/alertsystem.jpg" className="logo"/>
                    </div>
                        <div className="mainTabs">
                            <Nav tabs>
                                <Nav
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }} style={{marginRight:20,fontSize:14}}>
                                    <Icon type="user" style={{marginLeft: 0, marginRight: 16, fontSize: 26}}/>Create Account
                                </Nav>
                                <Nav
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }} style={{marginRight:20,fontSize:14}}>
                                    <Icon type="unlock" style={{marginLeft: 10, marginRight: 20, fontSize: 26}}/>Login With Account
                                </Nav>
                                <Nav
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }} style={{fontSize:14}}>
                                    <Icon type="key" style={{marginLeft: 10, marginRight: 20, fontSize: 26}}/>Forgot Password
                                </Nav>
                            </Nav>
                        </div>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                <Col sm="12">
                                    <form className="mainform" id="SignUpform">
                                        <input type="text" id="email" className="form-control inputEmail" placeholder="Email"/>
                                        <br/>
                                        <input type="text" id="username" className="form-control inputUsername" placeholder="Username"/>
                                        <br/>
                                        <input type="password" id="password" className="form-control inputPassword" placeholder="Password"/>
                                        <br/>
                                        <button type="button" onClick={createAccount} className="createBTN">CREATE ACCOUNT</button>
                                        <br/>
                                        <h6 className="text-center" style={{textTransform: 'capitalize', fontSize: 13,color: '#d9291b', fontWeight: 'bold'}}>* username of password should be atleast 6 characters *</h6>
                                        <br/>
                                    </form>
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                <Col sm="12">
                                    <form className="mainform" id="LogInform">
                                        <input type="text" id="email" className="form-control inputEmail" placeholder="Email"/>
                                        <br/>
                                        <input type="password" id="password" className="form-control inputPassword" placeholder="Password"/>
                                        <br/>
                                        <button onClick={logIn} type="button" style={{backgroundColor: '#d9291b'}} className="logInbtn">LOGIN WITH ACCOUNT</button>
                                    </form>
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                <Col sm="12">
                                    <form className="mainform" id="resetPasswordform">
                                        <input type="text" id="sendEmail" className="form-control inputResetPassword" placeholder="Send your Email for Reset Password"/>
                                        <br/>
                                        <button onClick={resetPassword} type="button" className="resetbtn">RESET PASSWORD</button>
                                    </form>
                                </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                </div>
                <style>{`
                    .clearfix {
                        clear:both;
                    }
                    .nav-tabs {
                        border:0;
                    }
                    body {
                        background-color:#eee;
                    }
                    .logo {
                        margin:30px auto;
                        display: block;
                        width:300px;
                        height:340px;
                    }
                    .mainTabs {
                        width:50%;
                        margin:auto;
                        display:block;
                        margin-bottom: 26px;
                        cursor: pointer;
                    }
                    .mainform {
                        margin:auto;
                        display:block;
                    }
                    .inputEmail, .inputUsername , .inputPassword , .createBTN, .logInbtn, .inputResetPassword, .resetbtn{
                        width:50%;
                        margin:auto;
                        display:block;
                    }
                    .createBTN , .logInbtn, .resetbtn{
                        height: 42px;
                        color: #fff;
                        background-color: #000;
                        cursor: pointer;
                        font-size: 13px;
                        border-radius:4px;
                        border:0;
                    }
                    .ant-notification-notice-with-icon .ant-notification-notice-message {
                        position:relative;
                        top:-4px;
                        font-weight: bold;
                    }
                `}</style>
            </div>
        )
    }
}