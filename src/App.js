import React, { useState } from 'react';


import Header from './components/Header';

import'./App.css';
import img from './assets/git.jpeg'

// Components
// Propriedade
// Estado e Imutabilidade

export default function App() {

  

  const [projects , setProjects] =useState(['Desenvolvimento de app', 'Front-End Web']);

  function handleAddProject() {
    

    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={img}></img>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}