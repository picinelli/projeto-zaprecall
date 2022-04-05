<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/picinelli/projeto-zaprecall/">
    <img src="https://github.com/picinelli/projeto-zaprecall/blob/main/src/assets/raio.svg" alt="Logo" width="100">
  </a>

<h3 align="center">Zap! Recall Project</h3>
  <p align="center">
    Web Development Project using React
    <br />
    <a href="https://github.com/picinelli/projeto-zaprecall/tree/main/src"><strong>JSX code»</strong></a>
</div>

<!-- ABOUT THE PROJECT -->

## Requisitos

- Geral
    - [x]  Manipule o HTML usando somente React (**sem usar o document, nem o localStorage,** nem bibliotecas React, JavaScript e/ou CSS). **Todo o armazenamento de informações deve ser feito via estados.**
    - [x]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub.
    - [x]  **A cada requisito implementado** faça um *commit* com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários *commits*, não há problema. Mas evite colocar mais de um requisito no mesmo *commit*.
- Layout
    - [x]  Aplicar layout para seguindo o Figma.
    - [x]  Use as fontes indicadas no Layout do Figma
- Componentização e dados
    - [x]  Os elementos da página devem ser componentizados com React em arquivos separados.
    - [x]  Os dados dinâmicos da página (como o *deck*, *flashcards*, etc) devem ser representados como *arrays* ou objetos no JavaScript e renderizados na tela.
- Início
    - [x]  Ao iniciar, uma “tela de início” deverá ser exibida.
    - [x]  Ao clicar no botão “Iniciar Recall!”, o *deck* de *flashcards* é exibido na tela.
- *Flashcards*
    - [ ]  Toda vez o que o usuário for jogar, os *flashcards* devem ser embaralhados.
    - [x]  Todos os *flashcards* devem aparecer na tela virados e indexados por números (ex: Flashcard 1, Flashcard 2), de modo a “esconder” o termo ou pergunta que ele contém.
    - [x]  Ao clicar em um *flashcard*, a pergunta ou termo correspondente ao *flashcard* deve aparecer (não é necessária nenhuma animação).
    - [x]  Para ver a resposta do *flashcard*, o usuário deve clicar no ícone de “virar” (o componente é o mesmo, apenas teve seu *layout* adaptado).
        - Ao virar um *flashcard*...
            - [x]  Ao clicar em qualquer um dos botões (Não lembrei, Quase não lembrei ou Zap), o *flashcard* deverá ser dado como respondido e terá seu status alterado para refletir a escolha do usuário:
                - *Flashcard* incorreto (Não lembrei)
                - *Flashcard* correto com esforço (Quase esqueci)
                - *Flashcard* correto imediatamente (Zap!)
            - [x]  Depois de respondida, a pergunta deverá ficar fechada e seu texto tachado com a cor correta correspondente ao seu status e um ícone.
- Resultado final
    - [x]  O resultado deve estar fixado na parte debaixo da página.
    - [x]  Sempre que uma carta for virada...
        - [x]  O número de flashcards respondidos deve ser atualizado
        - [x]  A sequência de respostas deve ser registrada e aparecer no formato de ícones (importante: os ícones devem aparecer de acordo com a ordem de respostas do usuário e não da ordem dos flashcards!).
    - [x]  Quando todos os flashcards forem respondidos...
        - [x]  A mensagem de parabéns deve ser exibida se somente as respostas dos *flashcards* forem “ZAP!” ou “Lembrei com esforço”.
            - [x]  Ao responder todos os *flashcards* e houver pelo menos um *status* "Incorreto", a mensagem de “Putz” deverá ser exibida.

## Bônus (opcional)

- Reiniciar
    - [x]  Ao final de uma rodada, insira um botão de reiniciar que volta para a tela inicial e zera todas as respostas anteriores. Faça isso usando estados (coisas como `window.location` são proibidas para esse bônus).


### Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

<!-- CONTACT -->

### Contato

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Mail][mail-shield]][mail-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/pedro-ivo-brum-cinelli//
[mail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[mail-url]: mailto:cinelli.dev@gmail.com
