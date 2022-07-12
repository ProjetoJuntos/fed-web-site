import React from 'react';
import Menu from './components/Menu';
import BannerPr from './components/Banners/bannerPr';
import Hr_divisao from './components/Linhas/hr_divisao';
import Titulo_texto from './components/Titulos/titulo_texto';
import TableHomePr from './components/Tabela/TableHomePr';
import Banner2 from './components/Banners/banner2';
import Ranking from './components/Ranking/ranking';
import Banner3Somos from './components/Banners/banner3Somos';
import Rodape from './components/Rodape/rodape';
import TelaLogin from './components/Login/telaLogin';

function HomePrincipal() {
  return (
    <div className="App">
      <Menu />
      <BannerPr />
      <Hr_divisao />
      <Titulo_texto />
      <TableHomePr />
      <Banner2 />
      <Ranking />
      <Banner3Somos />
      <Rodape/>
      <TelaLogin/>
    </div>
  );
}

export default HomePrincipal;
