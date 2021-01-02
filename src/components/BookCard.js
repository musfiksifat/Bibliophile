import React from "react";
import {Card,CardImg} from "reactstrap";
import { Link} from "react-router-dom";



const Book = (props) => {
    let ImageURL;
    if (props.data.volumeInfo.imageLinks == undefined) {
        ImageURL = null;
    } else {
        ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
    }
    return (
        <div className="col s13 m4" style={{ width:'280px', height:'650px'}}>
            <div className="card">
                <div classname="card-image">
                    {ImageURL == null ? (
                        <CardImg
                            src="https://picsum.photos/200/300"
                            alt=""
                            style={{ width: "280px", height: "280px" }}
                        />
                    ) : (
                        <img
                            src={ImageURL}
                            alt=""
                            style={{ width: "280px", height: "280px"}}
                        />
                    )}
                </div>
                <div className="card-content">
                    <p><b>{props.data.volumeInfo.title} </b></p>
                    By {props.data.volumeInfo.authors}
                    <p><b>{'Date: '} </b>
                        {props.data.volumeInfo.publishedDate}</p>
                </div>

                <div className="card-action" style={{height:'100px'}}>
                    <Link to={{pathname:"/book/"+props.data.id, book_id:props.data.id}}
                      style={{ color: `#688B6E`}}><p><b>See book details</b></p>
                    </Link>
                </div>

            </div>

        </div>

    );
};

export default Book;