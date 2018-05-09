---
layout: post
title: Remove Ad in Free Sport Live Stream
date: 2018-04-27
tag: [hack, sport]
---

I like watching English Premier League soccer on weekend mornings. Because I don't have cable and I don't want to pay for online sport channel, I usually go to the free live steam websites to watch soccer games. While the free live stream websites do provide you live streams, a lot of annoying Ads will be placed in the middle of the stream window to block a big part of the stream, and these suckers are often cannot be closed.

Here is my trick to get rid of them, as long as the Ads are not embeded into the steam video. You should be able to get rid of them if you are using browser like Chrome, maybe Firefox will work too.

---

Follow the steps (in Chrome):

1. Open the live stream page with Chrome.
2. Right click on the streaming page.
3. Select **Inspect**, Chrome developer tools window will show up in your browser.

    ![ad-removal-1]({{site.url}}/assets/img/post/2018-04-27-ad-removal-1.png)

4. Go to the developer tools window, find **elements** tap on the very top, and select.
5. Now, a boat load of html code shows up. Don't panic, stay calm. We are almost there.
6. You will see sections of the web page are highlighted as you place the pointer on the code blocks. Keep moving until the **Ad** is highlighted. Sometime you need to click on the little triangle to expand the code block and search for the code block for the **Ad**.
7. Right click on the **Ad** html code section, select **hide element**.

    ![ad-removal-2]({{site.url}}/assets/img/post/2018-04-27-ad-removal-2.png)

8. **BOOM!!! The Ad is gone!!!**.

    ![ad-removal-3]({{site.url}}/assets/img/post/2018-04-27-ad-removal-3.png)

9. Repeat 6 and 7 until all Ads are gone.

---

For most Ads, AdBlock extensions can handle them, but there are always some Ads cannot be blocked.

This hack may not be new to some people. I just discovered it recently and wanted to share with people who watch free sports livestream. This hack works on my favorite soccer streaming website. The only problem I have is I cannot enlarge the stream into full screen, and this may just be a problem of the web player. Also, I tried to find the live steam video url, and use VLC player to open and stream that url, but I coun't find the right url. It would be much better to watch the game on VLC player.

I will keep searching for better hacks for better viewing experience. For now, let's just enjoy the games.