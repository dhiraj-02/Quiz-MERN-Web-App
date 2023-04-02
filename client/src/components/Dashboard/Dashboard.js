import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { PieChart } from '@rsuite/charts';
import qs from 'qs';
export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            res: []
        }
    }

    componentDidMount() {
        if (!localStorage.getItem("_ID")) {
            this.props.history.push('/');
            localStorage.clear();
        } else {

            axios.get('/api/quizzes/score/' + localStorage.getItem('_ID')).then(res => {
                this.setState({ res: res.data.score })
            })
        }
    }

    getAvg = () => {
        let totalq = 0;
        let totalr = 0;
        for (let i = 0; i < this.state.res.length; i++) {
            totalq = totalq + this.state.res[i].answers.length;
            console.log(totalq);
            totalr = totalr + this.state.res[i].answers.filter(ans => ans === true).length;
            console.log(totalr);
        }
        return (100 * (totalr / totalq));
    }

    get1 = () => {
        let totalq = 0;
        let totalr = 0;
        for (let i = 0; i < this.state.res.length; i++) {
            totalq = totalq + this.state.res[i].answers.length;
            console.log(totalq);
            totalr = totalr + this.state.res[i].answers.filter(ans => ans === true).length;
            console.log(totalr.length / 4);
        }
        
        return totalr;
    }
    
    get2 = () => {
        let totalq = 0;
        let totalr = 0;
        for (let i = 0; i < this.state.res.length; i++) {
            totalq = totalq + this.state.res[i].answers.length;
            console.log(totalq);
            totalr = totalr + this.state.res[i].answers.filter(ans => ans === true);
            console.log(totalr.length / 4);
        }
        
        return totalq;
    }
    
    drawChart() {
        if(this.state.res.length==0)
        {
            return (
                <div style={{
                  display: 'block', width: 700, paddingLeft: 30
                }}>
                  <h2>No Tests Taken !!</h2>
                </div >
              );   
        }
        else{
        // Sample data
        let sampleData = [
            ['Right', this.getAvg()],
            ['Wrong', 100-this.getAvg()]
          ];
        
        return (
          <div style={{
            display: 'block', width: 700, paddingLeft: 30
          }}>
            <hii>Total Average Score</hii>
            <PieChart name="PieChart" data={sampleData} />
          </div >
        );
        }
      }
   

    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <header1>
                <div className="main">
                    <div className="top">
                        
                            <div className="header">
                                <hi><center>Statistics :</center></hi>
                                <h3>Number of tests taken - {this.state.res.length}</h3><br></br>
                                <h3>Number of questions attempted - {this.get2()}</h3><br></br>
                                <h3>Number of right answers - {this.get1()}</h3><br></br>
                                <h3>Number of wrong answers - {this.get2()-this.get1()}</h3>

                            </div>
                            <br></br>
                            
                       
                </div>
                <br></br>
                <br></br>
                <div className="top">
                 {this.drawChart()}
                </div>
                
            </div>
            </header1>
            </div>
        )
    }
}