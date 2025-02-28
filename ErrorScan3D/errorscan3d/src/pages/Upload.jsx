import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../styles/Upload.scss';
import uploadicon from '../assets/upload.png';

function Upload() {
  const [image, setImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  // Função para traduzir o resultado da análise
  const getAnalysisMessage = (result) => {
    switch (result) {
      case 0:
        return 'Imagem sem erro de impressão';
      case 1:
        return 'Imagem com erro de impressão';
      default:
        return 'Resultado desconhecido';
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Verificar se o arquivo excede o tamanho permitido
    if (file.size > MAX_FILE_SIZE) {
      setError('O arquivo deve ter no máximo 5MB');
      return;
    }

    setLoading(true);
    setError(null);

    // Exibir a imagem localmente antes do upload
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);

    // Criar FormData para envio
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro na requisição ao servidor');
      }

      const data = await response.json();
      console.log(data);  // Verifique o conteúdo da resposta
      setAnalysisResult(data.resultado);

      // Adicionar ao histórico
      setHistory(prevHistory => [
        {
          name: file.name,
          uploadDate: new Date().toLocaleDateString(),
          status: getAnalysisMessage(data.resultado),
        },
        ...prevHistory
      ]);
    } catch (error) {
      setError('Falha ao enviar a imagem. Tente novamente.');
      console.error('Erro ao enviar imagem:', error);
    } finally {
      setLoading(false);
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
            <img src={uploadicon} className='form-img' alt="Upload Icon" />
            <input
              id='file-input'
              type='file'
              style={{ display: 'none' }}
              accept='image/*'
              onChange={handleImageUpload}
            />
            <p className='upload-texto'>
              <span className='upload-texto-destaque'>Clique aqui </span>para carregar a imagem
            </p>
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
              <img
                className='uploaded-container-img'
                src='https://thumbs.dreamstime.com/b/nenhum-elemento-gr%C3%A1fico-de-miniatura-fotografia-nenhuma-imagem-encontrada-ou-dispon%C3%ADvel-na-galeria-s%C3%ADmbolo-espa%C3%A7o-reservado-324671543.jpg'
                alt="Placeholder"
              />
            )}
          </div>
          <div className='uploaded-container-text'>
            <p className='text-title'>Análise da imagem</p>
            <p className='text-infor'>
              Erro detectado: {analysisResult !== null ? getAnalysisMessage(analysisResult) : 'Aguardando análise...'}
            </p>
            {error && <p className='error-message'>{error}</p>}
          </div>
        </div>
      </div>

      <hr className='barra' />

      <div className='container-list'>
        <p className='list-title'>Histórico</p>

        <div className='container-list-header'>
          <ul className='list-header'>
            <li className='list-item'>Nome</li>
            <li className='list-item'>Data do upload</li>
            <li className='list-item'>Status</li>
          </ul>
        </div>

        <hr className='barra' />

        {history.length > 0 ? (
          history.map((entry, index) => (
            <div key={index} className='container-listing'>
              <ul className='list-listing'>
                <li>{entry.name}</li>
                <li>{entry.uploadDate}</li>
                <li>{entry.status}</li>
              </ul>
            </div>
          ))
        ) : (
          <p className="text-infor">Nenhum upload realizado ainda.</p>
        )}
      </div>

      {loading && <div className="loading-indicator">Carregando...</div>}
    </div>
  );
}

export default Upload;