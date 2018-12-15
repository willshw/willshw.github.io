---
layout: post
title: Visual Servoing of Objects without Object Models
img: "assets/img/project/visual-servoing-icon.png"
# feature-img: "assets/img/project/vhc-feature-camera-array.jpg"
feature-vid: "https://www.youtube.com/embed/veAIuLdbgJU"
date: 2018-06-13
tags: [Final Project, Project, Visual Servoing, Grasping, ROS, Kinematics, Control, Point Cloud, PCL, RGBD, Depth Camera]
---

## About

This is my MSR program's capstone project with [Prof. Argall][Argall]'s research lab at [Shirley Ryan AbilityLab][SRALAB]. The goal of this project is to build a ROS package that uses visual servoing technique and RGBD sensor to guide robotic arm to a pre-grasp pose for grasping objects without prior knowledge of the objects (geometry model of the object). The ROS package is designed to be generic and modular so it can be easily used for different type of robotic arms.

## Challenges and Applications

The challenges this project will encounter includes a robust visual servoing control, point cloud processing on objects and computation for all previous components on limited computing power, etc. Since the project aims at achieving robust visual servoing without a model, the problem just became much more difficult.

If we want to integrate robots into our daily life to work efficiently around humans, grasping a wide range of object is a task they must master. However, a lot of the grasping would happend in scenarios where objects are dynamic before the grasp moment. Since robot need to track objects it has never seen (no prior knowledge about the object model), visual servoing can be difficult to implement on objects without known geometry.

While it is easy for humans to track the object and grasp it whether it's moving fast or moving slowly, it takes quite a bit of effort for a robot to figure out how to track an object it has never seen. A satisfying result of this project can benefit robot applications like human robot collaboration, personal assistant robot and home robots where manipulation tasks are required.

## Approach

This project combines object recognition/detection, object tracking, point cloud segmentation and point cloud pose estimation and position based visual servoing to achieve visual servoing on unknown objects. The whole structure of the object can be devided into four parts in high level:

1. Object Recognition and Tracking
2. Point Cloud Extraction
3. Point Cloud Pose Estimation
4. Posisiton Based Visual Servoing

### 1. Object Recognition and Tracking

This module handles a task finding the object of interest, keep track of this object and tell the extractor where the object is in the image space.

The way to achieve a robust tracking in the image space is to use object recognition algorithms like YOLO or alternatives to recognize the object of interest in the image and does it on every frame. Howevere, object recognition will often fail detecting object in some frames. We added a non-deeplearning type image tracker to locate the object when recognition fails. Whenever the object can be detected, image tracker will be reinitialized. The reinitialization of the image tracker also limit the drifting of the image tracker. The amalgamation of object recognition and tracking enables robust and accurate tracking. With a kalman filter implimented to predict object position in between frames, uninterrupted object location information can be send to point cloud extraction to remove irrelavent points in the raw point cloud.

### 2. Point Cloud Extraction

The data from RGBD sensor is structured which mean each point in the point cloud cooresponds to one pixel in the RGB image, and point cloud is organized in same fashion as the RGB image. With the structured point cloud, we can use the object location information and the size of boudning box region of the object to extract points from structured point cloud only based on x and y axis. Therefore we can have a point cloud of the object with only a few unwanted points which can be eliminate by simple segmentation.

### 3. Point Cloud Pose Estimation

At the begining of the visua servoing session, a point cloud template of the object need to be taken. In pose estimation, particle filter or ICP can be use. The algorithms use the template to match the extracted point cloud and calculate rigid transform. And pre-grasp pose can be set relative to the matched template.

### 4. Posisiton Based Visual Servoing

Since the pre-grasp pose has 6DOF which are the traslantions (x, y, z) and the rotations (roll, pitch, yaw), position based visual servoing technique can be apply here to guide a end effector frame on the robot arm to approach the pre-grasp pose.


## Implementation
Please see [Github][mfvs] for more detail

***
[mfvs]: https://github.com/willshw/mfvs
[Argall]: http://users.eecs.northwestern.edu/~argall/
[SRALAB]: https://www.sralab.org/
