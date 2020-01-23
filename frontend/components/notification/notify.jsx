import React from 'react';
import { Link } from "react-router-dom";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.showContent = this.showContent.bind(this);
    this.state = {
        toShow: false
    }
  }
  

  componentDidMount() {
    this.props.fetchNewspapers();
  }



  render() {
      const svgIcon = (
        <svg
          className='svg'
          xmlns='http://www.w3.org/2000/svg'
          fill-rule='evenodd'
          clip-rule='evenodd'
        >
          <path d='M1 20v-2.946c1.993-.656 2.575-2.158 3.668-6.077.897-3.218 1.891-6.784 4.873-8.023-.027-.147-.041-.299-.041-.454 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .156-.014.309-.042.458 2.987 1.244 3.984 4.813 4.884 8.033 1.103 3.95 1.697 5.423 3.658 6.062v2.947h-7c0 2.208-1.792 4-4 4s-4-1.792-4-4h-7zm14 0h-6c0 1.656 1.344 3 3 3s3-1.344 3-3zm-13-1h20v-1.241c-2.062-.918-2.82-3.633-3.621-6.498-1.066-3.814-2.167-7.758-6.379-7.761-4.21 0-5.308 3.937-6.369 7.745-.8 2.872-1.559 5.593-3.631 6.514v1.241zm11.492-16.345l.008-.155c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5l.008.152c.455-.099.949-.152 1.487-.152.542 0 1.039.054 1.497.155z' />
        </svg>
      )
    

    return (
      <div className='dropdown'>
        <button 
            // onClick={this.showContent}
            className='dropbtn'>{svgIcon}
        </button>
          <div className={showing}>
            {this.props.newspapers.map(newspaper => (
             
                <Link to={`/newspapers/${newspaper.id}`}>
                <img src={newspaper.photoUrl} className='news-image'/>
                <br/>
                <p className='news-title'>{newspaper.title}</p>
            </Link>
         ))}
          </div>

          <button onCLick={this.closeContent}>CLOSE</button>
      </div>
    )
  }
}

export default Notification;