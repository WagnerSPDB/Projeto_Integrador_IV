import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import '../styles/Upload.scss'
import uploadicon from '../assets/upload.png'

function Upload() {
  const [image, setImage] = useState(null);

  const history = [
    {
      name:'imagem1.png',
      uploadDate:'09/01/25',
      status:'sem erro'
    },
    {
      name:'imagem2.png',
      uploadDate:'09/01/25',
      status:'sem erro'
    },
    {
      name:'imagem2.png',
      uploadDate:'09/01/25',
      status:'sem erro'
    },
    {
      name:'imagem2.png',
      uploadDate:'09/01/25',
      status:'sem erro'
    }

  ]

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('file-input').click();
  };

  return (
    <div className='upload'>
      <NavBar />
      <div className='upload-container' onClick={triggerFileInput}>
        <form>
          <div className='upload-itens'>
            <img src={uploadicon} className='form-img' />

            <input
              id='file-input'
              type='file'
              style={{ display: 'none' }}
              accept='image/*'
              onChange={handleImageUpload} />

            <p className='upload-texto'><p className='upload-texto-destaque'>Clique aqui </p>para carregar a imagem</p>
            <p className='upload-texto'>Máximo de 5MB</p>
          </div>

        </form>
      </div>
      <div className='uploaded-container'>
        <div className='uploaded-container-white'>

          <div className='uploaded-container-img'>
            {image ? (
              <img src={image} alt="Uploaded" className='uploaded-container-img' />
            ) : (
              <img className='uploaded-container-img' src='https://thumbs.dreamstime.com/b/nenhum-elemento-gr%C3%A1fico-de-miniatura-fotografia-nenhuma-imagem-encontrada-ou-dispon%C3%ADvel-na-galeria-s%C3%ADmbolo-espa%C3%A7o-reservado-324671543.jpg' ></img>
            )}
          </div>
          <div className='uploaded-container-text'>
            <p className='text-title'>
              Análise da imagem
            </p>
            <p className='text-infor'>
              Erro detectado: exemplo
            </p>
          </div>
        </div>


      </div>
      <hr className='barra'></hr>
      <div className='container-list'>
        <div > 
          <p className='list-title'>
            Histórico
          </p>
        </div>
        <div className='container-list-header'>
         <ul className='list-header'>
            <li className='list-item'>
              Nome
            </li>
            <li className='list-item'>
              Data do upload
            </li>
            <li className='list-item'>
              Status
            </li>
          </ul>
        </div>
        <hr className='barra'></hr>
        
          {history.map((history, index)=>(
            <div key={index} className='container-listing'>
              <ul  className='list-listing'>
                <li >
                  {history.name }
                </li>
                <li>
                  {history.uploadDate}
                </li>
                <li>
                  {history.status}
                </li>
              </ul>
            </div>
          ))}
        
      </div>
    </div>
  )
}

export default Upload
