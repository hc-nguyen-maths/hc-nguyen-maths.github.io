---
date: 2026-06-26
layout: post
title: "[FR] Champs de vecteurs ou fonctions?"
description: "Les champs de vecteurs sont introduits souvent comme des fonctions, mais cette présentation est trompeuse et surtout incohérente avec l'usage que l'on en a en physique. L'objectif de ce billet de blog est de rétablir la différence entre ces deux concepts proches et aussi d'expliquer pourquoi ces confusions sont faites."
tags: [géométrie, calcul différentiel, vulgarisation]
categories: [fr]
related_posts: false
toc: 
  beginning: true

---

Comme souvent, nous commençons par une motivation physique pour comprendre quelle différence sont à faire entre ces notions. Nous verrons ensuite comment ces idées venant de la physique peuvent être traduites en mathématiques pour arriver à une définition cristalline qui met au clair les différences, mais permet aussi d'expliquer certains abus de notations et/ou confusions.

## Champs de vecteurs ou fonctions ? Le point de vue physique

Prenons l'exemple de $$\mathbb{R}^3$$ et le point de vue de la physique. Une fonction lisse $$f : \mathbb{R}^3 \longrightarrow \mathbb{R}^3$$ est simplement la donnée de $$3$$ fonctions scalaires : 

$$f(x,y,z) = \big( f_1(x,y,z), f_2(x,y,z), f_3(x,y,z) \big),$$

où $$f_i : \mathbb{R}^3 \rightarrow \mathbb{R}$$ sont des fonctions scalaires lisses. Dans ce cas, $$f_1,f_2,f_3$$ sont simplement trois quantités numériques attachées au point $$(x,y,z)$$. Si l'on passe en coordonnées cylindriques 

$$x = \rho \cos \theta, \qquad y = \rho \sin \theta, \qquad z = z,$$

alors ces trois fonctions deviennent

$$\widetilde{f}_i(\rho, \theta, z) = f_i(\rho \cos \theta, \rho \sin \theta, z).$$

Autrement dit, chaque composante est simplement réécrite dans les nouvelles variables. Rien d'autre ne se passe. C'est exactement ce qui arrive pour trois champs scalaires : une température, une pression et une densité, par exemple.

En revanche, un champ de vecteurs n'est pas seulement la donnée de trois nombres en chaque point. C'est la donnée d'une **flèche** en chaque point. Par exemple, dans les coordonnées cartésiennes usuelles, un champ de vecteurs peut s'écrire 

$$\overrightarrow{V}(x,y,z) = V_x(x,y,z) \overrightarrow{e_x} + V_y(x,y,z) \overrightarrow{e_y} + V_z(x,y,z) \overrightarrow{e_z},$$

où $$\overrightarrow{e_x}, \overrightarrow{e_y}, \overrightarrow{e_z}$$ désignent les directions cartésiennes usuelles. La différence importante est que les nombres $$V_x$$, $$V_y$$ et $$V_z$$ ne sont pas trois fonctions scalaires indépendantes. Ce sont les **composantes** du vecteur dans le repère **cartésien**. Lorsque l'on passe en coordonnées cylindriques, on ne fait donc pas que réécrire les fonctions en remplaçant $$x,y,z$$ par $$\rho, \theta, z$$. Il faut aussi changer de repère.

En coordonnées cylindriques, les directions naturelles sont $$\overrightarrow{e_{\rho}}$$, $$\overrightarrow{e_{\theta}}$$ et $$\overrightarrow{e_z}$$ qui dépendent du point considéré ! Typiquement,

$$\overrightarrow{e_{\rho}} = \cos(\theta) \overrightarrow{e_x} + \sin(\theta) \overrightarrow{e_y} \qquad \text{et} \qquad \overrightarrow{e_{\theta}} = - \sin(\theta) \overrightarrow{e_x} + \cos(\theta) \overrightarrow{e_y}.$$

Donc le même champ de vecteurs peut aussi s'écrire

$$\overrightarrow{V} = V_{\rho} \overrightarrow{e_{\rho}} + V_{\theta} \overrightarrow{e_{\theta}} + V_z \overrightarrow{e_z}.$$

Les composantes cylindriques sont alors données par 

$$\left\{ \begin{array}{lll}
V_{\rho}(\rho, \theta, z) &=& \cos(\theta) V_x(\rho \cos \theta, \rho \sin \theta, z) + \sin(\theta) V_y(\rho \cos \theta, \rho \sin \theta, z) \\
V_{\theta}(\rho, \theta, z) &=& - \sin(\theta) V_x(\rho \cos \theta, \rho \sin \theta, z) + cos(\theta) V_y(\rho \cos \theta, \rho \sin \theta, z) \\ 
V_z(\rho, \theta, z) &=& V_z(\rho \cos \theta, \rho \sin \theta, z) \end{array} \right. .$$

Cette fois, les composantes se mélangent. C'est cela la différence essentielle.

Pour une fonction à valeurs dans $$\mathbb{R}^3$$, vue comme trois fonctions scalaires, le changement de coordonnées, représenté par un $${\mathcal C}^1$$-difféomorphisme $$\Phi$$ donne seulement : 

$$\widetilde{f} = f \circ \Phi.$$

Pour un champ de vecteurs, les composantes changent aussi parce que la base change : $$(V_x, V_y, V_z) \longrightarrow (V_{\rho}, V_{\theta}, V_z)$$. En fait, la loi de changement de coordonnées est donnée par 

$$\widetilde{\overrightarrow{V}} = \mathrm{d} \Phi^{-1} \circ V \circ \Phi,$$

où $$\mathrm{d} \Phi$$ est la différentielle de $$\Phi$$. La morale physique est donc : 

$$\boxed{\text{Une fonction vectorielle donne trois nombres; un champ de vecteurs donne une flèche.}}$$

Et une flèche ne se transforme pas comme une simple liste de trois fonctions scalaires : ses composantes dépendent du repère dans lequel on la décrit.

## Systèmes de coordonnées

Repassons à une description mathématique cohérente. Avant de comparer une fonction à valeurs vectorielles et un champ de vecteurs, il faut préciser ce que l'on entendait dans le paragraphe précédent par "**coordonnées**". L'idée physique est simple : un système de coordonnées est une manière simplement de repérer les points de l'espace par des nombres. Par exemple, dans l'espace usuel $$\mathbb{R}^3$$, les coordonnées cartésiennes repèrent un point par $$(x,y,z)$$ tandis que les coordonnées cylindriques le repèrent par $$(\rho, \theta, z)$$.

Mathématiquement, un système de coordonnées sur un ouvert $$U \subset \mathbb{R}^N$$ est donnée par un $${\mathcal C}^1$$-difféomorphisme entre un ouvert $$\Omega$$ de $$\mathbb{R}^N$$ et $$U$$ :

$$\Phi : \Omega \subset \mathbb{R}^N \longrightarrow U \subset \mathbb{R}^N,$$

c'est-à-dire $$\Phi$$ est une application de classe $${\mathcal C}^1$$ bijective, dont la bijection réciproque est aussi lisse. Ici, $$\Omega$$ est l'espace des coordonnées, et $$U$$ est la région physique de l'espace que l'on décrit. Si $$q = (q^1, q^2, q^3) \in \Omega$$, alors $$p = \Phi(q)$$ est le point de l'espace correspondant à ces coordonnées. Par exemple, on a 

$$\Phi_{\text{cylindrique}} : (\rho, \theta, z) \in \; ]0,+\infty[ \; \times \; ]-\pi, \pi[ \; \times \mathbb{R} \longmapsto \big( \rho \cos(\theta), \rho \sin(\theta), z \big) \in \mathbb{R}^3 \setminus \left\{ (x,0,z) \in \mathbb{R}^3, \; x \leqslant 0 \right\}.$$

ou encore, 

$$\Phi_{\text{sphérique}} : (r,\theta,\varphi) \in \; ]0,+\infty[ \; \times ]0,\pi[ \; \times \; ]-\pi, \pi[ \; \longmapsto \big( r \sin(\theta) \cos(\varphi), r \sin(\theta) \sin(\varphi), r \cos(\theta) \big) \in \; ]0+\infty[ \; \times \; ]0,\pi[ \; \times \; ]-\pi,\pi[.$$

Les nombres $$(\rho, \theta, z)$$ (ou $$(\rho,\theta,\varphi)$$) ne sont donc pas le point lui-même : ce sont des **étiquettes numériques** qui permettent de **retrouver** le point. Remarquons aussi que ces coordonnées ne décrivent pas tout l'espace d'un seul coup sans ambiguïté : un système de coordonnées est toujours **local**.
