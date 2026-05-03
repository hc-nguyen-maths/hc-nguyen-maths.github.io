---
date: 2026-05-02
layout: post
title: "[FR] Le miracle de la table de multiplication"
description: "Pourquoi un enfant peut connaître sa table de 6 sans connaître sa table de 8 - et pourquoi il a moins tort qu'on ne le croit."
tags: [algèbre, didactique, enseignement, vulgarisation]
categories: [fr]
related_posts: false
toc: 
  beginning: true

---

## Trois pommes et trois rien

Quand on est petit, on apprend que les nombres ne se baladent jamais tout seuls. On ne dit pas "3", on dit "3 pommes", "3 mètres", "3 verres". La quantité "1" nue n'a pas vraiment de sens à six ans; ce qui en a, c'est une pomme, une ardoise, une bille. Cette discipline de l'unité est si tôt intégrée qu'on finit par l'oublier, mais elle structure profondément la manière dont l'enfant entre dans les nombres.

Vient l'addition. Deux pommes plus trois pommes, ça fait cinq pommes. On ajoute des objets de même nature, on obtient un objet de même nature - on apprend même que cela n'a aucun sens d'ajouter des objets de natures différentes. On se convainc alors assez vite que l'ordre n'a pas d'importance, l'addition est **commutative**.

Puis arrive la multiplication : on apprend alors que $2 \mathrm{m} + 2 \mathrm{m} + 2 \mathrm{m} = 6 \mathrm{m}$ s'écrit de façon plus simple $3 \cdot 2 \mathrm{m} = 6 \mathrm{m}$. Mais dans ce cas, quelle est **l'unité** du "3" dans cette expression? Et en plus, on sait bien que $3 \mathrm{m} \cdot 2 \mathrm{m} = 6 \mathrm{m}^2$, ce qui n'est pas la même chose que $3 \cdot 2 \mathrm{m}$. La quantité "3" qui apparaît est sans unité. Encore tout petit, je ne m'étais jamais posé la question, je l'ai accepté mais je viens de faire un bond conceptuel important : les nombres peuvent exister tout seuls, en dehors de toute chose à compter. C'est un premier niveau d'abstraction, et elle est complètement silencieuse. Certains passent cette marche sans broncher, voire même sans s'en rendre compte. D'autres butent - et nous, qui avons fini par naturaliser l'existence de quantités sans unités, nous n'arrivons plus très bien à comprendre pourquoi.

Vient rapidement le deuxième bond conceptuel : $3 \cdot 2 \mathrm{m} = 2 \cdot 3 \mathrm{m}$ ! Si on reprend la définition itérée, la première écriture suggère que $2$ est itéré $3$ fois, tandis que dans la seconde, c'est l'inverse. Le rôle des deux nombres est **asymétrique**, et pourtant les deux résultats coïncident. Comme beaucoup, j'ai accepté. Mais une dissonance cognitive s'est créée au creux de plus d'un esprit : deux rôles asymétriques agissant de concert pour obtenir le même résultat, c'est un peu comme changer l'ordre des lettres d'un mot en espérant que le résultat fasse toujours sens.

## Itération et action

Je pense qu'il vaut la peine de prendre au sérieux le malaise précédent, plutôt que de le balayer par habitude. L'écriture $3 \times 2 \mathrm{m}$ suggère une instruction : c'est $3$ donne l'action, le mouvement de répéter la quantité $2 \mathrm{m}$ qui subit. Les deux facteurs ne vivent pas dans le même monde.

Pour le dire plus proprement : l'ensemble des longueurs forment un ensemble $E$, sur lequel les entiers naturels agissent. À chaque entier $n$ et à chaque longueur $\ell$, on associe une nouvelle longueur $n \cdot \ell = \ell + \ldots + \ell$ ($n$ fois). Cette opération a les bonnes propriétés d'une action, à savoir 

$$1 \cdot \ell = \ell \qquad \text{et} \qquad (p+q) \cdot \ell = (p \cdot \ell) + (q \cdot \ell),$$

ce qui en fait précisément ce qu'on appelle, en algèbre, une action de monoïde de $(\mathbb{N}, +)$ sur $E$ : $\mathbb{N} \times E \rightarrow E$. Cette structure est à rapprocher de la multiplication d'un vecteur par un scalaire en algèbre linéaire : un objet d'un type (le scalaire, l'entier) agit sur un objet d'un autre type (le vecteur, la longueur). Et pourtant, dans cette image, on n'attend pas de l'expression $v \cdot \lambda$ qu'elle ait un réel sens immédiat. L'assimilation de cette action comme une multiplication, donc une opération **commutative**, donne d'ailleurs lieu à une autre difficulté standard des étudiants : l'écriture $v \cdot \lambda$ n'a pas de sens. L'ordre n'est pas symétrique, car les rôles ne le sont pas. C'est exactement la même situation avec $3 \cdot 2 \mathrm{m}$ et $2 \mathrm{m} \cdot 3$.

Pour pouvoir comparer ces deux quantités, il faut une étape supplémentaire passée sous silence. Il faut en fait identifier la longueur avec le nombre qu'il représente. Cette identification revient à choisir un générateur $1 \mathrm{m} \in E$ et ensuite, on établit une bijection $E \rightarrow \mathbb{N}$ - cette identification revient à dire que le scalaire $3$ et la longueur $3 \mathrm{m}$ deviennent le "même objet" et alors, on peut reformuler le problème de la commutativité par 

$$3 \cdot 2 \mathrm{m} = (3 \times 2) \cdot 1 \mathrm{m} \qquad \text{vs} \qquad 2 \times 3 \mathrm{m} = (2 \times 3) \cdot 1 \mathrm{m}.$$

On a transformé le problème d'un entier qui agit sur les longueurs à la multiplication de deux entiers que l'on peut comparer. Cette identification est tellement spontanée qu'on l'a oublié, mais elle permet de passer d'une **action** à une **opération binaire interne** à $\mathbb{N}$ (qui elle peut être commutative ou non). C'est seulement après ce passage que la question de la commutativité commence à avoir un sens. Si cette mise en vocabulaire semble excessive par rapport à la familiarité de la situation, c'est vivre l'adage prêté à Von Neumann : "En mathématiques, on ne comprend pas les choses, on s'y habitue." L'enfant qui apprend, lui, n'a pas encore eu le temps de s'y habituer; c'est pour cela qu'il a sans doute raison de trouver tout ceci mystérieux.

## Itération et commutativité

Reprenons : la multiplication est vue comme l'itération de l'opération commutative qui est l'addition. Sa commutativité a un caractère spécial, voire exceptionnel. Si on monte un cran et qu'on regarde l'exponentiation comme une multiplication itérée, alors la commutativité disparaît : $3^2 = 3 \times 3 \neq 2 \times 2 \times 2 = 2^3$. L'itération d'une opération commutative ne donne donc pas, en général, une opération commutative. La commutativité de la multiplication n'est donc pas un héritage automatique de celle de l'addition; c'est un fait nouveau qu'il faut justifier. Finalement, l'enfant a sans doute raison de se méfier de la commutativité de la multiplication.

Il s'en méfie tellement d'ailleurs que, dans l'apprentissage des tables de multiplication, $6 \times 8$ et $8 \times 6$ sont retenus comme deux faits distincts - l'un dans la table de 6, l'autre dans la table de 8. Le double d'information à retenir, c'est, pour certains, une vraie barrière à l'apprentissage.

Reste à comprendre pourquoi. 

Une première preuve, presque mécanique, consiste à raisonner par récurrence sur $a$ à $b$ fixé. Pour $a=1$, $1 \times b = b$ et $b \times 1 = 1 + \ldots + 1 = b$ par définition de l'itération. Reste l'hérédité : si $a \times b = b \times a$, alors 

$$(a+1) \times b = a \times b + b = b \times a + b = b \times (a+1)$$

la dernière égalité utilisant la distributivité de la multiplication sur l'addition à droite - qui, elle aussi, se prouve par récurrence. Mais on a seulement **vérifié** la commutativité sans avoir l'impression de l'avoir vraiment *comprise*. La récurrence est un bon outil pour s'assurer qu'un énoncé est vrai; ce n'est pas toujours un bon outil pour comprendre pourquoi il l'est.

Il y a une autre voie, qui change complètement l'angle d'attaque. Au lieu de définir $a \times b$ comme une itération, on peut le définir comme le cardinal du produit cartésien $A \times B$, où $A$ et $B$ sont deux ensembles à $a$ et $b$ éléments. Cette définition est plus symétrique, car on a une bijection $(i,j) \in A \times B \mapsto (j,i) \in B \times A$, et la commutativité retombe gratuitement, sans récurrence ni calcul. 

Cette manière de voir n'est pas tout à fait nouvelle. C'est exactement la version algébrique de l'argument du rectangle, que l'on apprend parfois en classe - celui que l'on retrouve par exemple dans la méthode de Singapour, où l'on dispose les jetons en grille pour voir d'un seul coup d'oeil que $3 \times 2$ et $2 \times 3$ comptent les mêmes objets. La rotation du rectangle est exactement la même opération que la bijection $(i,j) \mapsto (j,i)$ simplement vue géométriquement plutôt que combinatoirement.

Remarquons cependant qu'aucune des deux présentations "simples" de la commutativité - celle de l'école, par itération, et celle de l'aire du rectangle - n'est vraiment propre. Toutes les deux dissimulent un saut conceptuel différent.

L'itération introduit une asymétrie de rôles : $a$ est un opérateur qui agit sur $b$. Ces deux objets ne vivent pas dans le même monde, et la commutativité affirme qu'ils sont identifiés - ce passage d'une action à une opération binaire interne que l'on a discuté au paragraphe précédent. La faille ici est dans la nature des objets. 

Le rectangle, lui, introduit un saut dimensionnel. Il représente le produit de deux **longueurs** (ou de deux quantités linéaires) par une **aire** - précisément la situation $3 \; \mathrm{m} \times 2 \; \mathrm{m} = 6 \; \mathrm{m}^2$ que l'on signalait au début du billet, et qui n'avait alors rien d'innocent. L'argument fonctionne parce que l'on s'autorise tacitement à monter dans la dimension supérieure le temps de la preuve, puis redescendre. La faille ici est dans les unités.

L'argument du produit cartésien ne fait ni l'un, ni l'autre et certainement la plus "propre" des trois. Mais il a un coût : l'abstraction - il a fallu sortir des longueurs, des paquets, du concret, pour aller dans le formalisme des ensembles finis et de leurs cardinaux. C'est une autre forme de saut, simplement plus tardif dans la pensée.

N'est-ce pas intéressant d'observer que quelle que soit la manière de voir la commutativité de la multiplication, on finit par payer un prix conceptuel quelque part : l'asymétrie des rôles, le saut dimensionnel, ou l'abstraction ensembliste. Il n'y a pas de présentation gratuite ou intuitive automatique. Et c'est peut-être pour cela que la commutativité, qui paraît si évidente une fois acquise, demande tant de temps à être comprise : on ne peut pas l'éclairer sans déplacer le problème ailleurs.

Bien sûr, on n'a pas démontré tout à fait la même chose par les deux voies algébriques. La récurrence prouve la commutativité d'une opération définie comme itération de l'addition. L'argument par couples prouve la commutativité d'une opération définie comme cardinal d'un produit cartésien. Pour que les deux preuves portent sur le même objet, il faut un théorème supplémentaire qui relie les deux définitions. Ce théorème est généralement passé sous silence, parce qu'il semble être une évidence. C'en est une, en un sens. Mais c'est cette trivialité là qui contient toute la substance du miracle.

Cela explique en passant la non-commutativité de l'exponentiation. La quantité $a^b$ ne compte pas des couples, mais le nombre de fonctions entre un ensemble $B$ à $b$ éléments et un ensemble $A$ à $a$ éléments. Là, la source et le but jouent des rôles essentiellement distincts. Aucune symétrie naturelle disponible, aucune commutativité.

Il y a une question naturelle qu'on peut se poser pour finir, et qui a une réponse précise qui éclaircit sans doute les observations précédentes. On cherche quelles sont les opérations associatives et commutatives $\oplus$ sur $\mathbb{N}^*$ telles que l'itérée 

$$a \otimes b = \underbrace{b \oplus b \oplus \ldots \oplus b}_{a \; \text{fois}}$$

soit elle-même commutative ? La réponse est élégamment rigide : la seule opération $\oplus$ qui convient est l'addition. En effet, si $\otimes$ est commutative, on a en particulier $a = a \otimes 1 = 1 \otimes a$, ce qui s'écrit 

$$a = \underbrace{1 \oplus 1 \oplus \ldots \oplus 1}_{a \; \text{fois}}$$

Tout entier est forcé d'être l'itéré de $1$ un certain nombre de fois. Mais alors, pour $a,b$ quelconque, on a par associativité et commutativité de $\oplus$ : 

$$a \oplus b = (1 \otimes a) \oplus (1 \otimes b) = \underbrace{1 \oplus \ldots \oplus 1}_{a+b \; \text{fois}}.$$

Donc, $\oplus$ est en fait l'addition. On voit alors que la commutativité est réellement un phénomène exceptionnel et rare : aucune autre opération associative et commutative sur $\mathbb{N}^*$ ne donne lieu à une itérée commutative.

## Poser la multiplication : un obscurcissement supplémentaire de la commutativité

Il y a un dernier épisode dans cette histoire, qui me paraît assez frappant et que j'ai longtemps accepté sans le voir. L'algorithme de la multiplication posée - celui qu'on apprend à l'école pour calculer à la main, par exemple $123 \times 236$ - privilégie ostensiblement un des deux facteurs. Quand on pose le calcul, chaque chiffre du facteur du dessous "itère" chaque chiffre du facteur du dessus. La disposition est asymétrique de bout en bout.

On l'observe clairement en posant les deux calculs $123 \times 236$ et $236 \times 123$ qui ne font pas apparaître les mêmes produits partiels. Et pourtant, le résultat final est rigoureusement identique. Pour l'enfant attentif, c'est un nouveau petit miracle local après avoir intégré (ou pas) que les tables de multiplication étaient symétriques.

Avec un peu de recul, le phénomène qui apparaît est assez joli. L'algorithme calcule en réalité la somme 

$$\sum \limits_{i,j} a_i b_j 10^{i+j}$$

où les $a_i$ et $b_j$ sont les chiffres respectifs des deux nombres en base $10$. Cette somme est manifestement symétrique en $a$ et $b$. Là où la disposition introduit une asymétrie, c'est seulement dans l'**ordre** du calcul: on peut calculer cette somme en commençant par sommer $j$, puis sur $i$ ou inversement, mais la somme globale reste la même. Ainsi, l'asymétrie apparente de l'algorithme n'est qu'un choix d'ordre de sommation, pas un fait mathématique. C'est derrière cette asymétrie apparente qu'a été construit un des problèmes de l'[ETEAM 2026](https://eteam-tournament.org/).

## Conclusion

Nous avons vu comme la commutativité de la multiplication est un résultat à part entière. Chaque manière de la voir paie son prix conceptuel quelque part et le "miracle" est déplacé avec chaque point de vue différent que l'on prend. Ce que l'on appelle la commutativité de la multiplication est un petit théorème modeste, mais authentique, non pas parce qu'il est faux ou difficile, mais parce que sa formulation même demande qu'on ait préalablement accepté quelque chose que l'on ne voit plus : le besoin et l'exigence d'une preuve.

L'enfant qui apprend ses tables de multiplication dans les deux sens, ou qui s'étonne en silence devant la multiplication posée, est sans doute en train, sans le savoir, de prendre au sérieux ce que les habitudes ont fini par faire oublier. Et qu'aucune des preuves disponibles, pas même la plus géométrique, ne vient sans son propre petit saut conceptuel silencieux. Mais l'enseignement, c'est peut-être ça, au fond : pas tant la transmission d'idées formelles que la recherche du point de vue qui fait *comprendre* - ou simplement accepter - une propriété un peu spéciale que tout le monde trouve évidente. Du moins, c'est ainsi que je le vois.
