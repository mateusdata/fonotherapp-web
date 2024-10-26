# Use a imagem base do Node.js 20
FROM node:20

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todos os arquivos do projeto para o contêiner
COPY . .

# Compila o projeto React para produção
RUN npm run build

# Expõe a porta 3000 para o contêiner
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
