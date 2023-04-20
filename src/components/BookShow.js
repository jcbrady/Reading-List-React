import { useState } from "react";
import BookEdit from './BookEdit'

function BookShow({ book, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false)


    const handleDeleteClick = () => {
        // console.log(book.id)
        // console.log(onDelete)
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    }
    
    let content = <h3>{book.title}</h3>
    if (showEdit) {
        // content = <BookEdit bookTitle={book.title} />
        // I think we have to go all the way to the top level component to setBooks(book.title) in the main App component, don't we? 
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

    return ( 
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
            <div>{ content }</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick
                }>Edit</button>
                <button className="delete" onClick={handleDeleteClick}> Delete </button>
                </div>

        </div>
     );
}

export default BookShow;