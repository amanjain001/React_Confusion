import React,{Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent'
import {DISHES} from '../shared/dishes.js'
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            selectedDishId:null
        }
    }
    
      onDishSelect(dishId){
            this.setState({selectedDishId:dishId})
        }
    
    render(){
        const HomePage=()=>{
            return(<Home/>);
        }
        console.log("Main Render")
        return(
            <>
                {/*<Header />
                <Menu dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)}/>
                <Dishdetail dish= {this.state.dishes.filter((dish)=>dish.id===this.state.selectedDishId)[0] } />
                <Footer/>*/}
                <Header/>
                <Switch>
                 <Route path='/home' component={HomePage} />
                 <Route exact path='/menu' component={()=><Menu dishes= {this.state.dishes} /> } />
                 <Redirect to='/home' />
                </Switch>
                <Footer/>
                
            </>
            )
    }
}
export default Main;
