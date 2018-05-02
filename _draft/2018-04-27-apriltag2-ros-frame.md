---
layout: post
title: AprilTag frame transforms
date: 2018-04-27
tags: [ROS] [AprilTag] [tf]
---

#### Be Careful with the Frame Orientations

In recent work, I used the [**apriltags2_ros**](https://github.com/dmalyuta/apriltags2_ros) ros package for apriltag detection and post estimation. The packages is very easy to setup and use; it works great on detecting tags or tag bundles and getting the transform between the camera and the tag on tag bundle.

In my application, I have a camera attached to a robot arm, and the camera points to the AprilTags. With the **apriltag2_ros** package, I can easily lookup the transform from tag to camera, and tag to the baselink of the robot.

When the tf was first setup from the tag to the baselink of robot, the tag to baselink transform was not correct. The transform showed the tag had movements in x and y axes but there was only y axis movement. In rviz, I noticed that the frame of the robot's end effector didn't align with the camera frame (they had a 90 degree difference around z-axis), so I applied a static transform to tf to fix the problem.

The AprilTag frame is illustrated as below:
(This should apply to all apriltags)

The camera frame is illustrated as below:
(Origin locates at the first pixel of image sensor. Classic image coordinate.)


The lesson here is to make sure you know the frame orientation of your camera and tag when using packages like **apriltag2_ros**, espetially when the camera or tag need to be attached to other tf nodes.