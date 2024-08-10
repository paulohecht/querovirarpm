### O Kanban

Junto com o Scrum, era bastante comum a adoção de técnicas e estratégias de suporte. O Kanban foi uma dessas que casou perfeitamente com a metodologia.

O Kanban nasceu no Sistema Toyota de Produção e ele é um quadro onde as demandas em cartões (geralmente post-its) se movem por colunas que representam todas as etapas da produção como "A fazer", "Em progresso" e "Concluído".

Seu uso junto com o Scrum gerou até o apelido **Scrumban**, onde as tarefas ficavam dispostas em um quadro kanban apelidado de **Scrum board**, um quadro no qual post-its com as demandas se moviam à medida que incrementos de software eram entregues.

![Scrumban](scrumban.svg "Um Scrum board clássico, ou scrum + kanban = scrumban")

Apesar de o scrum ter sido o grande responsável por popularizar a ideia de um time de desenvolvimento trabalhando em torno de um quadro cheio de post-its que se movem a cada etapa da produção, o Kanban enquanto conceito é muito mais amplo e ganhou suas próprias pernas graças ao livro [Kanban: Mudança Evolucionária de Sucesso para seu Negócio de Tecnologia](https://www.amazon.com.br/Kanban-Mudan%C3%A7a-Evolucion%C3%A1ria-Sucesso-Tecnologia-ebook/dp/B09TZB7QHT) de David Anderson em 2004 e passou a ser amplamente adotado como ferramenta de gestão por diversos times de desenvolvimento dada sua flexibilidade e capacidade de se incorporar a qualquer processo de desenvolvimento.

![Kanban](kanban.svg "Um kanban tradicional em um time de desenvolvimento")

Vamos destacar alguns dos pontos que foram responsáveis pelo sucesso do Kanban como ferramenta de gestão de tarefas:
1. **Gestão Visual**: Por sua natureza, um quadro de kanban consegue transmitir diversas dimensões do fluxo de trabalho a um rápido olhar (muitas vezes até mesmo de forma passiva quando o quadro é físico e está presente no mesmo local que o time realiza o trabalho). Questões como "O que está sendo feito agora?", "Quem está fazendo o que?", "Quais os principais gargalos?", "O que acabamos de entregar?" são facilmente indentificadas visualmente.
2. **Priorização**: É fácil estabelecer quais as tarefas mais prioridades, pois essas são movidas para o topo do quadro.
3. **Produção Puxada**: A produção puxada é um conceito onde o mais importante é finalizar as tarefas que estão mais próximas de ser entregue para evitar desperdícios. O kanban ajuda de maneira prática encorajando o time a resolver as tarefas mais à direita do quadro. A ideia parte do princípio que quanto mais à direita no quadro, mais investimento houve naquela demanda, portanto, fazê-la chegar ao cliente o mais rápido possível é a melhor forma de otimizar os recursos.
4. **Estados de Fila vs Estados de Trabalho**: O kanban ajuda a organizar de forma clara quais demandas se encontram em estados aguardando para que alguém comece a trabalhar nela. Dessa forma fica bastante trivial inferir a eficiência do processo mensurando o tempo gasto em estados de trabalho vs estados de fila e melhor a eficiência alocando mais recursos para minimizar o tempo de fila.
5. **Limitação de Trabalho**: Para os estados de trabalho (Work-in-progress - WIP), o conceito de WIP Limit ajuda o time a focar em entregar aquilo no que já comprometeu seu esforço ao invés de trabalhar em várias tarefas ao mesmo tempo pulverizando o esforço e demorando mais para entregar as demandas.
6. **Fluxo Contínuo**: O objetivo principal do kanban é garantir o fluxo contínuo do trabalho, se algum problem é detectado, resolvemos para que ele se mova sempre para a direita evitando que uma demanda volte para etapas anteriores, garantindo dessa forma uma eficiência maior de entregas.


