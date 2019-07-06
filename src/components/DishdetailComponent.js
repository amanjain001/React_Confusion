import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
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
                                <Card key={dish.id}>
                                    <CardImg top src={dish.image} alt={dish.name} />
                                    <CardBody>
                                      <CardTitle>{dish.name}</CardTitle>
                                      <CardText>{dish.description}</CardText>
                                    </CardBody>
                                </Card>
                     );
           
    }
const Dishdetail=(props)=> {
                console.log(props)
               if(props.dish!=null){
                   return(
                    
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                </div>
 
                       );
         
    }
    else
    return (<div className="container"><div className="row"><p style={{marginBottom:102}}>Dish not found</p></div></div>)

}
export default Dishdetail