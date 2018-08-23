import React,{Component} from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {store} from '../../store';

class Mybook extends Component{
	componentDidMount(){
		$.ajax({
			url:'http://localhost:2139/book',
			data:{
				id:this.props.match.params.id
			},
			success:function(data){
				// console.log(data.data)
				store.dispatch({type:'book_to',text:data.data})
			}
		})
	}
	componentDidUpdate(){
		$.ajax({
			url:'http://localhost:2139/book',
			data:{
				id:this.props.match.params.id
			},
			success:function(data){
				// console.log(data.data)
				store.dispatch({type:'book_to',text:data.data})
			}
		})
	}
	render(){
		// console.log(this.props.match.params)
		return(<div dangerouslySetInnerHTML={{__html:store.getState().book}}>
		</div>)
	}
}

class Book extends Component{
	render(){
		return(<Router>
			<div>
				<Link to='/001'>田园辣妻萌包子</Link>
				<hr />
				<Link to='/002'>凤倾天下：逆天邪妃</Link>
				<hr />
				<Link to='/003'>楚先生的甜宠娇妻</Link>
				<hr />
				<Link to='/004'>绝色丹药师：鬼王妖妃</Link>
				<hr />
				
				<Route path='/:id' component={Mybook} />
			</div>
		</Router>)
	}
}

export default Book;