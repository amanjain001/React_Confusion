import React,{Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent'
import Contact from './ContactComponent'
import About from './AboutComponent.js'
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
    
    //   onDishSelect(dishId){
    //         this.setState({selectedDishId:dishId})
    //     }
    
    
    
    
    
    render(){
        const HomePage=()=>{
            return(<Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}  
                         promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                         leader={this.state.leaders.filter((leader) => leader.featured)[0]}
             />);
        }
        
        const DishWithId = ({match}) => {
        return(
            <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id=== parseInt(match.params.dishId,10))[0]}
                                                       
            comments={this.state.comments.filter((comment)=>comment.dishId===
                                                        parseInt(match.params.dishId,10))} />
                                                        )
            
        }
        
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
                 <Route exact path='/aboutus' component={()=><About leaders={this.state.leaders} />} />
                 <Route exact path='/menu' component={()=><Menu dishes= {this.state.dishes} /> } />
                 <Route path='/menu/:dishId' component={DishWithId} />
                 <Redirect to='/home' />
                </Switch>
                <Footer/>
                
            </>
            )
    }
}
export default Main;
