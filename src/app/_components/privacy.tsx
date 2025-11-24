import { cn } from "@/utils/styles"
import styles from "./document.module.css"

interface PrivacyProps {
  className?: string
}

export function Privacy(props: PrivacyProps) {
  const { className } = props

  return (
    <div className={cn("", className)}>
      <h1 className="text-6xl font-display leading-tight font-semibold mb-12 max-w-[660px]">
        Política de Privacidade do Fisiquei
      </h1>

      <div className={cn("text-justify", styles.document)}>
        <ol className="[&>li]:mt-6!">
          <li>
            <strong>Introdução</strong>
            <ol>
              <li>
                A FISIQUEI CURSOS LTDA, inscrita no CNPJ sob o número
                45.474.789/0001-50, descreve, por meio deste documento de
                Política de Privacidade (“Política”), de uma forma clara e
                objetiva, como coleta, utiliza, armazena, compartilha e protege
                os dados pessoais dos usuários, em conformidade com a Lei Geral
                de Proteção de Dados (LGPD).
              </li>
              <li>
                Os presentes Termos de Uso (“Termos”) regulam o acesso e
                utilização da plataforma Fisiquei (“Plataforma”),
                disponibilizada no endereço https://app.fisiquei.com.br. Ao
                acessar ou utilizar a Plataforma, o usuário declara ter lido,
                compreendido e concordado integralmente com estes Termos. Caso
                não concorde com quaisquer das condições aqui previstas, o
                usuário deverá interromper imediatamente o uso da Plataforma.
              </li>
            </ol>
          </li>
          <li>
            <strong>Coletagem de dados</strong>
            <ol>
              <li>
                Dados fornecidos diretamente pelo usuário
                <ul className="list-disc list-inside pl-3 [&>li]:my-0.5! text-left">
                  <li>Nome e e-mail (obrigatórios para o cadastro).</li>
                  <li>
                    Foto, CPF, telefone, gênero e data de nascimento
                    (opcionais).
                  </li>
                  <li>
                    Conteúdos enviados pelo usuário (comentários, dúvidas, etc).
                  </li>
                </ul>
              </li>
              <li>
                Dados técnicos coletados automaticamente
                <ul className="list-disc list-inside pl-3 [&>li]:my-0.5! text-left">
                  <li>Endereço IP, device ID, user agent.</li>
                  <li>Registros de acesso e logs de segurança.</li>
                  <li>informações de interação e uso da Plataforma.</li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            <strong>Uso dos Dados</strong>
            <ol>
              <li>
                Os dados coletados são utilizados para:
                <ul className="list-disc list-inside pl-3 [&>li]:my-0.5! text-left">
                  <li>
                    Viabilizar o funcionamento da Plataforma e a prestação dos
                    serviços.
                  </li>
                  <li>Realizar análises internas e melhorias contínuas.</li>
                  <li>
                    Enviar e-mails transacionais e promocionais (respeitando as
                    preferências do usuário).
                  </li>
                  <li>Cumprir obrigações legais e prevenir fraudes.</li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            <strong>Compartilhamento</strong>
            <ol>
              <li>
                A Fisiquei não compartilha dados pessoais com terceiros, com
                execção de serviços de tecnologia que são fundamentais para o
                funcionamento da plataforma, incluindo:
                <ul className="list-disc list-inside pl-3 [&>li]:my-0.5! text-left">
                  <li>AWS S3 (armazenamento).</li>
                  <li>AWS SES (envio de e-mails).</li>
                  <li>Pagar.me / Guru Digital Manager (pagamentos).</li>
                  <li>Mautic (automação de marketing).</li>
                  <li>Google Analytics (análises internas).</li>
                </ul>
              </li>
              <li>
                Essas empresas terceiras são amplamente conhecidas e referências
                no mercado de tecnologia. Algumas delas podem armazenar dados em
                servidores situados fora do Brasil. A Fisiquei assegura que toda
                a transferência de dados ocorre em conformidade com a LGPD e que
                esses terceiros estão em confirmidade com os padrões
                internacionais de proteção de dados.
              </li>
            </ol>
          </li>
          <li>
            <strong>Segurança</strong>
            <ol>
              <li>
                A Fisiquei adota boas práticas de segurança da informação,
                incluindo:
                <ul className="list-disc list-inside pl-3 [&>li]:my-0.5! text-left">
                  <li>
                    Criptografia para armazenamento e transmissão de dados.
                  </li>
                  <li>Controles de acesso.</li>
                  <li>Monitoramento contínuo de segurança.</li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            <strong>Rejeições e Reclamações de E-mail</strong>
            <ol>
              <li>
                Durante o envio de e-mails da plataforma, podem ocorrer eventos
                de bounce (falha na entrega) e complaint (quando o destinatário
                marca a mensagem como spam). Esses eventos são processados
                automaticamente pelos serviços de e-mail utilizados pela
                Fisiquei, permitindo identificar endereços inválidos ou que não
                desejam receber nossas mensagens. As informações recebidas são
                usadas apenas para manter a qualidade dos envios e evitar novas
                tentativas para esses endereços
              </li>
              <li>
                O usuário pode, a qualquer momento, optar por não receber
                e-mails de marketing, utilizando o link de descadastramento
                presente nas próprias mensagens. Após o opt-out, o endereço é
                removido da lista de comunicação promocional, mantendo apenas
                mensagens essenciais ao funcionamento da conta
              </li>
            </ol>
          </li>
          <li>
            <strong>Cookies e Tecnologias de Rastreamento</strong>
            <ol>
              <li>
                Utilizamos cookies e tecnologias similares para funcionamento da
                sessão, preferências do usuário e fins de analytics. O usuário
                pode gerenciar cookies diretamente em seu navegador
              </li>
            </ol>
          </li>
          <li>
            <strong>Alterações desta Política</strong>
            <ol>
              <li>
                A Fisiquei poderá modificar esta Política para refletir mudanças
                legais, técnicas ou operacionais. Alterações relevantes serão
                comunicadas por aviso na Plataforma.
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="bg-neutral mt-14 rounded-lg px-3 py-2 text-[#cdcdcd] w-fit">
        <p>
          <strong className="font-bold">Última atualização:</strong> 22 de
          novembro de 2025
        </p>
      </div>
    </div>
  )
}
