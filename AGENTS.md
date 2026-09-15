# Crônicas de Triunia — instruções para todos os agentes

Estas regras se aplicam a qualquer agente, assistente ou modelo trabalhando neste repositório. Leia este arquivo antes de alterar código. Instruções explícitas posteriores do proprietário prevalecem.

## Issues, branches e PRs

- Toda tarefa futura deve ter uma Issue no GitHub antes da implementação: Correção, Melhoria ou Nova função. Pesquise Issues existentes para evitar duplicação.
- Registre problema, objetivo, escopo, critérios de aceite, dependências e validação. Não transforme funcionalidades já publicadas em pendências sem evidência de falha.
- Use uma branch por tarefa ou conjunto coeso, com o número real da Issue: `fix/<numero>-descricao`, `improvement/<numero>-descricao` ou `feat/<numero>-descricao`.
- Trabalhe por Pull Requests. Inclua na descrição `Closes #NUMERO` quando resolver a Issue, ou `Refs #NUMERO` quando a entrega for parcial. Substitua pelo número real; não invente links, Issues ou PRs.
- Descreva o motivo, mudança de comportamento, verificações, limitações, migrações e plano de publicação. Use o modelo em `.github/pull_request_template.md`.
- Não faça push direto de implementação para a branch principal. Não publique uma branch de trabalho para contornar o PR.
- Após revisão e merge autorizado, publique exatamente o commit integrado pelo provedor Sites existente. Registre no PR o commit, a versão e o resultado real do deploy. Não encerre o acompanhamento da publicação em estado pendente.
- Preserve audiência, permissões e dados do Site. Guarde credenciais somente nos mecanismos de segredo apropriados.
- Se faltar conexão, permissão ou repositório GitHub, prepare documentação e rascunhos numa branch e informe o bloqueio. Não afirme que rascunhos locais são Issues abertas.

## Interface e movimento

- Aplicar a skill `design-motion-principles`, fonte oficial: https://github.com/kylezantos/design-motion-principles/tree/main/skills/design-motion-principles . O endereço abreviado `kylezantos/design-principles` foi esclarecido para esta fonte.
- Ler `SKILL.md` e o workflow pertinente antes de implementar; carregar as referências exigidas. Não afirmar que a skill foi instalada quando apenas consultada.
- Contexto de Triunia: editor e gestão priorizam resposta imediata e conforto; wiki e cartas admitem movimento expressivo moderado. Não reintroduzir animação contínua nas ilustrações, removida a pedido do usuário.
- Cobrir cada fluxo assíncrono com carregamento, conteúdo, vazio, erro e recuperação. Skeletons devem preservar a geometria do conteúdo e aparecer enquanto há espera real, sem atrasos artificiais.
- Usar lazy loading em imagens fora da área inicial e módulos pesados não necessários à primeira renderização; não atrasar a arte principal já visível. Reservar dimensões e fornecer fallback em caso de erro.
- Tratar entrada e saída de diálogos, fichas, menus, avisos e painéis; garantir a conclusão da saída antes de desmontar quando necessário. Preservar foco e interação por teclado.
- Operações de salvar, enviar, carregar ou gerar devem mostrar estado e evitar submissão duplicada. Exibir progresso determinado somente quando mensurável; caso contrário indicar atividade indeterminada e conclusão/erro reais.
- Respeitar `prefers-reduced-motion`, não bloquear digitação nem autosave com animações. Evitar oscilações decorativas em controles usados repetidamente.
- Validar desktop, mobile, teclado, rede lenta, falha de imagem/requisição e movimento reduzido conforme o escopo da Issue. Não declarar cobertura universal sem inventário e evidência.

## Estado da adoção

Em 13/09/2026, o projeto está hospedado e versionado no serviço Sites. O GitHub confirmado pelo proprietário é `jmataide51/Triunia` (https://github.com/jmataide51/Triunia), atualmente público. Issues #1–#8 abertas. A branch GitHub `improvement/1-project-workflow` prepara as instruções e templates por PR. A aplicação completa ainda não foi transferida; definir privacidade antes de copiar imagens ou conteúdo do RPG.

As Issues reais estão vinculadas em `docs/github-backlog.md`. O trabalho de interface segue as respectivas Issues. Os templates orientam o fluxo, mas não substituem proteção de branch e checks configurados no GitHub. A integração de deploys ainda precisa ser implementada e validada na Issue #1; não presumir que merge publica automaticamente.
