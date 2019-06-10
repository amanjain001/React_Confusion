import React,{Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent'
import Contact from './ContactComponent'
import {DISHES} from '../shared/dishes.js'
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            selectedDishId:null,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }
    
      onDishSelect(dishId){
            this.setState({selectedDishId:dishId})
        }
    
    render(){
        const HomePage=()=>{
            return(<Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}  
                         promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                         leader={this.state.leaders.filter((leader) => leader.featured)[0]}
             />);
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
                 <Route exact path='/contactus' component={Contact} />
                 <Route exact path='/menu' component={()=><Menu dishes= {this.state.dishes} /> } />
                 <Redirect to='/home' />
                </Switch>
                <Footer/>
                
            </>
            )
    }
}
export default Main;
