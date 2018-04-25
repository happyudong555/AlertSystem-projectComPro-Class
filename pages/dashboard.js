import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import swal from 'sweetalert'
import 
{ 
    Button, Collapse, CardImg, Card, 
    CardBody, CardText,CardTitle, CardSubtitle, Table,
    Nav, Navbar, NavItem, NavLink, NavbarBrand, ListGroup,
    ListGroupItem, Media
} 
from 'reactstrap'
<<<<<<< HEAD
import { notification, Icon, Alert } from 'antd'
=======
>>>>>>> 74c87042f406ea98675fd9d24d25dd2bd70e3ecf
import * as firebase from 'firebase'
export default class DashBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  
            Sensor: []
        };
    }
    componentDidMount() {
        const config = {
            apiKey: "AIzaSyCo-ZuUXKRdlWtRo0xrJ3gUVN0WbGDzZaY",
            authDomain: "alert-system-82af3.firebaseapp.com",
            databaseURL: "https://alert-system-82af3.firebaseio.com",
            projectId: "alert-system-82af3",
            storageBucket: "alert-system-82af3.appspot.com",
            messagingSenderId: "840558224088"
        };
        firebase.initializeApp(config);
        let firebaseFilter = firebase.database().ref().child('Sensor');
        firebaseFilter.on("value", (snapshot) => {
            const Sensor = snapshot.val()
            if(Sensor != null) {
                this.setState({
                    Sensor: Sensor
                })
            }
<<<<<<< HEAD
            for (let i = 0;i < Sensor.status.length;i++) {
                if (Sensor[i].status === 'Alert' || Sensor[i].status === 'alert' || Sensor[i].status === 'Error' || Sensor[i].status === 'error') {
                    let Sound = document.getElementById("Sound");
                    Sound.autoplay = true;
                    Sound.load();
                    notificationAlert();
                }
            }
        })
        let notificationAlert = () => {
            const args = {
                message: 'Warning !!!',
                description:'Please becareful yours hardware maybe has error status or overheat!',
                icon: <Icon type="warning" style={{color:'#e81908'}}/>
            };
            notification.open(args);
        }
=======
            console.log(Sensor[0].status);
            if (Sensor[0].status === 'Alert') {
                let Sound = document.getElementById("Sound");
                Sound.autoplay = true;
                Sound.load();
            }
        })
    }
    renderSensor = () => {
       return (
            Object.keys(this.state.Sensor).map((key)=>(
            <tr key={key}>
                <td>
                    {this.state.Sensor[key].type}
                </td>
                <td>
                    {this.state.Sensor[key].value}
                </td>
                <td>
                    {this.state.Sensor[key].status}
                </td>
            </tr>
        ))
       )
>>>>>>> 74c87042f406ea98675fd9d24d25dd2bd70e3ecf
    }
    render() {
        let logOut = () => {
            firebase.auth().signOut().then(function() {
<<<<<<< HEAD
                location.href = '/'
=======
                window.location = '/'
>>>>>>> 74c87042f406ea98675fd9d24d25dd2bd70e3ecf
            }, function(error) {
                console.error('Sign Out Error', error);
            });
        }
      return (
        <div>
            <Head>
                <title>ALERT SYSTEM || DashBoard</title>
                <script type="text/javascript" src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
                <link rel="stylesheet" href="static/css/bootstrap/dist/css/bootstrap.min.css" />
                <script type="text/javascript" src="static/js/jquery/dist/jquery.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.4.1/antd.min.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"></script>
                <script type="text/javascript" src="/static/js/p5/p5.min.js"></script>
                <script type="text/javascript" src="/static/js/p5/addons/p5.dom.min.js"></script>
                <script type="text/javascript" src="/static/js/p5/addons/p5.sound.min.js"></script>
            </Head>
            <div className="container-fluid" style={{backgroundColor:'#fff'}}>
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/">
                                    <img height="60" alt="logo" src="/static/image/logo/navbar_logo.png" />
                                </a>
                            </div>
                            <ul style={{position:'relative', top:28,float:'left', fontWeight:'bold',right:66}}>
                                <li><a onClick={logOut}>log Out</a></li>
                            </ul>
                        </div>
                    </nav>
            </div>
           <div className="container">
                <div className="row">
                    <div className="col-md-2 card-ui">
                        <img src="static/image/logo/alertsystem.jpg" class="profileImage"/>
                        <li style={{fontSize:15, fontWeight:'bold'}}><a>admin</a></li>
                    </div>
<<<<<<< HEAD
                        <audio id="Sound" controls>
                            <source src="static/sound/SOS-effect.mp3" type="audio/mpeg"/>
                        </audio>
=======
                        <div id="SoundAlert">
                            <audio id="Sound" controls>
                                <source src="static/sound/SOS-effect.mp3" type="audio/mpeg"/>
                            </audio>
                        </div>
>>>>>>> 74c87042f406ea98675fd9d24d25dd2bd70e3ecf
                        <div className="mainDashBoard col-md-9" style={{marginTop:50,marginBottom:50}}>
                            <h4 style={{marginLeft: -17, textTransform: 'uppercase', fontSize: 22, marginBottom: 36, fontWeight: 'bold', marginTop:30}}>
                            my board status info</h4>
                            <div className="row">
                                <Media style={{marginRight:50,marginBottom:30}}>
                                    <Media left href="#">
                                        <Media object src={`static/image/icon/temp.jpg`} style={{height: 70, marginRight: 24,borderRadius:4}} />
                                    </Media>
                                    <Media body>
                                        <Media style={{fontSize: 18, textTransform: 'capitalize', marginTop:19}}>
<<<<<<< HEAD
                                        Temperature
=======
                                        Temp
>>>>>>> 74c87042f406ea98675fd9d24d25dd2bd70e3ecf
                                        </Media>
                                    </Media>
                                </Media>
                                <Media style={{marginRight:50,marginBottom:30}}>
                                    <Media left href="#">
                                        <Media object src={`static/image/icon/gas.jpg`} style={{height: 70, marginRight: 24,borderRadius:4}} />
                                    </Media>
                                    <Media body>
                                        <Media style={{fontSize: 18, textTransform: 'capitalize', marginTop:19}}>
                                        GAS
                                        </Media>
                                    </Media>
                                </Media>
                                <Media style={{marginRight:50,marginBottom:30}}>
                                    <Media left href="#">
                                        <Media object src={`static/image/icon/PIR.jpg`} style={{height: 70, marginRight: 24,borderRadius:4}} />
                                    </Media>
                                    <Media body>
                                        <Media style={{fontSize: 18, textTransform: 'capitalize',marginTop:19}}>
                                        PIR
                                        </Media>
                                    </Media>
                                </Media>
                                <br/>
                                <br/>
                                <Table>
                                <thead>
                                    <tr>
                                        <th>Sensor</th>
                                        <th>Value</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                    <tbody>
<<<<<<< HEAD
                                        {
                                            Object.keys(this.state.Sensor).map((key)=>(
                                                <tr key={key}>
                                                    <td>
                                                        {this.state.Sensor[key].type}
                                                    </td>
                                                    <td>
                                                        {this.state.Sensor[key].value}
                                                    </td>
                                                    <td>
                                                        {this.state.Sensor[key].status}
                                                    </td>
                                                </tr>
                                            ))
                                        }
=======
                                        {this.renderSensor()}
>>>>>>> 74c87042f406ea98675fd9d24d25dd2bd70e3ecf
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                </div>
           </div>

            <style>{`
                body {
                    background-color:#f2f5f7;
                }
                .profileImage {
                    width: 100px;
                    height: 100px;
                    margin: 50px auto;
                    display: block;
                    border-radius: 100%;
                    background-color: transparent;
                    overflow: hidden;
                    object-fit: cover;
                    object-position: center top;
                }
                .mainDashBoard {
                    height: auto;
                    background-color: #fff;
                    padding: 60px;
                    padding-top: 30px;
                    padding-bottom: 30px;
                    box-shadow: 0px 0px 6px #ced4da;
                    border-radius: 10px;
                    float: left;
                }
                .header-dashboard{
                    margin-top: 50px;
                    float: left;
                    height: 160px;
                    background-color: #fff;
                    box-shadow: 0px 0px 6px #ced4da;
                    border-radius: 10px;
                    padding:15px;
                }
                .card-ui{
                    float: left;
                    height: 260px;
                    background-color: #fff;
                    margin-top: 50px;
                    margin-left: 30px;
                    margin-right: 50px;
                    box-shadow: 0px 0px 6px #ced4da;
                    border-radius: 10px;
                }
                li {
                    list-style: none;
                    text-align: center;
                    text-transform: capitalize;
                    line-height: 32px;
                    position: relative;
                    top: -20px;
                }
                a, a:hover {
                    text-decoration: none !important;
                    color: #000;
                }
                .table thead th {
                    font-size:16px;
                    border-bottom:0 !important;
                }
<<<<<<< HEAD
                .table td, .table th {
                    border-top:0 !important;
                }
=======
>>>>>>> 74c87042f406ea98675fd9d24d25dd2bd70e3ecf

                #SoundAlert {
                    display:none;
                }
                #Sound {
                    display:none;
                }
            `}</style>
        </div>
      );
    }
  }
