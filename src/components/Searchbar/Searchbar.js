import React from "react";
import {Button, ButtonGroup, CardImg} from "reactstrap";
import "./style.css"

const Searchbar=(props)=>{
    return (
        <div className="container">
            <div className="row">
                <section className="col s6 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div style={{marginTop:'50px'}}>
                            <input className="input-field"
                                   placeholder="  Search for your books"
                                   type="text"
                                   onChange={props.handleChange}/>
                                <button className="Search_button">Search</button>
                        </div>
                    </form>

                    <form action="" onSubmit={props.handleSubmit}>

                        <ButtonGroup className="Sorting-row">
                            <Button outline disabled>Sort By</Button>
                            <Button
                                style={{backgroundColor: '#98B188'}}
                                type='submit'
                                onClick={() => {
                                    props.sorter('newest')
                                }}
                            >Newest</Button>
                            <Button
                                style={{backgroundColor: '#98B188'}}
                                type='submit'
                                onClick={() => {
                                    props.sorter('relevance')
                                }}
                            >Oldest</Button>
                            <Button
                                style={{backgroundColor: '#98B188'}}
                                type='submit'
                                onClick={() => {
                                    props.sorter('relevance')
                                }}
                            >Most Relevant</Button>
                        </ButtonGroup>

                    </form>
                </section>
            </div>
        </div>
    )
}

export default Searchbar