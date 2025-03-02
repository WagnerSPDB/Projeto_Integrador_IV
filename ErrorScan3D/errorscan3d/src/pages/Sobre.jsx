import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Sobre.scss';
import fish from '../assets/fish.png';

function Sobre() {
  return (
    <div className="container">
          <NavBar />
          <div className="about-image">
            <img src={fish} alt="" className='fish' />
          </div>
          <div className="about-text">
            <h1>Sobre nós</h1>
            <p>
              Desenvolvemos um software inovador para classificação de erros de
              impressão 3D, ajudando você a identificar e corrigir falhas com
              facilidade.
            </p>
          </div>

          <section className="team-section">
            <div className="team-member left">
              <div className="member-info">
                  <h3>Ana Larissa</h3>
                  <p>Design e Banco de dados.</p>
              </div>
            </div>
            <div className="team-member right">
              <div className="member-info">
                <h3>Antonio Everton</h3>
                <p>Back-end e APIs.</p>
              </div>
            </div>
            <div className="team-member left">
              <div className="member-info">
                <h3>Lemuel</h3>
                <p>Front-end e Planejamento.</p>
              </div>
            </div>
            <div className="team-member right">
              <div className="member-info">
                <h3>Maria Clara</h3>
                <p>Front-end e Planejamento.</p>
              </div>
            </div>
            <div className="team-member left">
              <div className="member-info">
                <h3>Wagner</h3>
                <p>Back-and e Modelos Aplicados.</p>
              </div>
            </div>
        </section>
    </div>
  );
};

export default Sobre;
