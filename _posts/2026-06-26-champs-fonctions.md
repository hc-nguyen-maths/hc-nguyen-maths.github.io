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

**Ce qu'est un système de coordonnées.** Mathématiquement, un système de coordonnées sur un ouvert $$U \subset \mathbb{R}^N$$ est donnée par un $${\mathcal C}^1$$-difféomorphisme entre un ouvert $$\Omega$$ de $$\mathbb{R}^N$$ et $$U$$ :

$$\Phi : \Omega \subset \mathbb{R}^N \longrightarrow U \subset \mathbb{R}^N,$$

c'est-à-dire $$\Phi$$ est une application de classe $${\mathcal C}^1$$ bijective, dont la bijection réciproque est aussi lisse. Ici, $$\Omega$$ est l'espace des coordonnées, et $$U$$ est la région physique de l'espace que l'on décrit. Si $$q = (q^1, \dots, q^N) \in \Omega$$, alors $$p = \Phi(q)$$ est le point de l'espace correspondant à ces coordonnées. Par exemple, on a 

$$\Phi_{\text{cylindrique}} : (\rho, \theta, z) \in \; ]0,+\infty[ \; \times \; ]-\pi, \pi[ \; \times \mathbb{R} \longmapsto \Big( \rho \cos(\theta), \rho \sin(\theta), z \
Big) \in \mathbb{R}^3 \setminus \left\{ (x,0,z) \in \mathbb{R}^3, \; x \leqslant 0 \right\}.$$

ou encore, 

$$\Phi_{\text{sphérique}} : (r,\theta,\varphi) \in \; ]0,+\infty[ \; \times \; ]0,\pi[ \; \times \; ]-\pi, \pi[ \; \longmapsto \Big( r \sin(\theta) \cos(\varphi), r \sin(\theta) \sin(\varphi), r \cos(\theta) \Big) \in \; ]0+\infty[ \; \times \; ]0,\pi[ \; \times \; ]-\pi,\pi[.$$

Les nombres $$(\rho, \theta, z)$$ (ou $$(\rho,\theta,\varphi)$$) ne sont donc pas le point lui-même : ce sont des **étiquettes numériques** qui permettent de **retrouver** le point. Remarquons aussi que ces coordonnées ne décrivent pas tout l'espace d'un seul coup sans ambiguïté : un système de coordonnées est toujours **local**.

**Les coordonnées engendrent un repère en chaque point.** Un système de coordonnées ne sert pas seulement à nommer les points. Il engendre aussi des directions naturelles en chaque point. L'idée est la suivante : à partir d'un point donné, on fait varier une seule coordonnée, en gardant les autres constantes. On obtient alors une courbe dans l'espace. La vitesse initiale de cette courbe donne une direction.

Soit $$p = \Phi(q^1, \dots, q^N)$$. Pour obtenir la $$i$$-ème direction de coordonnées, on regarde la courbe $$\gamma_i(t) = \Phi \big( q^1, \dots, q^i + t, \dots, q^N)$$. Cette courbe passe par $$p$$ en $$t=0$$ et sa vitesse en $$t=0$$ donne un vecteur (tangent) en $$p$$ : 

$$\overrightarrow{E_{i,\Phi}}(p) = \dot{\gamma_i}(0) = \frac{\partial \Phi}{\partial q^i}(q).$$

Ces vecteurs $$\Big( \overrightarrow{E_{i,\Phi}}(p) \Big)_{1 \leqslant i \leqslant N}$$ sont les directions naturelles engendrées par le système de coordonnées $$\Phi$$. Comme $$\Phi$$ est un difféomorphisme, sa matrice jacobienne est inversible en tout point et donc les vecteurs précédents sont linéairement indépendants : ils forment ainsi un repère (affine) en $$p$$. 

Autrement dit, un système de coordonnées ne produit pas seulement une manière d'écrire les points $$p = \Phi(q^1, \dots, q^N)$$, il produit aussi, en chaque point $$p$$, un repère local $$\Big( \overrightarrow{E_{i,\Phi}}(p) \Big)_{1 \leqslant i \leqslant N}$$. C'est dans ce repère que l'on pourra ensuite écrire les composantes d'un champ de vecteurs.

Par exemple, pour les coordonnées cylindriques $$\Phi(r, \theta, z) = \Big( r \cos(\theta), r \sin(\theta), z \Big)$$, les directions engendrées par les coordonnées sont 

$$\overrightarrow{E_r} = \big( \cos \theta, \sin \theta, 0 \big), \quad \overrightarrow{E_{\theta}} = \big( - r \sin \theta, r \cos \theta, 0 \big) \quad \text{et} \quad \overrightarrow{E_z} = (0,0,1).$$

On a alors le repère de coordonnées $$\Big( \overrightarrow{E_r}, \overrightarrow{E_{\theta}}, \overrightarrow{E_z} \Big)$$. Mais ce repère n'est pas orthonormé, en effet, $$\big\| \overrightarrow{E_{\theta}} \big\| = r$$. C'est normal : changer l'angle $$\theta$$ d'une petite quantité ne produit pas le même déplacement selon que l'on soit près ou loin de l'axe. Sur un cercle de rayon $$r$$, une variation infinitésimale $$\mathrm{d} \theta$$ correspond à une longueur $$r \mathrm{d} \theta$$. C'est pour cela que les physiciens introduisent souvent la version "renormalisée" du repère précédent avec $$\overrightarrow{e_{\theta}} = \frac{1}{r} \overrightarrow{E_{\theta}}$$.

**Champs de vecteurs dans un système de coordonnées.** Soit maintenant $$\overrightarrow{V}$$ un champ de vecteurs défini sur l'ouvert $$U$$. Cela signifie qu'à chaque point $$p \in U$$, on associe un vecteur (tangent) $$\overrightarrow{V}(p)$$ situé en $$p$$. Si l'on choisit un système de coordonnées 

$$\Phi : \Omega \subset \mathbb{R}^N \longrightarrow U \subset \mathbb{R}^N.$$

alors, les coordonnées $$\Phi$$ engendrent en chaque point $$p = \Phi(q)$$ un repère $$\Big( \overrightarrow{E_{i,\Phi}}(p) \Big)_{1 \leqslant i \leqslant N}$$. On peut donc décomposer le vecteur $$\overrightarrow{V}(p)$$ dans cette base : 

$$\overrightarrow{V}(p) = V^1_{\Phi}(q) \overrightarrow{E_{1,\Phi}}(p) + \cdots + V^N_{\Phi}(q) \overrightarrow{E_{N,\Phi}}(p).$$

Les fonctions $$V^i_{\Phi} : \Omega \rightarrow \mathbb{R}$$ sont les composantes du champ de vecteurs $$\overrightarrow{V}$$ dans le système de coordonnées donné par $$\Phi$$. Il faut bien noter que ces composantes dépendent du choix de coordonnées. Le champ de vecteurs $$\overrightarrow{V}$$, lui, est l'objet géométrique : c'est la flèche attachée à chaque point.

En notation matricielle, on note $$\overrightarrow{V}_{\Phi}(q) = \begin{pmatrix} V_{\Phi}^1(q) \\ \vdots \\ V_{\Phi}^N(q) \end{pmatrix}$$ la colonne des composantes. Cette colonne de composante représente l'objet géométrique $$\overrightarrow{V}(p)$$ et y est reliée par 

$$\overrightarrow{V}(p) = \mathrm{d} \Phi(q) \cdot \Big( \overrightarrow{V}_{\Phi}(q) \Big).$$

Cette relation nous dit que pour obtenir les composantes du champ de vecteurs dans les coordonnées $$\Phi$$, on évalue d'abord le champ au point physique $$p=\Phi(q)$$, puis on exprime le vecteur obtenu dans le repère engendré par les coordonnées.
