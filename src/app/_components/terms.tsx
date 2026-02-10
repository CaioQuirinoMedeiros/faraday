import { cn } from "@/utils/styles"
import styles from "./document.module.css"

interface TermsProps {
  className?: string
}

export function Terms(props: TermsProps) {
  const { className } = props

  return (
    <div className={cn("", className)}>
      <h1 className="text-6xl font-display leading-tight font-semibold mb-12 max-w-[660px]">
        Termos e condições de uso do Fisiquei
      </h1>

      <div className={cn("text-justify", styles.document)}>
        <ol className="[&>li]:mt-6!">
          <li id="introducao">
            <strong>
              <a href="#introducao">Introdução</a>
            </strong>
            <ol>
              <li>
                Este contrato (“Contrato”) é celebrado entre o usuário
                (“Usuário”) e a empresa FISIQUEI CURSOS LTDA, inscrita no CNPJ
                sob o número <b>45.474.789/0001-50</b>, doravante denominada{" "}
                <b>Fisiquei</b>.
              </li>
              <li>
                Os presentes Termos de Uso (“Termos”) regulam o acesso e
                utilização da plataforma Fisiquei (“Plataforma”),
                disponibilizada no endereço https://app.fisiquei.com.br. Ao
                acessar ou utilizar a Plataforma, o usuário declara ter lido,
                compreendido e concordado integralmente com estes Termos. Caso
                não concorde com quaisquer das condições aqui previstas, deverá
                interromper imediatamente o uso da Plataforma.
              </li>
            </ol>
          </li>
          <li id="descricao-do-servico">
            <strong>
              <a href="#descricao-do-servico">Descrição do Serviço</a>
            </strong>
            <ol>
              <li>
                A Fisiquei oferece a plataforma online que disponibiliza
                videoaulas, materiais em PDF, gerador de cronograma, questões,
                listas de exercícios, fórum de dúvidas, simuladores digitais,
                entre outros recursos, com o objetivo de proporcionar um
                aprendizado eficiente em Física para o ENEM e vestibulares.
              </li>
              <li>
                A Plataforma pode ser utilizada por estudantes de todas as
                idades, incluindo menores. Nesses casos, o responsável legal
                deverá garantir que o menor utilize o serviço de forma adequada.
              </li>
              <li>
                Para criar uma conta, o Usuário deve informar nome e e-mail.
                Dados adicionais, como CPF, telefone, gênero e data de
                nascimento, podem ser informados posteriormente para completar o
                perfil. O Usuário é responsável pela veracidade das informações
                fornecidas e pela segurança de sua conta e senha.
              </li>
            </ol>
          </li>
          <li id="planos-e-pagamentos">
            <strong>
              <a href="#planos-e-pagamentos">Planos e Pagamentos</a>
            </strong>
            <ol>
              <li>
                A Fisiquei oferece acesso gratuito à Plataforma, porém com
                acesso limitado a alguns recursos. Para obter acesso completo, o
                Usuário deverá assinar um dos planos disponíveis.
              </li>
              <li>
                Alguns dos recursos gratuitos incluem: aulas dos módulos
                introdutórios, parte das questões do Banco de Questões, leitura
                do Fórum de Dúvidas e acesso aos simuladores digitais. A
                Fisiquei reserva-se o direito de alterar os recursos gratuitos a
                qualquer momento e sem necessidade de aviso prévio.
              </li>
              <li>
                A Fisiquei oferece diferentes planos, que podem variar quanto às
                regras de acesso, tempo de utilização, recursos liberados e
                formas de pagamento. Alguns planos podem ser exclusivos para
                grupos que atendam critérios específicos, como planos de
                renovação para alunos e ex-alunos.
              </li>
              <li>
                A Fisiquei pode ajustar preços e condições dos planos a qualquer
                momento, garantindo que a divulgação dos mesmos estejam sempre
                atualizadas. Qualquer alteração não deve afetar compras já
                confirmadas.
              </li>
              <li>
                Os pagamentos são processados pela Pagar.me, por meio da
                integração com a Guru Digital Manager, oferecendo cartão de
                crédito, boleto bancário e Pix como meios de pagamento. A
                Fisiquei não armazena dados de cartão nem quaisquer informações
                sensíveis de pagamento.
              </li>
            </ol>
          </li>
          <li id="politica-de-cancelamento-e-reembolso">
            <strong>
              <a href="#politica-de-cancelamento-e-reembolso">
                Política de Cancelamento e Reembolso
              </a>
            </strong>
            <ol>
              <li>
                O Usuário tem direito ao reembolso integral até 7 (sete) dias
                após a efetivação da compra de qualquer plano, conforme
                legislação aplicável. Após esse período, o Usuário não tem
                direito a qualquer reembolso, total ou parcial.
              </li>
              <li>
                Para solicitar o reembolso, o Usuário deverá entrar em contato
                com o número de suporte da Fisiquei, disponível em{" "}
                <a href="https://app.fisiquei.com.br/suporte" target="_blank">
                  https://app.fisiquei.com.br/suporte
                </a>
                . Solicitações feitas por outros canais não serão aceitas.
              </li>
              <li>
                A Fisiquei reserva-se o direito de negar solicitações de
                reembolso quando houver indícios razoáveis de uso indevido,
                fraude, má-fé ou comportamento incompatível com a finalidade da
                política de garantia. Isso inclui, mas não se limita a: acesso
                massivo e atípico ao conteúdo em curto período, tentativa de
                download não autorizado de materiais, compartilhamento de acesso
                com terceiros, uso de automações, ou qualquer outra conduta que
                viole estes Termos. Nessas situações, a Fisiquei poderá utilizar
                registros técnicos, logs de acesso e demais informações
                necessárias para comprovar o uso abusivo e resguardar seus
                direitos.
              </li>
            </ol>
          </li>
          <li id="resultados-e-responsabilidades">
            <strong>
              <a href="#resultados-e-responsabilidades">
                Resultados e Responsabilidades
              </a>
            </strong>
            <ol>
              <li>
                Ao abordar resultados em vestibulares, seja em divulgações,
                produtos, sites, vídeos ou outros conteúdos, a Fisiquei faz
                esforços para representar fielmente os cursos e resultados reais
                de alunos. Entretanto, não pode garantir resultados específicos,
                uma vez que o desempenho depende de fatores individuais.
              </li>
              <li>
                O Usuário concorda que o uso ou incapacidade de uso dos produtos
                Fisiquei é por sua conta e risco. A Fisiquei não oferece
                garantias, verbais ou escritas, sobre ganhos, desempenho em
                provas ou aprovação em vestibulares. O Usuário é o único
                responsável por suas ações e resultados, que dependem de fatores
                pessoais, incluindo habilidade, conhecimento, dedicação e
                ambiente de estudos, entre outros.
              </li>
              <li>
                A Plataforma é fornecida “no estado em que se encontra” e
                “conforme disponível”, podendo apresentar interrupções,
                indisponibilidades ou limitações decorrentes de fatores técnicos
                ou de serviços de terceiros. A Fisiquei não garante
                funcionamento ininterrupto, livre de erros ou totalmente seguro,
                embora adote boas práticas para manter a estabilidade e
                segurança do serviço
              </li>
              <li>
                A Fisiquei não se responsabiliza por quaisquer danos indiretos,
                incidentais, especiais, consequenciais ou punitivos, incluindo,
                mas não se limitando a: lucros cessantes, perda de
                oportunidades, prejuízos educacionais, danos morais,
                indisponibilidade temporária da plataforma, perda de dados ou
                qualquer outro tipo de dano não diretamente decorrente de falha
                comprovada da empresa.
              </li>
              <li>
                O Usuário reconhece que a responsabilidade total da Fisiquei,
                caso aplicável, estará sempre limitada ao valor efetivamente
                pago pelo Usuário pelos serviços nos últimos 12 (doze) meses
                anteriores ao evento que gerou a alegada responsabilidade. Em
                nenhuma hipótese a Fisiquei será responsável por valores
                superiores a esse limite. Além disso, a Fisiquei não se
                responsabiliza por falhas, indisponibilidades ou danos causados
                por serviços terceirizados essenciais ao funcionamento da
                Plataforma, tais como Pagar.me, AWS, Guru Digital Manager, Panda
                Video, serviços de hospedagem, provedores de e-mail, entre
                outros
              </li>
            </ol>
          </li>
          <li id="conteudos-e-propriedade-intelectual">
            <strong>
              <a href="#conteudos-e-propriedade-intelectual">
                Conteúdos e Propriedade Intelectual
              </a>
            </strong>
            <ol>
              <li>
                Todo o conteúdo disponibilizado pela Fisiquei (vídeos, textos,
                aulas, imagens, materiais didáticos) é protegido por direitos
                autorais e de propriedade intelectual, sendo proibida qualquer
                reprodução, distribuição, compartilhamento ou utilização
                comercial sem autorização expressa.
              </li>
              <li>
                Ao publicar conteúdo na Plataforma (ex.: perguntas no fórum,
                comentários, anexos), o usuário concede à Fisiquei uma licença
                não exclusiva, global, irrevogável, gratuita, por prazo
                indeterminado e sublicenciável para uso, reprodução,
                distribuição, adaptação e exibição, sempre vinculada ao
                funcionamento e desenvolvimento da Plataforma.
              </li>
            </ol>
          </li>
          <li id="regras-de-conduta">
            <strong>
              <a href="#regras-de-conduta">Regras de Conduta</a>
            </strong>
            <ol>
              <li>
                É expressamente proibido ao Usuário:
                <ul className="list-disc list-inside pl-3 text-left">
                  <li>Comprar, vender, transferir ou negociar contas;</li>
                  <li>
                    Compartilhar, distribuir ou redistribuir qualquer material
                    da Plataforma;
                  </li>
                  <li>
                    Utilizar linguagem ofensiva ou inadequada no fórum e
                    comentários;
                  </li>
                  <li>
                    Explorar falhas, bugs ou vulnerabilidades para obter
                    vantagens indevidas;
                  </li>
                </ul>
              </li>
              <li>
                O descumprimento das regras acima poderá resultar em
                advertência, suspensão, exclusão de conteúdo, limitação de
                funcionalidades ou banimento definitivo, conforme avaliação da
                equipe da Fisiquei.
              </li>
            </ol>
          </li>
          <li id="seguro-sisu">
            <strong>
              <a href="#seguro-sisu">Seguro SiSU</a>
            </strong>
            <ol>
              <li>
                O Seguro SiSU concede ao Usuário o direito de solicitar
                reembolso total do valor pago, caso seja aprovado no SiSU do ano
                seguinte, considerando-se até a 3ª chamada do processo seletivo.
                A aprovação deverá ser comprovada obrigatoriamente no momento da
                solicitação, mediante envio de comprovação oficial da aprovação.
              </li>
              <li>
                O Seguro SiSU é válido apenas para planos e períodos
                promocionais específicos, quando expressamente divulgados pela
                Fisiquei. Fora desses períodos ou planos elegíveis, o benefício
                não se aplica.
              </li>
              <li>
                A solicitação do reembolso do Seguro SiSU deve ser feita dentro
                do prazo estipulado pela plataforma no momento da divulgação da
                oferta, e está condicionada à verificação da autenticidade dos
                documentos apresentados.
              </li>
            </ol>
          </li>
          <li id="programa-de-indicacao">
            <strong>
              <a href="#programa-de-indicacao">Programa de Indicação</a>
            </strong>
            <ol>
              <li>
                A plataforma Fisiquei conta um Programa de Indicação onde cada
                usuário pode obter seu link de indicação para compartilhar. Uma
                compra aprovada a partir o link de indicação, irá gerar pontos
                de indicação (“pontos”) para o usuário indicador. Esses pontos
                podem ser usados para trocar por prêmios disponíveis na
                plataforma.
              </li>
              <li>
                A pontuação recebida pelo usuário indicador é de aproximadamente
                5% do valor final da compra realizada pelo usuário indicado.
                Isso significa que a pontuação varia de acordo com o valor do
                plano escolhido e possíveis descontos aplicados. Algumas ofertas
                podem não ter porcentagem de pontuação, e a Fisiquei pode
                alterar a porcentagem de pontos de qualquer oferta a qualquer
                momento e sem aviso prévio.
              </li>
              <li>
                O recebimento dos pontos acontece de forma automática no
                reconhecimento da compra realizada por um link de indicação.
                Compras realizadas sem o uso correto do link de indicação não
                geram pontos. Há um prazo de 10 dias para a liberação do uso dos
                pontos, pois, neste período, caso a compra seja reembolsada ou
                cancelada por qualquer motivo, os pontos serão suspensos
              </li>
              <li>
                A Fisiquei reserva-se o direito de alterar, suspender ou
                cancelar o Programa de Indicação a qualquer momento, sem aviso
                prévio. Também reserva-se o direito de cancelar qualquer
                pontuação de um usuário ao identificar mal uso do Programa de
                Indicação por qualquer motivo.
              </li>
            </ol>
          </li>
          <li id="mentoria-fisiquei">
            <strong>
              <a href="#mentoria-fisiquei">Mentoria Fisiquei</a>
            </strong>
            <ol>
              <li>
                A Mentoria Fisiquei é um serviço de acompanhamento educacional
                individualizado conduzido pelo Professor Thales. O serviço é
                exclusivo para alunos com assinatura ativa na plataforma
                Fisiquei.
              </li>
              <li>
                A Mentoria compreende até 15 (quinze) sessões individuais
                anuais, realizadas via Google Meet, com duração de 30 (trinta)
                minutos cada. Os agendamentos devem ser realizados via WhatsApp
                diretamente com o professor.
              </li>
              <li>
                O aluno deverá comunicar qualquer cancelamento com antecedência
                mínima de 24 (vinte e quatro) horas. A ausência sem aviso prévio
                ou o aviso tardio resultará na contabilização da sessão como
                realizada.
              </li>
              <li>
                O suporte via WhatsApp destina-se a dúvidas pontuais, ajustes
                rápidos de cronograma e agendamentos. Este canal não caracteriza
                atendimento 24 horas, sendo as respostas enviadas conforme
                disponibilidade do professor. Dúvidas complexas ou aprofundadas
                deverão ser tratadas exclusivamente durante as sessões
                agendadas.
              </li>
              <li>
                A Mentoria possui caráter estritamente orientativo e pedagógico.
                É vedado ao professor a realização de tarefas escolares,
                trabalhos acadêmicos, provas ou qualquer atividade avaliativa em
                nome do aluno. O objetivo é o desenvolvimento da autonomia do
                estudante.
              </li>
              <li>
                A Mentoria Fisiquei fornece ferramentas e estratégias para
                otimização do estudo, porém, não garante aprovação em exames,
                vestibulares ou concursos, uma vez que o êxito depende
                exclusivamente do desempenho, dedicação e constância individual
                do aluno.
              </li>
              <li>
                Devido à natureza personalizável do serviço e à reserva de
                agenda, aplicam-se as seguintes regras de reembolso exclusivas
                para a Mentoria:
                <ul className="list-disc list-inside pl-3 text-left">
                  <li>
                    Até 7 dias após a primeira sessão: Reembolso integral
                    (100%).
                  </li>
                  <li>
                    Até a terceira sessão realizada: Reembolso de 50% do valor
                    investido.
                  </li>
                  <li>
                    Após a quarta sessão ou após 2 meses da compra: Não haverá
                    restituição de valores.
                  </li>
                </ul>
              </li>
            </ol>
          </li>
          <li id="modificacoes">
            <strong>
              <a href="#modificacoes">Modificações</a>
            </strong>
            <ol>
              <li>
                A Fisiquei poderá atualizar estes Termos a qualquer momento.
                Alterações relevantes serão comunicadas por aviso na Plataforma.
                A continuidade do uso após a divulgação das alterações configura
                concordância com a nova versão.
              </li>
            </ol>
          </li>
          <li id="legislacao-e-foro">
            <strong>
              <a href="#legislacao-e-foro">Legislação e Foro</a>
            </strong>
            <ol>
              <li>
                Estes Termos são regidos pelas leis brasileiras. Fica eleito o
                Foro da Comarca de Brasília (DF) para dirimir quaisquer
                controvérsias dele decorrentes, com renúncia expressa a qualquer
                outro, por mais privilegiado que seja.
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="bg-neutral mt-14 rounded-lg px-3 py-2 text-[#cdcdcd] w-fit">
        <p>
          <strong className="font-bold">Última atualização:</strong> 10 de
          fevereiro de 2026
        </p>
      </div>
    </div>
  )
}
