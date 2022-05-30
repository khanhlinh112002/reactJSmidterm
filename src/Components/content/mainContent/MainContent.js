import React,{Component} from 'react';
import Part1 from '../part1/Part1';
import Part2 from '../part2/Part2';
import Part3 from '../part3/Part3';


export default class MainContent extends Component{
    render() {
        return (
            <div className="row">
<Part1></Part1>
<Part2></Part2>
<Part3></Part3>
            </div>
        )
    }
}