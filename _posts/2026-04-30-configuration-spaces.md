---
date: 2026-04-29
layout: post
title: "Espaces de configuration : physique, musique et toblerone"
description: "Comment un accord de trois notes devient naturellement un toblerone?"
tags: [topologie, géométrie, musique, vulgarisation]
categories: recherche
related_posts: false
toc: 
  beginning: true

---

## Un accord, c'est quoi au juste ?

Quand on joue *do-mi-sol* au piano, on entend un accord. Si on joue *sol-do-mi* - exactement les mêmes touches , mais dans un ordre différent - on entend un accord harmoniquement identique, appelé renversement en musique. L'ordre n'a pas d'importance en harmonie : un accord est un **ensemble** de notes, pas une **liste** ordonnée. Cette remarque qui semble anodine a une conséquence géométrique surprenante.

## Du cercle chromatique au cercle continu

Sur un piano, les notes forment une suite discrète : douze demi-tons par octave qui se referment sur eux-mêmes (le do de l'octave suivante "rejoint" celui de départ). C'est le cercle chromatique des musicologues - un objet à douze cases.
<div class="row justify-content-center">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/blog/chromatic.png" class="img-fluid rounded z-depth-1" alt="Le cercle chromatique" %}
  </div>
</div>
Faisons un bond d'abstraction : oublions les douze notes discrètes et imaginons un continuum de fréquences sur un cercle (typiquement ce qui se passe sur un violon), comme si l'on pouvait glisser sans s'arrêter d'une note à l'autre. Le cercle $\mathbb{S}^1$ représente alors l'espace géométrique de toutes les notes (à octave près), chaque point de cet espace géométrique correspond à une unique note (à octave près). Un accord à $n$ notes devient alors un ensemble (non ordonné) de $n$ points sur $\mathbb{S}^1$, éventuellement avec répétition. Pour le modéliser, partons d'abord de l'espaces des $n$-uplets *ordonnés* de notes : 

$$\underbrace{\mathbb{S}^1 \times \ldots \times \mathbb{S}^1}_{n \text{ fois}}.$$

C'est le $n$-tore, un objet géométrique relativement simple : un produit de cercles. Mais un accord ne dépend pas de l'ordre des notes : il faut donc identifier les $n$-uplets qui ne diffèrent que par une permutation. On prend le quotient 

$$\mathrm{Conf}_n(\mathbb{S}^1) = (\mathbb{S}^1)^n/\mathfrak{S}_n,$$

où $\mathfrak{S}_n$ est le groupe symétrique qui agit sur le produit $\mathbb{S}^1 \times \ldots \times \mathbb{S}^1$ par permutation des coordonnées. Cet espace géométrique s'appelle le $n$-ième espace de configuration, ou le $n$-ième produit symétrique en topologique algébrique - c'est l'espace de tous les accords possibles, dont chaque point représente un accord. Contrairement au $n$-tore $(\mathbb{S}^1)^n$ qui est très simple, le quotient $\mathrm{Conf}_n(\mathbb{S}^1)$ a une géométrie plus subtile. Voyons ce qu'on obtient pour les premières valeurs de $n$.

## Le cas $n=2$ : deux notes et le ruban de Möbius

Commençons par le cas le plus simple pour illustrer : un accord à deux notes. Commençons par l'espace des configurations ordonnées à $2$ points, il s'agit de l'espace $\mathbb{S}^1 \times \mathbb{S}^1$ : c'est le tore, que l'on visualise classiquement comme un carré dont on identifie les bords. Pour passer aux configurations non ordonnées, il faut identifier par l'action de $\mathfrak{S}_2$ qui échange les deux coordonnées le long de la diagonale $\theta_1 = \theta_2$ (panneau 1). 
{% include figure.liquid loading="eager" path="assets/img/blog/mobius_construction.png" class="img-fluid rounded z-depth-1" alt="Construction du ruban de Möbius comme espace de configuration" %}
Un domaine fondamental pour cette action est obtenu en gardant la moitié du carré où $\theta_1 \leqslant \theta_2$ (panneau 2). Reste à comprendre comment réidentifier les deux bords bleus. En suivant la construction décrite ci-dessous, on obtient un **ruban de Möbius**, dont la diagonale devient le bord - le cercle des unissons. 

## Le cas $n=3$ : trois notes et le Toblerone twisté

Le pas suivant - trois notes - est plus délicat à visualiser, mais reste à portée d'imagination. L'espace des configurations ordonnées à $3$ est le $3$-tore $(\mathbb{S}^1)^3$, il ne se plonge pas dans l'espace à $3$ dimensions. Cependant, on peut reprendre l'analogie du carré avec les bords identifiés mais avec une dimension supplémentaire pour avoir le $3$-tore : il s'agit d'un cube $[0,2\pi]^3$ dont les faces opposées sont identifiées (panneau 1). L'action de $\mathfrak{S}_3$ sur ce cube a six éléments - les permutations des trois coordonnées $(\theta_1, \theta_2, \theta_3)$ -, et un domaine fondamental s'obtient en imposant un ordre. Le choix le plus naturel est $0 \leqslant \theta_1 \leqslant \theta_2 \leqslant \theta_3 \leqslant 2 \pi$ qui découpe dans le cube un tétraèdre représentant $\frac{1}{6}$ du volume du cube (panneau 2).
{% include figure.liquid loading="eager" path="assets/img/blog/toblerone_construction.png" class="img-fluid" alt="Construction du toblerone twisté à partir du 3-tore." %}
À ce stade, la situation est plus claire après un changement de variables. Au lieu des coordonnées brutes $(\theta_1, \theta_2, \theta_3)$, paramétrons le tétraèdre par la position globale $\theta_1 \in [0,2 \pi]$ et les deux écarts $\delta_1 = \theta_2 - \theta_1$, $\delta_2 = \theta_3 - \theta_2$. Posons aussi $\delta_3 = 2 \pi - \delta_1 - \delta_2$. Les trois écarts vérifient 

$$\delta_1 + \delta_2 + \delta_3 = 2 \pi, \qquad \delta_k \geqslant 0,$$ 

et décrivent donc un **triangle équilatéral plein** $\Delta$. Le tétraèdre du panneau 2, vu dans ces nouvelles coordonnées, devient un prisme droit (ou toblerone) $\Delta \times [0,2 \pi]$ : à chaque hauteur $\theta_1$, on lit le triangle des écarts (panneau 3). 

Reste à comprendre comment refermer le prisme. Il faut identifier la face supérieure $\theta_1 = 2 \pi$ avec la face inférieure $\theta_1 = 0$, mais **comment** ?

Voici la subtilité : sur le $3$-tore, les coordonnées sont définies modulo $2 \pi$. Quand on suit un point dans le domaine fondamental et que l'on fait varier $\theta_1$ continûment de $0$ jusqu'à $2 \pi$, les autres coordonnées $\theta_2$ et $\theta_3$ avancent en parallèle et finissent par dépasser $2 \pi$. En les ramenant dans l'intervalle $[0,2\pi]$ et en réordonnant, on s'aperçoit que le **rôle des trois sommes s'est décalé**. Sur le triangle des écarts, cela se traduit par une rotation **cyclique** des sommets - autrement dit, une rotation de 120°. 

Pour refermer le prisme, il ne faut donc pas identifier la face du haut avec celle du bas, mais **après une rotation de** $120°$. Le résultat est le **toblerone twisté** (panneau 4). Comme pour le ruban de Möbius, on peut lire les accords à $3$ notes sur cet objet : 

- **l'intérieur** du toblerone correspond aux accords où les trois notes sont distinctes;
- **les trois faces** correspondent aux accords où deux notes coïncident;
- **l'arête centrale spiralée** correspond aux accords où toutes les notes coïncident.

L'image suivante de l'espace $\mathrm{Conf}_3(\mathbb{S}^1)$ comme toblerone twisté a été produite par un graphiste. Une sculpture similaire existe à Stony Brook University, appelée Umbilic torus, mais la section du prisme est un triangle hyperbolique (deltoïde). 
{% include figure.liquid loading="eager" path="assets/img/blog/conf.gif" class="img-fluid rounded z-depth-1" alt="L'espace des configuration à 3 points." %}

## Le cas général : Théorème de Morton

Avant d'énoncer le résultat général, introduisons le vocabulaire géométrique qui permet de le formuler simplement. Les **simplexes** sont les généralisations en dimension supérieure des segments (1D), des triangles (2D) et des tétraèdres (3D). Le $n$-simplexe standard est défini par

$$\Delta^n = \left\{ (a_0, \ldots, a_n) \in \mathbb{R}^{n+1}, \; a_0 + \ldots + a_n = 1, \; a_k \geqslant 0 \right\} = \left\{ (t_0, \ldots, t_n) \in \mathbb{R}^{n+1}, \; 0 \leqslant t_0 \leqslant \ldots \leqslant t_n \leqslant 1 \right\}.$$

Il est de dimension $n$, même s'il est naturellement plongé dans $\mathbb{R}^{n+1}$ et la deuxième description montre même que $\Delta^n = \mathrm{Conf}_n\big( [0,1] \big)$. Ainsi, $\Delta^1$ est un segment, $\Delta^2$ est un triangle plein et $\Delta^3$ est un tétraèdre plein. Les résultats précédents montrent que les espaces $\mathrm{Conf}_2(\mathbb{S}^1)$ (resp. $\mathrm{Conf}_3(\mathbb{S}^1)$) sont obtenus avec un simplexe $\Delta^1$ (resp. $\Delta^2$) que l'on a fait "tourner" autour d'un cercle $\mathbb{S}^1$. La seule subtilité est que ce simplexe ne revient pas forcément sur lui-même sans modification : il peut revenir avec un **twist**. Dans l'article *Symmetric product of the circle* (1967), H. Morton généralise cette observation et montre le résultat suivant : 

**Théorème (Morton, 1967).** Pour tout $n \geqslant 1$, l'espace $\mathrm{Conf}_n(\mathbb{S}^1)$ est un fibré sur $\mathbb{S}^1$ dont les fibres sont des simplexes de dimension $n-1$. Ce fibré est de plus orientable si, et seulement si, $n$ est impair.

***Démonstration (niveau avancé).*** On voit $\mathbb{S}^1$ comme le groupe multiplicatif des nombres complexes de module $1$ et on considère l'application de multiplication 

$$\mu : \mathrm{Conf}_n(\mathbb{S}^1) \longrightarrow \mathbb{S}^1, \qquad \lbrack z_1, \ldots, z_n \rbrack \longmapsto z_1 \ldots z_n.$$

L'application est bien définie sur le quotient car le produit est commutatif.

**Étape 1 - Identifier la fibre.** Fixons $w \in \mathbb{S}^1$, on note $\theta \in \mathbb{R}$ un argument de $w$. La fibre $\mu^{-1}(w)$ est l'ensemble des classes $\lbrack z_1, \ldots, z_n \rbrack$ telles que $z_1 \ldots z_n = w$. En prenant les arguments $z_k = e^{i \theta_k}$, la condition devient 

$$\theta_1 + \ldots + \theta_n = \theta \mod(2 \pi).$$ 

Pour paramétrer cette fibre, il faut briser la symétrie de l'accord en choisissant un point de "référence". Choisissons dans le représentant $(\theta_1, \ldots, \theta_n)$ tel que 

On note $\delta_k = \theta_{k+1} - \theta_k$ avec la convention $\theta_{n+1} = \theta_1 + 2 \pi$. Ces écarts vérifient 

$$\delta_1 + \ldots + \delta_n = 2 \pi, \qquad \delta_k \geqslant 0$$

et l'application $\lbrack z_1, \ldots, z_n \rbrack \longmapsto (\delta_1, \ldots, \delta_n)$ réalise un homéomorphisme entre la fibre $\mu^{-1}(w)$ et un simplexe $\Delta^{n-1}$ de dimension $n-1$. Le bord du simplexe (où certains $\delta_k$ s'annulent) correspond exactement aux accords où plusieurs notes coïncident.

**Étape 2 - $\mu$ est un fibré localement trivial.** Sur tout arc ouvert $U \subset \mathbb{S}^1$, on a une détermination continue du logarithme complexe, l'association $w \mapsto \theta$ est continue et la construciton précédente donne un homéomorphisme

$$\mu^{-1}(U) \cong U \times \Delta^{n-1}.$$

L'application $\mu$ est donc un fibré localement trivial au sens topologique. En revanche, on ne peut pas étendre l'argument continu à tout $\mathbb{S}^1$ - cela revient à dire qu'il n'existe pas de logarithme continu défini sur le cercle unité tout entier - c'est cette obstruction qui crée le twist l'on peut observer dans le cas du Ruban de Möbius. C'est ce qu'on va maintenant quantifier.

**Étape 3 - La monodromie est le $n$-cycle.** Suivons une fibre quand on parcourt $\mathbb{S}^1$ : l'argument $\theta$ augmente continûment de $2 \pi$, l'ancien sommet $z_2$ devient le nouveau sommet de référence. Plus généralement, chaque sommet $z_k = e^{i \theta_k}$ vient prendre la place de l'ancien $z_{k+1}$. Sur la fibre paramétré par les écarts $(\delta_1, \ldots, \delta_n)$, cette transformation se lit par une permutation cyclique 

$$(\delta_1, \ldots, \delta_n) \longmapsto (\delta_n, \delta_1, \ldots, \delta_{n-1}).$$

Le $n$-cycle $(1, 2, \ldots, n)$, vue comme transformation linéaire de $\mathbb{R}^n$ permutant les coordonnées, a pour déterminant sa signature.

- Si $n$ est impair, ce $n$-cycle est de signature $+1$ : la monodromie préserve l'orientation du simplexe et le fibré $\mu$ est **orientable**.

- Si $n$ est pair, ce $n$-cycle est de signature $-1$ : la monodromie renverse l'orientation et le fibré $\mu$ n'est **pas orientable**.

Ceci achève la démonstration. $\blacksquare$

Le théorème de Morton donne une description très explicite de $\mathrm{Conf}_n(\mathbb{S}^1)$ : un fibré sur le cercle, dont la fibre est un simplexe $\Delta^{n-1}$, avec une monodromie cyclique. Mais en général, la description géométrique complète des espaces de configuration $\mathrm{Conf}_n(M)$ est difficile. On sait calculer certains invariants, et il existe même des résultats généraux très puissants, mais ils ne donnent pas toujours une image géométrique aussi concrète que le ruban de Möbius ou le toblerone twisté.

Un résultat fondamental est le théorème de [Dold-Thom](https://en.wikipedia.org/wiki/Dold%E2%80%93Thom_theorem). Si l'on fixe un point de base dans $M$, on peut former l'espace de configuration infini en prenant la limite inductive $\mathrm{Conf}_{\infty}(M) = \underline{\lim} \mathrm{Conf}_n(M)$. Le théorème de Dold-Thom relie alors l'homotopie de cet espace limite à l'homologie (réduite) de $M$ : 

$$\pi_k \big( \mathrm{Conf}_{\infty}(M) \big) \cong \widetilde{H_k}(M; \mathbb{Z}).$$ 

C'est un résultat très profond, mais il concerne la limite des espaces de configuration, pas nécessairement chaque étage fini $\mathrm{Conf}_n(M)$ prisséparément.

Des résultats sur l'homologie des espaces de configurations existent aussi, par exemple dans *The Homology of Symmetric Products* de R.J. Milgram (1969). Mais ces résultats donnent plutôt des descriptions algébriques des invariants homologiques; ils ne fournissent pas toujours une image géométrique simple de l'espace lui-même.

Quelques cas particuliers restent néanmoins très beaux. C'est le cas de la sphère $M = \mathbb{S}^2 \cong \mathbb{CP}^1$. Dans ce cas, on a une description topologique remarquable :

$$\mathrm{Conf}_n(\mathbb{S}^2) \cong \mathbb{CP}^n.$$ 

L'idée est qu'un $n$-uplet non ordonné de points de la sphère $\mathbb{S}^2$, avec multiplicités, peut être vu comme l'ensemble des racines (avec multiplicité) d'un polynôme complexe de degré au plus $n$, défini à multiplication près. Les coefficients de ce polynôme donnent alors des coordonnées projectives. 

Attention toutefois: l'espace $\mathbb{CP}^n$ est naturellement une variété lisse (d'où l'idée d'identification topologique). Afin de poursuivre l'identification des singularités, il faut pouvoir identifier les singularités de $\mathrm{Conf}_n(\mathbb{S}^2)$ à travers l'identification précédente. Reconnaître ces singularités revient à détecter les racines multiples d'un polynôme à partir de ses coefficients. Algébriquement, cela se lit à travers le discriminant, ou plus finement à travers les diviseurs communs entre le polynôme et ses dérivées. On peut s'en faire une idée avec quelques petites valeurs de $n$. 

Pour $n=2$, l'image est encore familière : un polynôme $aX^2 + bX + c \in \mathbb{C} \lbrack X \rbrack$ (correspondant à des coordonnées homogènes $\lbrack a:b:c \rbrack \in \mathbb{CP}^2$) a une racine multiple si, et seulement si, son discriminant $b^2 - 4ac = 0$. Ainsi, les singularités de $\mathrm{Conf}_2(\mathbb{S}^2)$ correspondent à la conique projective dans $\mathbb{CP}^2$ qui a pour équation $b^2 - 4ac = 0$.

Le cas $n=3$ est plus intéressant, car il existe désormais deux types de collisions : deux points peuvent coïncider, ou bien les trois points peuvent coïncider. La notion de discriminant s'étend pour les polynômes de degré supérieur et en particulier, les points singuliers de $\mathrm{Conf}_3(\mathbb{S}^2)$ dans $\mathbb{CP}^3$ correspondent à la surface donnée $\Delta(a,b,c,d)=0$, où $\Delta(a,b,c,d)$ est le discriminant de $aX^3 + bX^2 + cX + d$. Parmi ces points singuliers, les points correspondant à une collision triple correspondent aux polynômes $(\alpha X + \beta)^3$, ces polynômes décrivent dans $\mathbb{CP}^3$ la courbe cubique gauche décrite par $\lbrack \alpha : \beta \rbrack \mapsto \lbrack \alpha^3 : 3\alpha^2 \beta : 3 \alpha \beta^2 : \beta^3 \rbrack$. Cette stratification naturelle selon la nature des collisions affine la notion de points singuliers : certains points sont "plus singuliers" que d'autres.

## Bien au-delà de la musique

**La géométrie harmonique de Tymoczko.** Cette idée de représenter les accords comme des points d'un espace géométrique a été développée systématiquement par [Dmitri Tymoczko](https://dmitri.mycpanel.princeton.edu/) dans ses travaux sur la géométrie des accords. Dans son approche, un accord est représenté par un point d'un espace géométrique, souvent un **orbifold** et une progression harmonique devient alors un **chemin** dans cet espace. Les conduites de voix les plus efficaces - celles où chaque note bouge le moins possible - correspondent à des chemins courts, que l'on peut idéaliser géométriquement comme des géodésiques pour une métrique naturelle sur l'espace des accords héritée du cerlce $\mathbb{S}^1$. Autrement dit, la géométrique de l'espace des accords ne sert pas seulement à classer les accords : elle permet aussi de mesurer la proximité entre deux accords et de comprendre pourquoi certaines progressions semblent particulièrement naturelles à l'oreille. Tymoczko formule précisément cette idée dans *The Geometry of Musical Chords*, où les accords sont modélisés comme des points d'orbifolds et les déplacements entre accords comme des chemins dans cet espace. 

L'analogie musicale est jolie, mais elle ne doit pas faire oublier que les espaces de configuration sont des objets fondamentaux, qui réapparaissent dans des contextes mathématiques et scientifiques très variés. En voici quatre, choisis parmi tant d'autres.

**En physique des particules indiscernables.** Lorsqu'on étudie un système quantique de $n$ particules identiques (par exemple $n$ électrons), l'espace des configurations physiques est exactement $\mathrm{Conf}_n(M)$, où $M$ est l'espace ambiant. La topologie de cet espace contraint les statistiques possibles : en dimension $\geq 3$, on retrouve les bosons et les fermions ; mais en dimension 2, son groupe fondamental — le groupe de tresses — devient bien plus riche, et ouvre la porte aux anyons, des particules aux statistiques fractionnaires aujourd'hui activement étudiées en informatique quantique topologique.

**En robotique.** Pour planifier le mouvement de $n$ robots dans un environnement $M$ sans qu'ils ne se heurtent, on travaille naturellement dans $\mathrm{Conf}_n(M)$. La topologie de cet espace mesure la complexité intrinsèque du problème de planification de mouvement, une notion formalisée par Michael Farber au début des années 2000. Plus la topologie est riche, plus aucun algorithme de planification ne peut être à la fois global et continu.

**En théorie des nœuds et des tresses.** L'espace $\mathrm{Conf}_n(\mathbb{R}^2)$ a pour groupe fondamental le groupe de tresses d'Artin $B_n$ sur $n$ brins. Plus précisément, cet espace est un espace d'Eilenberg-MacLane $K(B_n, 1)$, c'est-à-dire un espace classifiant pour le groupe de tresses. À ce titre, il est l'objet géométrique central qui sous-tend la classification des nœuds, des entrelacs et des invariants quantiques associés.

**En théorie classique et quantique des champs.** Les espaces de configuration apparaissent partout dès qu'il s'agit de décrire des positions de particules ou d'opérateurs ponctuels, et les structures algébriques qui vivent au-dessus de ces espaces — algèbres de Lie, opérades, algèbres de factorisation — encodent leurs interactions. C'est précisément sous cet angle que je les rencontre dans ma propre recherche : voir [Recherche]({{ '/research/' | relative_url }}).

Une grande partie de la difficulté mathématique vient des diagonales, c'est-à-dire des lieux où plusieurs points coïncident. En étudiant l'espace de configuration $\mathrm{Conf}_n(M) = M^n/\mathfrak{S}_n$, ces diagonales restent présentes lorsqu'il y a des points qui coïncident faisant de lui naturellement un **orbifold**. Des espaces plus réguliers peuvent être obtenus en retirant les diagonales avant la prise du quotient afin d'obtenir d'une action libre de $\mathfrak{S}_n$. Dans ma recherche, je m'intéresse au contraire à des structures qui tiennent compte de ces diagonales : elles ne sont pas seulement des singularités gênantes, elles portent une partie essentielle de la richesse de la théorie quantique des champs : la **renormalisation**.
