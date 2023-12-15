// Importa o estilo de fonte Inter do pacote 'next/font/google'
import { Inter } from 'next/font/google';

// Importa o arquivo de estilos globais './globals.css'
import './globals.css';

// Inicializa a fonte Inter com um subconjunto específico ('latin')
const inter = Inter({ subsets: ['latin'] });

// Metadados da aplicação
export const metadata = {
  title: 'Minecraft API',
  description: 'Minecraft API',
};

// Componente funcional para o layout raiz da aplicação
export default function RootLayout({ children }) {
  return (
    // Estrutura HTML básica com a língua definida como 'pt-BR'
    <html lang="pt-BR">
      <head>
        {/* Adiciona um ícone à aba do navegador */}
        <link rel="icon" type='image/png' href="/0a17ad0fa0870b05f172deeb05efef8e.png" />
      </head>
      {/* Corpo da página, aplica a classe da fonte Inter ao corpo do HTML */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}