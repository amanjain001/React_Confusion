import React from 'react'
import {Card,CardImg,CardTitle,CardBody,CardText} from 'reactstrap'

function RenderComments({comments}){
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

function RenderDish({dish}){
      
                 return(
                     <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1" >
                                <Card key={dish.id}>
                                    <CardImg top src={dish.image} alt={dish.name} />
                                    <CardBody>
                                      <CardTitle>{dish.name}</CardTitle>
                                      <CardText>{dish.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                <RenderComments comments={dish.comments} />
                            </div>
                        </div>
                    </div>
                     )
           
    }
const Dishdetail=(props)=> {
                
               if(props.dish!=null){
                   return(
                       <RenderDish dish={props.dish}/>
                       )
         
    }
    else
    return (<div></div>)

}
export default Dishdetail