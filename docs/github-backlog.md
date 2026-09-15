# Adoção de Issues/PRs e Motion Principles

Status: Issues #1–#8 criadas em https://github.com/jmataide51/Triunia/issues . Cada seção abaixo corresponde à Issue de mesmo número. Pesquise duplicatas antes de abrir tarefas adicionais. PR de organização: branch `improvement/1-project-workflow`, vinculado à Issue #1. A implementação visual está pendente, assim como a transferência do código e a integração de deploy.

## 1. Melhoria — adotar fluxo Issue → branch → PR → deploy
Objetivo: rastrear toda mudança futura. Critérios: AGENTS.md e templates integrados por PR; repositório confirmado; permissões e checks de branch configurados conforme as capacidades da conta; cada PR referencia uma Issue real; commit publicado corresponde ao merge; resultado do deploy registrado. Dependência: conexão GitHub e identificação do repositório. Incluir a documentação de bootstrap nesta Issue.

## 2. Melhoria — inventariar estados e padronizar movimento
Objetivo: cobrir toda a interface sem aplicar efeitos indiscriminados. Critérios: matriz por superfície (início/feed, wiki/cartas/ficha, filtros, mapa/pins, campanhas/índice, editor/menções/testes, missões/capítulos, continuidade/ideias, lixeira/histórico, Bardo, formulários/uploads); classificar entrada, saída, espera, progresso, vazio e erro como implementado, ausente ou não aplicável; consultar a skill e suas referências; definir tokens e alternativas com movimento reduzido. Este inventário determina novas Issues de correção quando houver evidência.

## 3. Melhoria — skeletons em rotas e consultas
Evidência inicial: não foram encontrados componentes Skeleton nem rotas loading na busca inicial nas superfícies principais; isso ainda não é auditoria visual completa. Critérios: skeletons com geometria estável nas consultas reais de wiki, campanhas, feed, missões e histórico; erro distinguível de lista vazia; recuperação sem perda de edição; aria-busy e mensagens acessíveis; nada de esperas artificiais. Validar rede lenta, lista vazia e falha.

## 4. Melhoria — lazy loading de imagens e módulos pesados
Critérios: carregar mídias fora do viewport sob demanda com dimensões reservadas; carregar mapa e outras superfícies pesadas quando necessárias, com fallback; arte principal visível sem atraso desnecessário; tratar falha de mídia; preservar imagens privadas e primeira imagem pública. Validar rede lenta e troca de páginas.

## 5. Melhoria — transições de entrada e saída
Critérios: fichas, diálogos, índices, menus, autocomplete e avisos entram e saem suavemente; conteúdo não desaparece antes da transição de saída; foco retorna ao acionador; teclado continua imediato; respeitar movimento reduzido. Preservar efeito de puxar carta e manter ilustrações paradas.

## 6. Melhoria — feedback de envio e progresso
Evidência inicial: uploadImages envia via fetch sem callback de progresso. Critérios: progresso real de upload quando disponível; estado indeterminado nas demais operações; estado de sucesso/erro claro; bloqueio de envio duplicado; tentativa novamente preserva formulário; não mostrar porcentagens fictícias. Abranger capas, imagens, salvamento, restauração e ações do mestre.

## 7. Melhoria — conforto e feedback do editor
Critérios: não animar cada tecla nem redefinir seleção/cursor ao salvar; indicadores discretos de edição/salvamento/erro; menções e testes com carregamento, vazio e erro quando aplicáveis; menus recolhíveis sem travar a escrita; preservar texto após falha. Validar texto longo, digitação contínua e navegação por teclado.

## 8. Melhoria — validar cobertura mobile, acessibilidade e desempenho
Critérios: revisar a matriz completa após as entregas anteriores; registrar evidências de desktop/mobile, teclado e movimento reduzido; sem deslocamentos de layout causados por imagens ou skeletons; sem animação em loop consumindo recursos fora de vista; recuperar falhas de rede e mídia. Abrir Issues separadas para problemas encontrados; não marcar como concluído sem verificação.

## Referência oficial

https://github.com/kylezantos/design-motion-principles

SKILL.md, workflow Create e referência Accessibility consultados em 13/09/2026. A skill ainda não foi instalada no repositório. Antes da implementação, carregar também cookbook, creation-gotchas e referências de contexto exigidas pela skill. Prioridade de projeto: produtividade no mestre, refinamento visual na wiki.
