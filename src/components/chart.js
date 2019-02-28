import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart, Line, Bar, BarChart, RadialBarChart, RadialBar, Legend} from 'recharts';


/** const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};*/


const style = {
    top: 0,
    left: 390,
    lineHeight: '24px'
};

const data = [
    { name: 'Day 1', uv: 34, pv: 2400, amt: 2400 },
    { name: 'Day 2', uv: 21, pv: 1398, amt: 2210 },
    { name: 'Day 3', uv: 12, pv: 9800, amt: 2290 },
    { name: 'Day 4', uv: 13, pv: 3908, amt: 2000 },
    { name: 'Day 5', uv: 19, pv: 4800, amt: 2181 },
    { name: 'Day 6', uv: 33, pv: 3800, amt: 2500 },
    { name: 'Day 7', uv: 23, pv: 4300, amt: 2100 },
];

const data1 = [{ name: 'United States', uv: 53, pv: 800, amt: 1400 },
{ name: 'Canada', uv: 41, pv: 967, amt: 1506 },
{ name: 'India', uv: 29, pv: 1098, amt: 989 },
{ name: 'China', uv: 21, pv: 1200, amt: 1228 },
{ name: 'Chile', uv: 18, pv: 1108, amt: 1100 },
{ name: 'Brazil', uv: 10, pv: 680, amt: 1700 }];

const data2 = [
    { name: 'Day 1', uv: 4, pv: 2400, amt: 2400 },
    { name: 'Day 2', uv: 12, pv: 1398, amt: 2210 },
    { name: 'Day 3', uv: 3, pv: 9800, amt: 2290 },
    { name: 'Day 4', uv: 5, pv: 3908, amt: 2000 },
    { name: 'Day 5', uv: 7, pv: 4800, amt: 2181 },
    { name: 'Day 6', uv: 11, pv: 3800, amt: 2500 },
    { name: 'Day 7', uv: 5, pv: 4300, amt: 2100 },
];


const data3 = [
    
    { name: '46-60', uv: 2, fill: '#82ca9d' },
    { name: '60+', uv: 1,  fill: '#a4de6c' },
    { name: 'unknow', uv: 6, fill: '#ffc658' },
    { name: '36-45', uv: 2, fill: '#8dd1e1' },
    { name: '25-35', uv: 5, fill: '#83a6ed' },
    { name: '18-24', uv: 16, fill: '#F45C24' },
];

class Charts extends Component{

    render() {
        return (
            <div>
                <div className="analytics">
                    <div className="overview" style={{ fontSize: "25px", display: 'flex', color: "white", textAlign: "center", fontWeight: 650, lineHeight:1.1 }}>
                        <div className="metrics" style={{ backgroundColor: "#039359" }}>
                             120 <br/>views
                        </div>
                        <div className="metrics" style={{ backgroundColor: "#E82A45"}}>
                         Status <br/>On Progress

                        </div>

                        <div className="metrics" style={{ backgroundColor: "#40A0D1" }}>
                            23 <br/> Submissions
                        </div>

                        <div className="metrics" style={{ backgroundColor: "#7F94AF" }}>
                           19.16% <br /> Completion rate
                        </div>

                      

                        </div>

                    </div>

               

                {/** <Row className="show-grid" onClick={this.handleClick}>
                    <Col xs={6} md={6}>
                        <Doughnut data={data} />
                        <p>App Cover</p>
                    </Col>
                    <Col xs={6} md={6}>
                        <Doughnut data={data} />
                    </Col>
                </Row>**/}


                <Row className="show-grid graphs" >
                    <Col xs={7} md={7}>

                        <AreaChart width={700} height={400} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <Area type="monotone" dataKey="uv" stroke="#F45C24" fill='#F45C24' />
                            <XAxis dataKey="name" />

                            <YAxis />
                            <Tooltip />
                        </AreaChart>
                        <p style={{ textAlign: "center", margin: "20px 0px", fontWeight:600 }}> Views per day </p>
                    </Col>


                    <Col xs={5} md={5}>
                     
                        <ComposedChart layout="vertical" width={400} height={400} data={data1}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid stroke='#f5f5f5' />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Bar dataKey='uv' barSize={20} fill='#F45C24' />
                            
                        </ComposedChart>
                        <p style={{ textAlign: "center", margin: "20px 0px", fontWeight: 600 }}> Top Countries </p>              
                    </Col>


                </Row>

                <Row className="show-grid graphs" >
                    <Col xs={7} md={7}>

                        <BarChart width={700} height={400} data={data2} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                           
                            <XAxis dataKey="name" />

                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="uv" fill="#F45C24" />
                           
                        </BarChart>
                        <p style={{ textAlign: "center", margin: "20px 0px", fontWeight: 600 }}> Completion per day </p>
                    </Col>


                    <Col xs={5} md={5} style={{ }}>
                        <div style={{margin:"auto"}}>
                            <RadialBarChart width={400} height={400} cx={230} cy={230} innerRadius={5} outerRadius={180} barSize={35} data={data3} >
                                <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey='uv' />
                                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style} />
                            </RadialBarChart>
                        </div>

                        <p style={{ textAlign: "center", margin: "20px 0px", fontWeight: 600 }}> Submission by age-group </p>

                    </Col>


                </Row>

                       
            

               

            </div>
            
           
               
                
          
        );
    }
}

export default Charts;
