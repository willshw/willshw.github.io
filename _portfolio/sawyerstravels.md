---
layout: post
title: Sawyer's Travels
img: "assets/img/portfolio/sawyerstravels_img_icon.jpg"
feature-img: "assets/img/portfolio/maze_sol.png"
feature-vid: "https://www.youtube.com/embed/YX71EugPKcU?rel=0"
date: 2017-12-06
tags: [Class Project, Portfolio, MSR, Robotics, Northwestern University]
---

### About
**[Sawyer's Travels][SAWYERS_GIT]** was one of the final projects of Northwestern University's [ME 495: Embedded Systems in Robotics][ME495] in Fall 2017. The goal of this project was to write a [ROS][ROS] program for [Sawyer][SAWYER] to navigate a ball through a labyrinth using vision feedback.

The [ROS][ROS] program written in this project included three major parts, *computer vision*, *path planning*, and *robot control*. At first, *computer vision* part of the program took care of extracting maze, ball tracking and final goal recognition. With all the vision information, then *path planning* program could solve for a global path plan to reach goal and dynamically solve for local path plans when the ball drifts off the global path plan. Finally, *robot control* program implemented PID controller on both joint velocity control and joint position control of the robot to manipulate the end effector to control the movement of the ball.

In this project, I was responsible for writing the control program. It was my first exposure to [ROS][ROS] and [Sawyer][SAWYER] robot.

**For more details, please view the [README and source code][SAWYERS_GIT] of this project on Github**.

***
Credit: Mazes were generated by [Maze Generator][MG].

***
[ME495]: http://www.mccormick.northwestern.edu/mechanical/courses/descriptions/495-embedded-systems-in-robotics.html
[ROS]: https://en.wikipedia.org/wiki/Robot_Operating_System
[SAWYER]: http://www.rethinkrobotics.com/sawyer/
[SAWYERS_GIT]: https://github.com/anapervan/Sawyers-Travels
[MG]: http://www.mazegenerator.net/