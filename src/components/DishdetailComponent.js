import React,{Component} from 'react'
import {Card,CardImg,CardTitle,CardBody,CardText} from 'reactstrap'
class Dishdetail extends Component{
    
     componentDidMount(){
            console.log("Dish Mount")
        }
            
    componentDidUpdate(){
        console.log("DIsh Updated")
    }
    
    renderComments(comments){
        if(comments===null || comments.length===0){
            return(
                <div></div>
                )
        }
        else
        {
           const listItems=comments.map((commentItem)=>{
               return(
                <ul key={commentItem.id} className="list-unstyled">
                   <li  >
                   {commentItem.comment}
                   </li>
                   <li>
                       {`--- ${commentItem.author}, `}  
                       {new Intl.DateTimeFormat('en-US', 
                       { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentItem.date)))
                       }
                   </li>
                </ul>   
                   )
           });
           
        return(
            <div>
                <h4>Comments</h4>
                <br/>
                {listItems}
            </div>
            
            )
        }
        
    }
    renderDish(){
      
                 return(
                     <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1" >
                                <Card key={this.props.dish.id}>
                                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                                    <CardBody>
                                      <CardTitle>{this.props.dish.name}</CardTitle>
                                      <CardText>{this.props.dish.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                {this.renderComments(this.props.dish.comments)}
                            </div>
                        </div>
                    </div>
                     )
           
    }
    
    render(){
        console.log("Dishdetail Render")
               if(this.props.dish!=null){
                   return(
                       this.renderDish()
                       )
         
    }
    else
    return (<div></div>)
}
}
export default Dishdetail