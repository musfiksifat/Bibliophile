import React from "react";
import Book from "./BookCard";
import {CardImg} from "reactstrap";

const BookList = (props)=>{
    return(
        <div className="container">
            <div className="column" >
                <div className="col s13" style={{marginTop:'100px', columnCount:'3'}}>
                    {props.books.map((book,i)=>{
                        return (<Book data={book} key={i}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default BookList;