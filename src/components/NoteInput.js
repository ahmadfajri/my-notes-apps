import React from "react";

class NoteInput extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault()
        this.props.addNote(this.state)
    }

    render(){
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form className='' onSubmit={this.onSubmitEventHandler}>
                    <input type="text" placeholder="Isi Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <textarea placeholder="Tulis Catatan" onChange={this.onBodyChangeEventHandler} value={this.state.body}></textarea>
                    <button type="submit">Tambah</button>
                </form>
            </div>
        )
    }
}

export default NoteInput