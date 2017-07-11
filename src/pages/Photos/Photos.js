import React from 'react'
import './Photos.css'
// Cache gallery container
const galleryContainer = document.querySelector('.react-gallery');

// Create new array with URLs for images
let imgUrls = [
  'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/165850/pexels-photo-165850.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/164226/pexels-photo-164226.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/121490/pexels-photo-121490.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/45242/wolf-torque-wolf-moon-cloud-45242.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/50570/sandstone-the-wave-rock-nature-50570.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/63695/pexels-photo-63695.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/63917/pexels-photo-63917.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/209943/pexels-photo-209943.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/175769/pexels-photo-175769.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/209862/pexels-photo-209862.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/449460/pexels-photo-449460.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/210979/pexels-photo-210979.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/26695/pexels-photo-26695.jpg?h=350&auto=compress&cs=tinysrgb',
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
      url: ''
    }

    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    return(
      <div refs='gallery-container' className='container-fluid gallery-container'>
        <div className='row'>
          {
            imgUrls.map((url, index) => {
               return <div className='col-sm-6 col-md-3 col-xl-2'>
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
