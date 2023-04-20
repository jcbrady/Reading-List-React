import { useState } from 'react'

function BookEdit({book, onSubmit}) {

    console.log('bookEdit', book)
    // console.log('onEdit', onEdit)

    const [title, setTitle] = useState(book.title)

    const handleChange = (e) => {
          setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // how do I access the value in the form
        // normally we'd use the 'name' attribute and a query string, how do we get that input value here???
        // console.log('easy e', e)
        // setTitle('New Book Title')
        // setTitle('New Book Title', onEdit(title))
        // This crashed without error- infinate loop: setTitle(onEdit())
        // instead
        // onEdit(setTitle)
        // onEdit(book.id, title)
        onSubmit(book.id, title)
    }

    return ( 
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">Save</button>
        </form>
     );
}

export default BookEdit;