---
layout: post
title: Kinodynamic Planning
img: "assets/img/portfolio/submarine.png"
feature-img: "assets/img/pexels/search-map.jpeg"
date: 2018-03-23
tags: [Class Project, Winter Project, Motion Planning, Portfolio, MSR, Robotics, Northwestern University]
---

## About

**Kinodynamic Motion Planning** was my projects in winter quarter. The goal of this project was to learn and explore motion planning, and implement a motion planning program. The program uses sampling-based method to generate a motion plan for a dynamic vehicle.

## Overview

In this project, I aimed at reproducing the result from a research paper, [Anytime computation of time-optimal off-road vehicle maneuvers
using the RRT*][OFFROAD_RRT_STAR] from MIT. Authors of the paper proposed a solution to generate a kinodynamic motion plan for off-road vehicle to drive through tight corners at high speed to achieve time-optimality. In the paper, authors employed a full dynamic model of a car which had taken the tire-road contact into account. With the full dynamic model, RRT-Star can find a plan that satisfy the vehicle dynamics. At extreme cases, motion plans for the vehicle is to slide from a state to another state.

## Vehicle Dynamics Model

Vehicle dynamics model employed in this project is called bicycle model, and Pacejka's Magic Formula was used for tire friction. Vehicle model has 8 states ($x$, $\dot{x}$, $y$, $\dot{y}$, $\Psi$, $\dot{\Psi}$, $\omega_F$, $\omega_R$), and 3 input value ($T_F$, $T_R$, $\delta$)

Here is an illustration of the bicycle model:

<p align="center">
<img src="../assets/img/portfolio/kino-bicycle-model.png" width="80%"></p>
<!-- ![BICYCLE-MODEL](../assets/img/portfolio/bicycle-model.png=100x) -->

### Notations:

$x$, $y$, $\dot{x}$, $\dot{y}$, $\ddot{x}$, $\ddot{y}$: Position, velocity, acceleration at the center of the vehicle

$m$: Mass of vehicle

$I_z$: Inertia of vehicle

$I_i$, $r_i$, $\omega_i$, $i =(F, R)$: Moment of inertia, radius, angular velocity of front and rear wheels

$f_{ij}$, $i=(F, R), j=(x, y)$: Longitudinal and lateral front and rear tire forces:

$\Psi$: Vehicle orientation/ yaw angle

$\beta$: Slip angle

$T_i$, $i=(F, R)$: Torque input at front and rear wheels

$\delta$: Steering angle input

### Equation of motion:

$m\ddot{x} = f_{Fx}cos(\Psi + \delta) - f_{Fy}sin(\Psi + \delta) + f_{Rx}cos(\Psi) - f_{Ry}sin(\Psi)$

$m\ddot{y} = f_{Fx}sin(\Psi + \delta) + f_{Fy}cos(\Psi + \delta) + f_{Rx}sin(\Psi) + f_{Ry}cos(\Psi)$

$I_z\ddot{\Psi} = (f_{Fy}cos(\delta) + f_{Fx}sin(\delta))l_F - f_{Ry}l_R$

$I_F\dot{\omega}_ F = T_F - f_{Fx}r_F$

$I_R\dot{\omega}_ R = T_R - f_{Rx}r_R$

Tire force $f_{ij}$ depends on normal force $f_z$ and friction coefficient $\mu_{ij}$ determined by **Pacejka's Magic Formula**:

$f_{ij} = \mu_{ij}f_{iz} $  $(i = F,R, j=x,y)$

$\mu_{ij} = -\frac{s_{ij}}{s_i}\mu_i(s_i) $  $(i = F,R, j=x,y)$

$\mu_i(s_i) = D_i sin(C_i arctan(B_i s_i)) $   $(i = F,R)$

For more details about the vehicle dynamic model, please refer to [Anytime computation of time-optimal off-road vehicle maneuvers
using the RRT*][OFFROAD_RRT_STAR]

## RRT-Star

RRT-Star is a departure from the RRT. RRT-Star has modified the extend procedure which allows it to replan the nodes close to the newly inserted one. This procedure will look for the nodes that will have lower cost to reach from root after rewiring this node to the newly inserted one. This procedure guarantee  the sampling-based planner can find an solution and the solution is asymptotically optimal.

RRT-Star Algorithm:
<p align="center">
<img src="../assets/img/portfolio/kino-rrt-star-algo-1.png" width="60%">
<img src="../assets/img/portfolio/kino-rrt-star-algo-2.png" width="60%"></p>
<!-- ![RRT-STAR-ALGO-1](../assets/img/portfolio/rrt-star-1.png) -->
<!-- ![RRT-STAR-ALGO-2](../assets/img/portfolio/rrt-star-2.png) -->

RRT-Star with 10K Node:
<p align="center">
<img src="../assets/img/portfolio/kino-n-rrt-star.png" width="80%"></p>

## Planning Space

The full dynamic model of the car has 8 DOF ($x$, $\dot{x}$, $y$, $\dot{y}$, $\Psi$, $\dot{\Psi}$, $\omega_F$, $\omega_R$). Keeping track of 8 dimensional state space is rather complicated. To deal with this problem, planner only plans in a 4D task space in $x$, $y$, $V$($\sqrt{\dot{x}^2+\dot{y}^2}$), $\Psi$assuming the there is an mapping of the free space in 8 dimension state space to 4 dimension task space.

## Control

When solving for the control input needed for connecting current state and next state, a constant control was applied to the system. To solve for control, the vehicle dynamic equations were integrate to certain amount of time with know initial conditions.

more to type

<p align="center">
<img src="../assets/img/portfolio/kino-circle.gif" width="60%">
<img src="../assets/img/portfolio/kino-snake-manu.gif" width="60%"></p>
<!--
![KINO-CIRCLE](../assets/img/portfolio/kino-circle.gif)
![KINO-SNAKE ](../assets/img/portfolio/snake-manu.gif) -->

## Conclusion and Future Work

A motion planning problem is rather complicated even the planning scenario is simple. In this project, planner suffers from the performance issue when searching for a set of constant control to connect two states. A fast numerical algorithm must need to implemented to improvement the state connection calculation time. In the future, the vehicle geometry also need to be taken into account for more realistic collision detection.

more to type


## Reference

1. [hwan Jeon, Jeong, Sertac Karaman, and Emilio Frazzoli. "Anytime computation of time-optimal off-road vehicle maneuvers using the RRT." Decision and Control and European Control Conference (CDC-ECC), 2011 50th IEEE Conference on. IEEE, 2011.][OFFROAD_RRT_STAR]
2. [Webb, Dustin J., and Jur van den Berg. "Kinodynamic RRT*: Asymptotically optimal motion planning for robots with linear dynamics." Robotics and Automation (ICRA), 2013 IEEE International Conference on. IEEE, 2013.][ROBOT_LINEAR_DYNAMICS]
3. [LaValle, Steven M., and James J. Kuffner Jr. "Randomized kinodynamic planning." The international journal of robotics research 20.5 (2001): 378-400.][RANDOMIZED_KINO_PLANNING]


[RANDOMIZED_KINO_PLANNING]: http://msl.cs.uiuc.edu/~lavalle/papers/LavKuf01b.pdf
[ROBOT_LINEAR_DYNAMICS]: http://arl.cs.utah.edu/pubs/ICRA2013-1.pdf
[OFFROAD_RRT_STAR]: https://dspace.mit.edu/openaccess-disseminate/1721.1/81445
