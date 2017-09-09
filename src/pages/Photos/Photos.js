import React from 'react'
import './Photos.css'
import Dropzone from 'react-dropzone';
import request from 'superagent';
// Cache gallery container
const galleryContainer = document.querySelector('.react-gallery');

const CLOUDINARY_UPLOAD_PRESET = 'dipsl0dcj';
const CLOUDINARY_UPLOAD_URL = '	http://res.cloudinary.com/dipsl0dcj ';


// Create new array with URLs for images
let imgUrls = [
  'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/164226/pexels-photo-164226.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://pbs.twimg.com/media/DEwqxC6XsAE0BiJ.jpg',
  'https://images.pexels.com/photos/45242/wolf-torque-wolf-moon-cloud-45242.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/50570/sandstone-the-wave-rock-nature-50570.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/63695/pexels-photo-63695.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/209943/pexels-photo-209943.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/175769/pexels-photo-175769.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/209862/pexels-photo-209862.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/449460/pexels-photo-449460.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/210979/pexels-photo-210979.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/122260/pexels-photo-122260.jpeg?h=350&auto=compress&cs=tinysrgb'
];

// Component for gallery image
class GalleryImage extends React.Component {
  render() {
    return(
      <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
    )
  }
}

// Component for gallery modal
class GalleryModal extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return(
      <div isOpen={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
        <div className='modal-body'>
          <a className='modal-close' href='#' onClick={this.props.onClick}><span className='fa fa-times'></span></a>

          <img src={this.props.src} />
        </div>
      </div>
    )
  }
}

// Component for gallery
class Photos extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: '',
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''

    }

    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }


  render() {
    return(
      <div className='container-fluid gallery-container'>
        <form>
          <div className="FileUpload">
            <Dropzone
              onDrop={this.onImageDrop.bind(this)}
              style={{padding: 10, border: '1px solid deepskyblue'}}
              multiple={false}
              accept="image/*">
              <div>Trascina qui un immagine 🌄 oppure clicca per selezionare un file da caricare.</div>
            </Dropzone>
          </div>

          <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
          </div>
        </form>

        <div className='row'>
          {
            imgUrls.map((url, index) => {
               return <div key={url} className='col-sm-6 col-md-3 col-xl-2'>
                  <div className='gallery-card'>
                    <GalleryImage className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />

                    <span className='card-icon-open fa fa-expand' value={url} onClick={(e) => this.openModal(url, e)}></span>
                  </div>
                </div>
             })
           }
        </div>

        <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />
      </div>
    )
  }

  // Function for opening modal dialog
  openModal(url, e) {
     this.setState({
       showModal: true,
       url: url
     })
   };

  // Function for closing modal dialog
  closeModal() {
    this.setState({
      showModal: false,
      url: ''
    })
  }
}


export default Photos
