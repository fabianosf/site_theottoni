import slide1 from "imagens/slide1-1920x550.jpg.jpeg";
import logo from "imagens/logo.png";
import logoFooter from "imagens/logo-footer.png";
import iconTel from "imagens/icon-tel.png";
import iconHora from "imagens/icon-hora.png";
import geracaoRios from "imagens/Geracao-de-energia-em-Rios-Urbanos-2000x550.jpg.jpeg";
import nature from "imagens/aproximacao-da-natureza-promove-qualidade-de-vida-1-386x480.jpg.jpeg";
import itaipu from "imagens/itaipu_foto_caio_coronel_2_0-386x480.jpg.jpeg";
import areaAtuacao from "imagens/area_atuacao.jpg.jpeg";
import areaAtuacao1 from "imagens/area_atuacao-1.jpg.jpeg";
import lab from "imagens/DSC_0209-386x480.jpeg";
import imagem1 from "imagens/Imagem1-386x480.png";
import irrigacao from "imagens/41366714600_b4d63e14fd_k-386x480.jpg.jpeg";
import quemSomos from "imagens/quem-somos-home.png";
import chorume from "imagens/chorume-386x480.png";
import modalidades from "imagens/modalidades-de-contrato-386x480.jpg.jpeg";
import predio from "imagens/theottoni.jpg.jpeg";
import favicon from "imagens/favicon.ico";

export const assets = Object.freeze({
  heroSlide: slide1,
  logo,
  logoFooter,
  iconTel,
  iconHora,
  favicon,
  juridico: modalidades,
  imovelPrincipal: predio,
});

export const serviceHero = Object.freeze({
  "geracao-de-energia-em-rios-urbanos": geracaoRios,
  "saneamento-basico-e-geral": nature,
  "geracao-de-hidroenergia": itaipu,
  "diagnostico-ambiental": areaAtuacao,
  "meio-ambiente": areaAtuacao1,
  "hidraulica-experimental": lab,
  "sistemas-de-transportes-hidricos": imagem1,
  "sistemas-de-irrigacao": irrigacao,
  "desenvolvimento-de-cursos-de-extensao-e-de-especializacao-na-area-de-recursos-hidricos": quemSomos,
  "exclusividades-de-nossa-empresa": chorume,
});

export const galeriaItems = Object.freeze([
  { src: predio, alt: "Prédio" },
  { src: quemSomos, alt: "Eólica" },
]);
