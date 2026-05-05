---
date: 2026-05-25
layout: post
title: "[FR] Union d'ensembles et somme d'espaces : plus qu'une analogie, une universalité"
description: "Une confusion fréquente pour les apprenants d'algèbre linéaire, mais qui cache une profondeur algébrique"
tags: [algèbre, didactique, vulgarisation]
categories: [fr]
related_posts: false
draft: true
toc: 
  beginning: true

---

## Le problème concret

Un étudiant qui découvre l'algèbre linéaire bute presque toujours sur le même petit mystère notationnel. En théorie des ensembles, $A \cup B$ désigne la réunion de deux parties. En algèbre linéaire, pour deux sous-espaces $U$ et $V$, on note $U+V$ leur "somme". Pourquoi cette différence ? Pourquoi pas $U \cup V$ ?

La réponse courte : parce que $U \cup V$ n'est pas un sous-espace. La réponse longue est plus intéressante, et c'est elle qui m'occupe ici. Elle révèlle que ces deux opérations, en apparence superficiellement analogues, sont en fait deux instances du même geste mathématique, qui se retrouve un peu partout dès qu'on regarde - et qui, parfois, refuse d'exister.

En effet, c'est un exercice classique de montrer que pour deux sous-espaces $U$ et $V$, leur réunion ensembliste $U \cup V$ est un sous-espace si, et seulement si, $U \subset V$ ou $V \subset U$. On répare alors cela en définissant leur somme $U+V = \lbrace u + v, \; u \in U, v \in V \rbrace$. Mais une question s'impose ? Pourquoi *celui-là* ? Pourquoi pas n'importe quel sous-espace contenant $U \cup V$ ? Qu'est-ce qui rend $U+V$ *canonique* ?

## La vision objet : le plus petit contenant

Une première caractérisation est immédiate : $U+V$ est le plus petit sous-espace contenant $U \cup V$. C'est-à-dire :

- $U+V$ contient $U$ et $V$;
- tout sous-espace contenant $U$ et $V$ contient $U+V$.

Ces deux propriétés déterminent $U+V$ de façon unique. Et la même phrase, mot pour mot, caractérise $A \cup B$ parmi les sous-ensembles d'un ensemble ambiant $X$ : 

- $A \cup B$ contient $A$ et $B$;
- tout sous-ensemble contenant $A$ et $B$ contient $A \cup B$.

À quelques mots près, c'est la même définition.

## La vision flèche : recollement de données partielles

Pour définir une application linéaire $f : U + V \rightarrow W$, il suffit - et il faut - de la donner sur $U$ et sur $V$, à condition que les deux définitions coïncident sur $U \cap V$. 

C'est exactement cette propriété qui est en jeu chaque fois que l'on définit une application linéaire "par morceaux". Et c'est elle qui caractérise $U+V$ à isomorphisme unique près. Si un autre sous-espace $S$ contenait $U$ et $V$ et permettait le recollement, on en déduirait une bijection canonique entre $S$ et $U+V$ - ils seraient le même objet.

Notons au passage que la condition "coïncident sur $U \cap V$" est essentielle. Sans elle, on parlerait d'un autre objet : la somme directe *externe* $U \oplus V = \lbrace (u,v), \; u \in U, v \in V \rbrace$, qui ne tient pas compte de l'intersection, mais qui n'est aussi plus un sous-espace de l'espace ambiant. La somme $U+V$ est précisément la construction qui *recolle* $U$ et $V$ le long de leur intersection $U \cap V$. 

Or - et c'est ici que le geste prend son sens - la même phrase caractérise $A \cup B$ : pour tout ensemble $Z$, se donner une application $f : A \cup B \rightarrow Z$ équivaut à se donner deux applications $f_A : A \rightarrow Z$ et $f_B : B \rightarrow Z$ qui coïncident sur $A \cap B$. 

À nouveau, à quelques mots près, ce sont les mêmes caractérisations. Cette formulation a un avantage décisif sur la précédente : elle ne présente pas seulement l'objet par ce qu'il contient, mais par ce qu'on peut en faire. Elle parle des flèches qui en sortent. Et c'est ce point de vue - caractériser un objet par les morphismes qu'il admet - qui est la démarche catégorique fondamentale.

## D'autres exemples

Une fois que cette propriété universelle a été remarquée, on la reconnaît dans toutes les sous-structures classiques.

**Sous-groupes.** Pour deux sous-groupes $H$ et $K$ d'un groupe $G$, le sous-groupe engendré par $H \cup K$ satisfait la même propriété : un morphisme de $H \cup K$ est déterminé par ses restrictions compatibles à $H$ et $K$.

**Topologies, tribus engendrées.** La topologie engendrée par deux topologies sur $x$ est la plus petit contenant leurs ouverts; même structure pour les tribus.

**PGCD et PPCM.** 
