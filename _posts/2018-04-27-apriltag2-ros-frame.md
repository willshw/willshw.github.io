---
layout: post
title: AprilTag Frame Transforms
date: 2018-04-27
tag: [ROS, AprilTag, tf]
---

In recent work, I used the [**apriltags2_ros**](https://github.com/dmalyuta/apriltags2_ros) ros package for apriltag detection and post estimation. The package is very easy to setup and use; it works great for detecting tags or tag bundles and getting the transform between the camera and the tag on tag bundle.

In my application, I had a camera attached to a robot arm, and the camera pointed to the AprilTags. With the **apriltag2_ros** package, I can easily lookup the transform from tag to the camera, and tag to the baselink of the robot.

When the tf was initially setup from the tag to the baselink of the robot, the tag to baselink transform was not correct. The transform showed the tag had movements in x-axis and y-axis but there was only y-axis movement. In rviz, I noticed that the frame of the robot's end effector didn't align with the camera frame (they had a 90 degree difference around the z-axis), so I applied a static transform to tf to fix the problem.

The AprilTag frame and camera frame are illustrated as below:
(This should apply to all apriltags. Origin locates at the first pixel of the image sensor; it follows the convention of image coordinate.)

![frame-illustration]({{site.url}}/assets/img/post/2018-04-27-april-tag.png)

The lesson here is to make sure you know the frame orientation of your camera and tag when using packages like **apriltag2_ros**, especially when the camera or tag needs to be attached to other tf nodes.

**UPDATE 12/22/2018:**
The left handed camera frame had been corrected. Now it's right handed and fixed to correct location.