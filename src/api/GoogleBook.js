import axios from "axios"

const googleBookAPI=axios.create({
    baseURL:"https://www.googleapis.com/books/v1",
})

const getBooksByTerm=(SearchTerm,setBooks,setTotalPages,pageNumber,sortTerm)=>{
    googleBookAPI.get("/volumes",{
        params:{
            q:SearchTerm,
            startIndex:pageNumber,
            maxResults:12,
            orderBy: sortTerm,
        }
    }).then((response)=>{
        setBooks(response.data.items)
        setTotalPages(Math.ceil(response.data.totalItems/18))
    })
}

const getBooksDetails = (BookId, SetCurrentBook) => {
    googleBookAPI.get("/volumes/" + BookId)
        .then((response) => {
            console.log(response.data);
            SetCurrentBook(response.data);
        });
};


export {getBooksByTerm,getBooksDetails}