# Sistema de Cadastro de Produtos - Interface Web

Este repositório contém a interface web do Sistema de cadastro de produtos. As páginas foram desenvolvidas utilizando HTML, CSS e JavaScript, simulando um sistema de login e um painel de cadastro com a funcionalidade de cadastrar produtos à tabela.

**Acesse a versão publicada:** [https://amandameneseso.github.io/Sistema-de-cadastro-de-produtos](https://amandameneseso.github.io/Sistema-de-cadastro-de-produtos)

## Páginas Incluídas

Este projeto é composto pelas seguintes páginas HTML:

-   **`index.html` (Login):** Apresenta um formulário de autenticação simples, contendo campos para o preenchimento de e-mail e senha aleatórios.
-   **`cadastro.html` (Cadastro de Produtos):** Exibe um formulário para o cadastro de produtos, incluindo campos como nome, categoria, preço, etc. Ao final desta página, uma tabela dinâmica lista os produtos que foram (simuladamente) cadastrados.

## Funcionalidades Principais

A interface web oferece as seguintes funcionalidades visuais e de interação:

-   **Layout Moderno e Responsivo**
-   **Simulação de Login:** A página de login (`index.html`) simula um processo de autenticação. Embora não haja backend real, ao interagir com o formulário, o usuário é (simuladamente) redirecionado para a área de cadastro (`cadastro.html`).
-   **Formulário de Cadastro:** O formulário de cadastro de produtos (`cadastro.html`) oferece campos claros para a entrada de dados.
-   **Tabela Dinâmica de Produtos:** Na página de cadastro (`cadastro.html`), os produtos "cadastrados" são exibidos em uma tabela. Os dados exibidos nesta tabela são estáticos nesta versão da interface, mas visualizam como os dados seriam apresentados após o cadastro.

## Como Usar Localmente

Para visualizar e interagir com a interface web no seu ambiente local, siga estas instruções:

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/amandameneseso/Sistema-de-cadastro-de-produtos.git
    cd Sistema-de-cadastro-de-produtos
    ```

2.  **Abra os Arquivos no Navegador:**

    * **Opção 1 (Clique Duplo):** Navegue até a pasta do repositório no seu sistema de arquivos e dê um duplo clique nos arquivos `index.html` ou `cadastro.html` para abri-los diretamente no seu navegador web padrão.

    * **Opção 2 (Live Server - VS Code):** Se você utiliza o Visual Studio Code, pode instalar a extensão "Live Server". Após instalar, abra a pasta do projeto no VS Code, clique com o botão direito em um dos arquivos `.html` e selecione "Open with Live Server". Esta opção oferece um servidor local com recarregamento automático ao salvar as alterações.

## Integração com Automação em Python

Este sistema web foi projetado para ser utilizado em conjunto com um script de automação em Python que utiliza a biblioteca `pyautogui`. O script Python é capaz de preencher os formulários desta interface de forma automática, utilizando dados provenientes de um arquivo `.csv`.

**Repositório com o script de automação:**

🔗 https://github.com/amandameneseso/Automacao-para-o-Sistema-de-cadastro-de-produtos

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT). Você é livre para usar, copiar, modificar e compartilhar este código, desde que a licença seja mencionada.
