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

$$\vv{V}(x,y,z) = V_x(x,y,z) \vv{e_x} + V_y(x,y,z) \vv{e_y} + V_z(x,y,z) \vv{e_z},$$

où $$\vv{e_x}, \vv{e_y}, \vv{e_z}$$ désignent les directions cartésiennes usuelles.
