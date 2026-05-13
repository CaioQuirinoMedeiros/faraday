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
                45.474.789/0001-50, atuando como <strong>Controladora</strong>{" "}
                de dados, descreve por meio deste documento de Política de
                Privacidade (“Política”), de forma clara e objetiva, como
                coleta, utiliza, armazena, compartilha e protege os dados
                pessoais dos usuários, em estrita conformidade com a Lei Geral
                de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </li>
              <li>
                Esta Política regula o tratamento de dados na plataforma
                Fisiquei (“Plataforma”), disponibilizada no endereço
                https://app.fisiquei.com.br. Ao acessar, se cadastrar ou
                utilizar a Plataforma, o usuário declara ter lido, compreendido
                e{" "}
                <strong>
                  concordado integralmente com esta Política de Privacidade
                </strong>
                . Caso não concorde com a forma como tratamos seus dados, o
                usuário deverá interromper imediatamente o uso da Plataforma.
              </li>
              <li>
                Para quaisquer dúvidas ou solicitações referentes aos seus dados
                pessoais, o usuário pode entrar em contato com o nosso
                Encarregado de Proteção de Dados (DPO) através do suporte
                oficial da plataforma.
              </li>
            </ol>
          </li>
          <li>
            <strong>Coleta de dados</strong>
            <ol>
              <li>
                Dados fornecidos diretamente pelo usuário:
                <ul className="list-disc list-inside pl-3 [&>li]:my-0.5! text-left">
                  <li>Nome e e-mail (obrigatórios para o cadastro).</li>
                  <li>
                    CPF e telefone(opcional no perfil, mas{" "}
                    <strong>
                      obrigatórios no momento da assinatura/compra
                    </strong>{" "}
                    para fins de faturamento e prevenção a fraudes).
                  </li>
                  <li>
                    Endereço, gênero e data de nascimento (fornecidos de forma
                    opcional no perfil).
                  </li>
                  <li>
                    Conteúdos gerados e enviados pelo usuário na Plataforma
                    (dúvidas, comentários, imagens de perfil, etc.).
                  </li>
                </ul>
              </li>
              <li>
                Dados técnicos coletados automaticamente:
                <ul className="list-disc list-inside pl-3 [&>li]:my-0.5! text-left">
                  <li>
                    Endereço IP e geolocalização aproximada (baseada no IP).
                  </li>
                  <li>
                    Identificação de dispositivos (
                    <strong>device fingerprinting</strong>) e informações do
                    navegador (<strong>user agent</strong>).
                  </li>
                  <li>
                    Registros de acesso (<strong>logs</strong> de segurança) e
                    informações sobre a interação e uso das funcionalidades da
                    Plataforma.
                  </li>
                </ul>
              </li>
              <li>
                Dados de Pagamento e Faturamento:
                <ul className="list-disc list-inside pl-3 [&>li]:my-0.5! text-left">
                  <li>
                    A Fisiquei{" "}
                    <strong>não armazena dados sensíveis de pagamento</strong>,
                    como o número completo do cartão de crédito ou código de
                    segurança (CVV). O processamento é feito diretamente pelo
                    gateway parceiro (Pagar.me / Guru), sendo que recebemos
                    apenas os dados de faturamento (nome, CPF, valor) e o status
                    da transação (aprovada, recusada, etc.).
                  </li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            <strong>Uso dos Dados</strong>
            <ol>
              <li>
                Os dados pessoais e técnicos coletados são utilizados para as
                seguintes finalidades estritas:
                <ul className="list-disc list-inside pl-3 [&>li]:my-0.5! text-left">
                  <li>
                    <strong>Prestação do Serviço:</strong> Viabilizar a criação
                    da conta, o acesso aos materiais e o suporte
                    técnico/pedagógico.
                  </li>
                  <li>
                    <strong>Segurança e Prevenção à Fraude:</strong> Monitorar
                    padrões de acesso, registrar IPs e utilizar identificação de
                    dispositivos para prevenir o compartilhamento não autorizado
                    de senhas, pirataria e garantir a integridade das contas.
                  </li>
                  <li>
                    <strong>Comunicação:</strong> Enviar e-mails transacionais
                    (confirmações de pagamento, redefinição de senha, código
                    para login) e e-mails promocionais ou informativos
                    (respeitando sempre as preferências e o direito de
                    cancelamento de inscrição do usuário).
                  </li>
                  <li>
                    <strong>
                      Personalização e Melhoria Contínua (Produto & UX):
                    </strong>{" "}
                    Analisar métricas de uso, desempenho acadêmico na plataforma
                    e comportamento de navegação para aprimorar a interface,
                    corrigir bugs e personalizar a experiência de aprendizado.
                  </li>
                  <li>
                    <strong>Obrigações Legais e Defesa:</strong> Cumprir
                    obrigações fiscais (emissão de notas fiscais, retenção de
                    dados obrigatórios) e resguardar os direitos do Fisiquei em
                    caso de disputas legais, contestações financeiras ou
                    auditorias.
                  </li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            <strong>Compartilhamento</strong>
            <ol>
              <li>
                A Fisiquei valoriza a privacidade do usuário e não vende ou
                comercializa dados pessoais. O compartilhamento ocorre
                estritamente com parceiros de tecnologia fundamentais para a
                operação da plataforma, incluindo:
                <ul className="list-disc list-inside pl-3 [&>li]:my-0.5! text-left">
                  <li>
                    <strong>Infraestrutura e Banco de Dados:</strong> Vercel
                    (hospedagem) e provedores de banco de dados em nuvem.
                  </li>
                  <li>
                    <strong>Armazenamento e Comunicação:</strong> AWS S3
                    (armazenamento de arquivos) e AWS SES (envio de e-mails
                    transacionais).
                  </li>
                  <li>
                    <strong>Pagamentos e Faturamento:</strong> Pagar.me e Guru
                    Digital Manager (processamento financeiro e gestão de
                    assinaturas).
                  </li>
                  <li>
                    <strong>Marketing e Métricas:</strong> Mautic (automação de
                    marketing) e Google Analytics (análise de tráfego).
                  </li>
                </ul>
              </li>
              <li>
                A Fisiquei poderá compartilhar dados pessoais com autoridades
                judiciais, policiais ou governamentais caso seja exigido por
                lei, ordem judicial ou para a defesa de direitos da empresa em
                processos administrativos e judiciais.
              </li>
              <li>
                Os serviços parceiros listados acima são referências globais em
                tecnologia e podem armazenar dados em servidores localizados
                fora do Brasil (como nos Estados Unidos). A Fisiquei assegura
                que essas transferências ocorrem em conformidade com a LGPD,
                utilizando fornecedores que adotam os mais altos padrões
                internacionais de proteção e segurança da informação.
              </li>
            </ol>
          </li>
          <li>
            <strong>Segurança da Informação</strong>
            <ol>
              <li>
                A Fisiquei implementa medidas técnicas e organizacionais
                rigorosas para proteger os dados pessoais contra acessos não
                autorizados, perda, destruição ou alteração, incluindo:
                <ul className="list-disc list-inside pl-3 [&>li]:my-0.5! text-left">
                  <li>
                    <strong>Criptografia:</strong> Transmissão de dados
                    protegida por protocolos de segurança (SSL/HTTPS) e
                    armazenamento de senhas de forma criptografada (*hash*),
                    garantindo que nem mesmo a equipe técnica da Fisiquei tenha
                    acesso às senhas originais dos usuários.
                  </li>
                  <li>
                    <strong>Controle de Acesso:</strong> Acesso restrito ao
                    banco de dados e aos ambientes de produção, limitado apenas
                    a colaboradores autorizados e estritamente para o desempenho
                    de suas funções.
                  </li>
                  <li>
                    <strong>Monitoramento:</strong> Uso de ferramentas de
                    monitoramento contínuo para identificar e bloquear
                    atividades suspeitas, tentativas de invasão e uso indevido
                    de contas.
                  </li>
                </ul>
                <li>
                  <strong>Responsabilidade do Usuário:</strong> A segurança
                  também depende do usuário. O usuário é o único responsável por
                  manter a confidencialidade de suas credenciais de login
                  (e-mail e senha), utilizar senhas fortes e não compartilhar
                  seu acesso com terceiros. A Fisiquei não se responsabiliza por
                  acessos indevidos decorrentes de negligência do próprio
                  usuário.
                </li>
                <li>
                  <strong>Incidentes de Segurança:</strong> Em caso de
                  ocorrência de qualquer incidente de segurança que possa
                  acarretar risco ou dano relevante aos usuários, a Fisiquei se
                  compromete a comunicar os afetados e a Autoridade Nacional de
                  Proteção de Dados (ANPD) em prazos adequados, conforme exigido
                  pela LGPD.
                </li>
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
          <strong className="font-bold">Última atualização:</strong> 12 de maio
          de 2026
        </p>
      </div>
    </div>
  )
}
