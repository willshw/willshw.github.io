---
layout: post
title: Visual Servoing of Objects without Object Models
# img: "assets/img/portfolio/vhc-icon.jpg"
# feature-img: "assets/img/portfolio/vhc-feature-camera-array.jpg"
# feature-vid: "https://www.youtube.com/embed/dYVtsQsaA-g?rel=0"
date: 2018-06-13
tags: [Final Project, Portfolio, Visual Servoing, Grasping, ROS, Kinematics, Control]
---

## About

This is my MSR program's capstone project with [Prof. Argall][Argall]'s research lab at [Shirley Ryan AbilityLab][SRALAB]. The goal of this project is to build a ROS package that uses visual servoing technique and RGBD sensor to guide robotic arm to grasp an object without prior knowledge of the object (geometry model of the object). The ROS package is designed to be generic so it can be easily used for different type of robotic arms.

## Challenges and Applications

The challenges this project will encounter includes a robust visual servoing control, point cloud processing on objects, grasp point generation, etc. Since the project aims at achieving grasping without a model, the problem just became much more difficult.

If we want to integrate robots into our daily life to work efficiently around humans, grasping a wide range of object is a task they must master. While grasping is an easy task for humans, it takes quite a bit of effort for a robot to figure out how to grasp an object and pick up an object successfully. A satisfying result of this project can benefit robot applications like factor/warehouse oject sorting, personal assistant robot and home robots where manipulation tasks are required.

## Current Progress

By 06-14-2018, a GitHub repository has been created with working position based visual servoing code.

## What's Coming Up Next

1. Joint limit and singularity avoidance on position based visual servoing
2. Image base visual servoing
3. Visual servoing using RGBD camera
4. Visual servoing on object with known model
5. Visual servoing on object with unknown model


## [Github][ArmVS]

***
[ArmVS]: https://github.com/willshw/ArmVS
[Argall]: http://users.eecs.northwestern.edu/~argall/
[SRALAB]: https://www.sralab.org/
