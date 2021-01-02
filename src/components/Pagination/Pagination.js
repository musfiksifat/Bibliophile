import React from "react";
import "./style.css";
import ReactPaginate from "react-paginate";
import { Button } from 'reactstrap';

const Pagination=(props)=>{
    const page_links = [];
    for (let i = 1; i <= props.totalPages; i++) {
        let isActive;
        if (props.currentPage === i) {
            isActive = "active ";
        } else {
            isActive = "disabled ";
        }

        let classes = "pagination__link--" + isActive;
        page_links.push(
            <Button
                outline color="danger"
                size="sm"
                className={classes}
                key={i}
                onClick={() => {
                    props.nextPage(i);
                }}
            >
                {i}
            </Button>
        );

    }
    return (

         <div className="container">
             <div className="pagination" >{page_links}

             </div>
         </div>

        //<div className="container" style={{position: 'absolute', left: '50%', right: '50%', textAlign:"center",
         //   transform: 'translate(-50%, -50%)'}}>
         //   <div className="row">{page_links}</div>
        //</div>
    );
}

export default Pagination