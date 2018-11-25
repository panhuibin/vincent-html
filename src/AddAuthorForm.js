import React from 'react'

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: ['a','b'],
            bookTemp: ''
        }
        this.onFieldChange = this.onFieldChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAddBook = this.handleAddBook.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleAddBook(event) {
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        })
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
          <div className ="AddAuthorForm_input">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}></input>
          </div>      
          <div className ="AddAuthorForm_input">
            <label htmlFor="imageUrl">ImageUrl</label>
            <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}></input>
          </div>   
          <div className ="AddAuthorForm_input">
            <label htmlFor="bookTemp">Books</label>
            {this.state.books.map((book) => <p key={book}>{book}</p>)}
            <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange}></input>
            <button type="button" value="+" onClick={this.handleAddBook}></button>
          </div>          
          <input type="submit" value="Add">
          </input>
        </form>
    };
}
 
function addAuthorForm({match, onAddAuthor}){
    return <div className = "AddAuthorForm">
      <h1> add author form</h1>
      <AuthorForm onAddAuthor={onAddAuthor}/>
    </div>;
  }

export default addAuthorForm;
  