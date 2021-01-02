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
            orderBy:"newest"
        }
    }).then((response)=>{
        if(sortTerm==='ascending'){
            setBooks(
            response.data.items.sort(function(a, b) {
                return (a.volumeInfo.title < b.volumeInfo.title ? -1 :(a.volumeInfo.title > b.volumeInfo.title) ? 1 : 0)
            }))
        }
        else if(sortTerm==='descending') {
            setBooks(
            response.data.items.sort(function(a, b) {
                return (b.volumeInfo.title < a.volumeInfo.title ? -1 :(b.volumeInfo.title > a.volumeInfo.title) ? 1 : 0)
            }))
        }
        else if(sortTerm==='newest'){
            setBooks(
                response.data.items.sort(function(a, b) {
                    return (new Date(b.volumeInfo.publishedDate) - new Date(a.volumeInfo.publishedDate));

                }))
        }
        else if(sortTerm==='oldest'){
            setBooks(
                response.data.items.sort(function(a, b) {
                    return (new Date(a.volumeInfo.publishedDate) - new Date(b.volumeInfo.publishedDate));

                }))
        }
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