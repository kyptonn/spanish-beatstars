import React, { Component } from 'react';
import firebase from 'firebase';

import './UploadFile.css'

class UploadFile extends Component {
    constructor () {
        super();
        this.state={
            uploadValue: 1,
            beat: null
        };

        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload(event) {
        const file= event.target.files[0];
        const storageRef = firebase.storage().ref(`/Beats/${file.name}`);
        const task = storageRef.put(file);

        task.on('state-changed', snapshot => {
            let percentage = (snapshot.bytesTransfererred / snapshot.totalBytes) *100;
            this.setState( {
                uploadValue: percentage
            })
        }, error => {
            console.log(error.message) 
        }, () => {

            storageRef.getDownloadURL().then(url =>{
                this.setState({
                    uploadValue: 100,
                    beat:"El Beat se ha subido correctamente!"
                });
            });
           /*  this.setState({
                uploadValue: 100,
                picture: task.snapshot.donwloadURL
            }); */
           

        });
    }


    render() {
        return (
            <div>
                <progress value={this.state.uploadValue} max="100"></progress>
                
                <br/>
                <div className="seleccion">
                    <input type="file" onChange={this.handleUpload}/>
                </div>
                <br/>
               {/*  <img src={this.state.picture}/> */}
                <div className="subida-correcta">
                    <h3>{this.state.beat}</h3>
                </div>
                
            </div>
        )
    }
}

export default UploadFile
