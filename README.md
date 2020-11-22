<h1 align="center">Rapid Bot</h1>
<p align="center">Bot do Discord open-source para gerenciamento de servidores,ouvir músicas e muito mais!</p>
<p align="center"><a href="http://rapid-site.surge.sh/">Site para configuração do servidor</a></p>
<p align="center">
    <a href="https://discord.gg/v5d3PZ9"><img src="https://img.shields.io/discord/704882848364101763"></a>
    <img src="https://img.shields.io/github/repo-size/ReddyyZ/Rapid">
    <img src="https://img.shields.io/github/issues/ReddyyZ/Rapid">
    <img src="https://img.shields.io/github/license/ReddyyZ/Rapid">
    <img src="https://img.shields.io/badge/node-14.2.0-green">
</p>
<p align="center">
    <a href="https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot" target="_blank">Me adicione ao seu servidor!</a>
</p>
<p align="center">
    <a href="https://top.gg/bot/734154625845952694">
    <img src="https://top.gg/api/widget/734154625845952694.svg" alt="Rapid" />
</a>
</p>

## :computer: Bibliotecas usadas
- Principal
    - discord.js
    - mongoose
- Música
    - ffmpeg
    - ffmpeg-static
    - ytdl-core
    - @discordjs/opus
- Memes
    - canvas
- Backup
    - discord-backup
- Anti Spam
    - discord-anti-spam

## :pencil: Comandos
- Comandos para Administração do servidor
    - r!ban @Test#3333
        - Banir usuários
    - r!kick @Test#3333
        - Kickar usuários
    - r!setadmin @Test#3333
        - Dar o cargo 'Rapid Admin' a usuários
    - r!clear 10
        - Limpa o chat
    - r!mute @Test#3333 1h
        - Muta um usuário
    - r!unmute @Test#3333
        - Desmuta um usuário
    - r!antiflood
        - Ativa ou desativa o sistema anti-flood
    - r!stopchat (Chat)
        - Para o chat desabilitando a permissão dos usuários de falar
    - r!resumechat (Chat)
        - Habilita novamente a permissão dos usuários de falar
    - r!sendembed (Título) ; (Descrição) ; (Thumbnail)
        - Envia uma mensagem em formato embed
        
- Comandos para ouvir músicas
    - r!play União Flasco
        - Adicionar uma música a fila de reprodução
    - r!pause
        - Pausar uma música
    - r!resume
        - Despausar uma música
    - r!stop
        - Parar a música que está tocando e limpar a fila
    - r!volume 0.5
        - Define o volume da música
    - r!skip
        - Pula para a próxima música da fila
    - r!loop
        - Coloca a música em loop

- Comandos Gerais
    - r!help
        - Exibe os comandos
    - r!serverinfo
        - Obter informações sobre o servidor
    - r!invite
        - Exibe a mensagem de convite do bot
    - r!serverinvite (Descrição)
        - Exibe uma mensagem de convite para o servidor
    - r!rules
        - Exibe uma mensagem de regras
    - r!botinfo
        - Exibe informações sobre o bot

- Comandos para criar memes
    - r!bobesponja (Texto)
    - r!bolsonaro (Imagem)
    - r!bolsonaro2 (Imagem)
    - r!changemymind (Texto)
    - r!monstro (Texto)
    - r!piseinamerda (Texto)

- Comandos Backup
    - r!backup
        - Cria um backup de todos os canais, cargos, mensagens, etc. (Necessita de permissão de administrador)
    - r!load (Backup ID)
        - Carrega um backup existente (Necessita de permissão de administrador)

## :page_facing_up: Licença
Este projeto está sob a [MIT License](LICENSE).