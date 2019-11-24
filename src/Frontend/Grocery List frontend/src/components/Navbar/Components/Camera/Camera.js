import React, { Component } from 'react';
import './Camera.css'

class Camera extends Component {
    render() {
      return (
        <div class="image-upload">
             <label for="file-input">
                <img src="https://icon-library.net/images/upload-photo-icon/upload-photo-icon-21.jpg" alt="Upload Bill"/>
            </label>

            <input id="file-input" type="file"  accept="image/*" capture="camera"/>
        </div>
      );
    }
  }
  
export default Camera;