import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container" id="resume">
                <div id="card" className="row">
                    <div className="col-xs-3 col-sm-4"></div>
                    <div className="col-xs-9 col-sm-8">
                        <h1>Rahul Parkar</h1>
                        <h2>Software Developer</h2>
                        <section id="basics">
                            <div className="contact">
                                {/* <div className="website">
                                    <icon className="entypo-compass"></icon>
                                    <a href="http://richardhendricks.com">http://richardhendricks.com</a>
                                </div> */}
                                <div className="email">
                                    <icon className="entypo-mail"></icon>
                                    <a href="mailto:rahul@parkar.io">rahul@parkar.io</a>
                                </div>
                                {/* <div className="phone">
                                    <icon className="entypo-phone"></icon>
                                    (912) 555-4321
                                </div> */}
                            </div>
                            <section id="location">
                                <icon className="entypo-home"></icon>
                                <span className="address">
                                    <span className="city">London</span>
                                    <span className="countryCode">UK</span>
                                </span>
                            </section>
                            {/* <section id="profiles">
                                <div className="item">
                                    <icon className="entypo-twitter"></icon>
                                </div>
                                <div className="item">
                                    <a href="https://soundcloud.com/dandymusicnl">
                                        <icon className="entypo-soundcloud"></icon>
                                    </a>
                                </div>
                            </section> */}
                        </section>
                    </div>
                </div>
                <div id="summary" className="row">
                    <div className="col-sm-8 col-sm-offset-4 col-xs-12">
                        <div className="summary">
                            <p className="lead">Hard working, self-motivated driven software developer who enjoys and embraces new development challenges. Constantly aiming to improve upon myself at all opportunities and embraces change. I am well suited to working in a position where projects and technology stacks are constantly evolving.
                                <br/><br/>
                                Notable achievements:
                                <br/><br/>
                                Working to deliver multiple pieces of work around the corporate news home page which serves as the home page for all Sky staff and regularly attains 2m+ page views per month.
                                <br/><br/>
                                Working to create an initial test automation suite and framework for the team. This was then further evolved over time and uses Ruby with Selenium.
                                <br/><br/>
                                Mentoring in order to improve knowledge of Ruby and general programming concepts within our test team in order to test automation.</p>
                        </div>
                    </div>
                </div>
                <section id="work" className="row">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-xs-2">
                                <icon className="large entypo-briefcase"></icon>
                            </div>
                            <div className="col-xs-10">
                                <h2 className="section-title">Work Experience</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="item">
                            <h3 className="name">
                                Pied Piper
                            </h3>
                            <div className="position">
                                <p className="lead">CEO/President</p>
                            </div>
                            <div className="date">
                                <span className="startDate">
                                    2013-12-01
                                </span>
                                <span className="endDate">
                                    - 2014-12-01
                                </span>
                            </div>
                            <div className="website">
                                <a href="http://piedpiper.com">http://piedpiper.com</a>
                            </div>
                            <div className="summary">
                                <p>Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.</p>
                            </div>
                            <ul className="highlights">
                                <li>Build an algorithm for artist to detect if their music was violating copy right infringement laws</li>
                                <li>Successfully won Techcrunch Disrupt</li>
                                <li>Optimized an algorithm that holds the current world record for Weisman Scores</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="volunteer" className="row">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-xs-2">
                                <icon className="large entypo-globe"></icon>
                            </div>
                            <div className="col-xs-10">
                                <h2 className="section-title">Volunteer</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="item">
                            <h3 className="company">
                                CoderDojo
                            </h3>
                            <div className="position">
                                <p className="lead">Teacher</p>
                            </div>
                            <div className="date">
                                <span className="startDate">
                                    2012-01-01
                                </span>
                                <span className="endDate">
                                    - 2013-01-01
                                </span>
                            </div>
                            <div className="website">
                                <a href="http://coderdojo.com/">http://coderdojo.com/</a>
                            </div>
                            <div className="summary">
                                <p>Global movement of free coding clubs for young people.</p>
                            </div>
                            <ul className="highlights">
                                <li>Awarded 'Teacher of the Month'</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="education" className="row">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-xs-2">
                                <icon className="large entypo-graduation-cap"></icon>
                            </div>
                            <div className="col-xs-10">
                                <h2 className="section-title">Education</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="item">
                            <h3 className="institution">University of Oklahoma</h3>
                            <div className="area">
                                <p className="lead">Information Technology</p>
                            </div>
                            <div className="studyType">
                                <h4>Bachelor</h4>
                            </div>
                            <div className="date">
                                <span className="startDate">
                                    2011-06-01
                                </span>
                                <span className="endDate">
                                    - 2014-01-01
                                </span>
                            </div>
                            <div className="gpa">
                                GPA: 4.0
                            </div>
                            <ul className="courses">
                                <li>DB1101 - Basic SQL</li>
                                <li>CS2011 - Java Introduction</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* <section id="awards" className="row">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-xs-2">
                                <icon className="large entypo-trophy"></icon>
                            </div>
                            <div className="col-xs-10">
                                <h2 className="section-title">Awards</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="item">
                            <h3 className="title">Digital Compression Pioneer Award</h3>
                            <div className="awarder">
                                <p className="lead">Techcrunch</p>
                            </div>
                            <div className="date">
                                2014-11-01
                            </div>
                            <div className="summary">
                                <p>There is no spoon.</p>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section id="publications" className="row">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-xs-2">
                                <icon className="large entypo-book"></icon>
                            </div>
                            <div className="col-xs-10">
                                <h2 className="section-title">Publications</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="item">
                            <div className="name">
                                <h3>Video compression for 3d media</h3>
                            </div>
                            <div className="publisher">
                                <p className="lead">Hooli</p>
                            </div>
                            <div className="date">
                                2014-10-01
                            </div>
                            <div className="website">
                                <a href="http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)">Link</a>
                            </div>
                            <div className="summary">
                                <p>Innovative middle-out compression algorithm that changes the way we store data.</p>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section id="skills" className="row">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-xs-2">
                                <icon className="large entypo-tools"></icon>
                            </div>
                            <div className="col-xs-10">
                                <h2 className="section-title">Skills</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="item">
                            <h3 className="name">Web Development</h3>
                            <div className="level">
                                <p>
                                    <em>Master</em>
                                </p>
                            </div>
                            <ul className="keywords">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3 className="name">Compression</h3>
                            <div className="level">
                                <p>
                                    <em>Master</em>
                                </p>
                            </div>
                            <ul className="keywords">
                                <li>Mpeg</li>
                                <li>MP4</li>
                                <li>GIF</li>
                            </ul>
                        </div>
                    </div>
                </section> */}
                {/* <section id="languages" className="row">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-xs-2">
                                <icon className="large entypo-chat"></icon>
                            </div>
                            <div className="col-xs-10">
                                <h2 className="section-title">Languages</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="item">
                            <h3 className="language">English</h3>
                            <div className="fluency">
                                <em>Native speaker</em>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section id="interests" className="row">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-xs-2">
                                <icon className="large entypo-heart"></icon>
                            </div>
                            <div className="col-xs-10">
                                <h2 className="section-title">Interests</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="item">
                            <h3>
                                <span className="label label-default label-lg">Wildlife</span>
                            </h3>
                        </div>
                    </div>
                </section> */}
                {/* <section id="references" className="row">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-xs-2">
                                <icon className="large entypo-thumbs-up"></icon>
                            </div>
                            <div className="col-xs-10">
                                <h2 className="section-title">References</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="item">
                            <blockquote className="reference">
                                It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.
                            </blockquote>
                            <div className="name">
                                — Erlich Bachman
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        );
    }
}

export default App;
