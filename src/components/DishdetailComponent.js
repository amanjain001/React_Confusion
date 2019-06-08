import React,{Component} from 'react'
import {Card,CardImg,CardImgOverlay,CardTitle,CardBody,CardText} from 'reactstrap'
class Dishdetail extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
        
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
                   {`--- ${commentItem.author} ${commentItem.date}`}
                   </li>
                </ul>   
                   )
           });
           
        return(
            <div>
                <h4>Comments</h4>
                {listItems}
            </div>
            
            )
        }
        
    }
    renderDish(){
      
                 return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1" >
                        <Card key={this.props.selectedDish.id}>
                            <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                            <CardBody>
                              <CardTitle>{this.props.selectedDish.name}</CardTitle>
                              <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
                     )
           
    }
    
    render(){
               if(this.props.selectedDish!=null){
                   return(
                       this.renderDish()
                       )
         
    }
    else
    return (<div></div>)
}
}
export default Dishdetail