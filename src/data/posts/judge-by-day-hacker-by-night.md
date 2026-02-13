# Judge by Day, Hacker by Night - How I Joined 2 Hackathons on the Same Day

The second Monday of February 2026 is a day I'll remember for a long time. I joined one hackathon as a judge and the other as a hacker - submitting my project just minutes before the deadline. How did it all happen? Before we get into it, let me give you some context.

## The Preface

For the past few months, I had promised myself not to take part in hackathons anymore. Don't get me wrong - they were always fun. The pressure, the rivalry, the chance to show my projects to the world and maybe even win some prizes. Hackathons gave me a playground to experiment with tech, validate ideas, and escape the boredom of daily life.

But with the rapid evolution of AI, the satisfaction of building something fast gradually faded. It became less about solving a complex task and more about prompting a machine. On one hand, AI brought a kind of democracy to hackathons - I started seeing less technical people joining and sometimes even winning. On the other hand, I wasn't sure how much came down to the team's skill and how much was just luck with AI agents. People also aren't as impressed as they used to be by what can be built in a short period of time, now that we have more builders than ever.

Good and bad sides, sure. But despite all of that, I still ended up joining a hackathon - not just one, but two on the very same day.

To be honest, I was involved in both events for longer than a single day, but Monday was the culmination. Let's start from the beginning.

## Part 1: The Judge

A year ago, in March 2025, I joined a hackathon called Experiment Day at ING. It was the first hackathon I participated in at work, and interestingly, it was a global event. Somehow I got approval to fly to Amsterdam and attend it directly from HQ.

The event lasted three days, and I didn't have any hope of winning. All I wanted was to experiment with ElevenLabs voice agents, which had just been published a few days before, and to play around with my robot dog, LazyDog. You might remember the project from [my YouTube channel](https://youtube.com/@arplearn) - if not, check it out below.

[![LazyDog: The WAVEGO Robot That's Anything But Lazy!](https://img.youtube.com/vi/2VGDe0nQBYM/maxresdefault.jpg)](https://www.youtube.com/watch?v=2VGDe0nQBYM)

At the time, my YouTube video about LazyDog was gaining traction and I'd been experimenting with different variations of the robot. But it was missing a practical application, and the sound was clunky, to say the least. I was using basic speech recognition with a TTS package running directly on the Raspberry Pi, so as you can imagine - it was very robotic and very laggy. Still, it gave the robot a kind of soul.

From the moment I saw ElevenLabs' voice agent work, I knew I wanted to try it with my robot. My colleague who joined the event was really into yoga, so we thought - why not connect both worlds of robotics and yoga, with some AI on top?

That's how **YogiCorgi** came to life.

[![YogiCorgi - AI Yoga Robot Dog](https://img.youtube.com/vi/h1H0Wt9AboA/maxresdefault.jpg)](https://www.youtube.com/watch?v=h1H0Wt9AboA)

Going in, I didn't expect we'd have any chance. The hackathon was mainly about fintech and we were probably the only team with hardware. Our project had nothing to do with finance. But ING's approach was very open to experimentation, so we figured - why not just have some fun?

### The Technical Challenge

After the first day, we almost lost hope. The biggest problem was accurately estimating yoga poses. We ended up working in the hotel corridor, snapshotting poses and then adding margin thresholds for detection.

The second challenge was that ElevenLabs voice agents were still in their early stages - there was no way to inject text into an ongoing conversation, which broke our entire workflow. We needed to give the agent real-time data about whether you were exercising correctly, with tips on how to fix your pose. But you could only set the system prompt and initial message when spinning up a session - that was it.

By the end of the second day, we were running out of ideas. Then I came up with a workaround: what if we created **multiple sessions**?

Here's how it worked. You exercised in front of the camera - or rather, in front of the robot that was tracking your movement. If something was significantly wrong and persisted for more than three seconds, we'd spin up a new voice agent session with a different system prompt and initial message tailored to that specific mistake.

The trade-off was that it was a blocking session - we could only address one problem at a time. But the robot would speak to you about your mistake and suggest how to fix it. What was really cool was that you could not only get personalized voice feedback, but also engage in a conversation with the robot - asking for tips, tricks, and adjustments.

### The Surprise Win

On the third day, we submitted just a few hours before the deadline. To our big surprise, amid very strong competition, we won the **Grand Prize** - first place in a global (though internal) hackathon.

That win was probably the key experience at ING that helped me gain recognition, and it's what got me invited to join the judging team for the company's biggest hackathon of the year.

### Judging Day

Last year I also attended two hackathons that each claimed to be the biggest stationary on-site hackathon in Europe. One was the Big Berlin Hack with over 400 participants. The other was HackYeah in Poland with around 2,000 participants. Internally at ING, we had over 2000 participants - just to give you a sense of scale.

The challenge was to properly review all the projects. There were a few side quests I won't get into here, but it was an honor to be part of the judging team. Even having participated in probably over 50 hackathons across various countries, both on-site and online, this one was a first-class event that exceeded my expectations.

So on that particular Monday, I was excited and stressed. From early morning, I was on call, conducting the entire judging process. We wrapped up around 6 PM - with some bumps along the way, but everything went smoothly in the end.

With a few hours left in the day, I decided to finish another event that had started over a month earlier.

## Part 2: The Hacker

The other event was the **Gemini 3 Hackathon** by Google - and this time I was the participant, not the organizer. Being both in a single day, across two different events and two big companies, working with cutting-edge technology - that was a truly unique experience.

### The LazyDog Detour

When I first heard about the Gemini hackathon, even though I'd told myself I was done with hackathons, I figured - there's over a month to build and submit. Maybe I could just find a few evenings and weekends to build something.

My first idea was to implement the new Gemini Live API for spatial recognition and use it to move my robot around. Long story short, I spent about two weeks working on this with many tryouts, but it didn't work out the way I wanted. I even considered creating a custom robot for a Kickstarter project, or building an open-source framework connecting various robots to an open protocol - one that could handle different configurations like legs, wheels, or other locomotion types.

After two weeks, I gave up. I just didn't see the point.

### Finding the Right Idea

But the hackathon was still on my mind. Every weekend I thought - maybe I could build something and try my luck. I started asking friends who had cool projects and ideas. Some interesting conversations happened, but nobody was fully convinced to commit to the hackathon.

Around this time, I was reading a book called The Five by Tomasz Karwatka about building your own startup. One part especially stuck with me: **if you want to build your own business, you'd better solve your own problem first** - ideally something you're good at, something that gives you an unfair advantage.

So one weekend I sat down and started writing out what I like, what I don't like, what I'm good at, and what I'm bad at.

I realized that even though it might sound weird, I genuinely enjoy public speaking and pitching - even though it always scares me and requires preparation. I also had singing somewhere on my radar, though I'm a complete amateur at that.

My first idea was to build an app with Gemini that would give me a singing lesson experience, since I'd been taking vocal lessons the previous year. But after some initial prompting and brainstorming (I actually started in Claude, not even writing code - just sketching architecture), I realized it probably wasn't the right direction.

### The Birth of Rhetor.app

Then I remembered a discussion with friends whose startup I'd been helping. I'd offered to pitch their product, which reminded me of my own pitching experiences. I like pitching, but it's always stressful. My process usually looks like this: write down thoughts, prepare bullet points, sometimes create a presentation, then rehearse it in my head - all while trying to fit a tight time limit, often just 60 seconds.

The thing is, I never had much AI help with this process. Maybe for creating the presentation itself, but the rest was always on me. I could either pitch to a mirror or ask someone nearby for feedback.

Then it clicked: **what if I leveraged the Gemini Live API as a voice coach?** One that listens to me during a presentation, shows me a timer, and gives feedback - even in real time - about things like covered points, sentence structure, or filler words.

That's how **Rhetor.app** was born.

But I quickly realized that giving a good presentation isn't just about the content and time limit. It starts way before - with preparation. Physical preparation: warming up your voice, your tongue, your mouth for clear diction and voice control. Mental preparation: calming down and loosening up before you speak.

So I started building a **pitch academy** concept with multiple stages:

1. **Warm-up** - Calm down, exercise your voice, warm up your muscles, have a laugh before presenting
2. **Content prep** - Upload a PDF, jot down bullet points, or even interview with Gemini to prepare your talking points
3. **Delivery practice** - This is where the multimodal magic happens

For the delivery stage, I thought - why limit it to voice? Posture matters too. Remember [Straighty](https://straighty.app)? The same pose estimation approach could check your posture during the presentation. Eye contact tracking could flag when you're reading off a screen or turning your back to the audience.

And then it hit me: Gemini Live is multimodal. It handles not just voice but visuals too. So why not share your computer screen, letting the AI see which slide you're on? It could guide you through the presentation and analyze whether what you're saying matches what's on screen.

### The Last-Minute Sprint

The problem? I came up with this final vision on Sunday evening.

I started the actual implementation around 6 PM on Monday - right after finishing the judging duties. The ideas kept snowballing: Duolingo-like interactive lessons, dual-screen analysis, gamification. The scope quickly got out of hand and things started falling apart.

I ended up synchronizing the project with Google AI Studio to get more control over it, since the deployment was tricky. In AI Studio, I had access to a free-tier API running inside the platform, but on my local machine I had to use the API directly - one of several differences that caused headaches.

After a couple of hours, I managed to get a kind of acceptable version running locally, but then I needed to push it back to Google AI Studio. Here's my feedback for Google if anyone there is reading this: **I wish there was an option to sync your project back via Git**. Maybe I missed it, but I couldn't find one.

With the deadline at 2 AM - technically Tuesday, but who's counting - I only had a few hours to finish, publish, prepare the description, record the demo video, and submit.

Since there was no Git sync, and the project had grown way beyond the default AI Studio scaffold, I did the only thing I could think of: I copied and pasted everything. Removed all files from the AI Studio project, then copied over everything from my local version.

I was worried about dependencies, and sure enough - there were errors. But after a few prompts, the AI was able to repair the missing parts. I only had to set up the API key manually, which was also failing at first. I ended up looking at another example project - the one called "Live Maps" - to see how the API connection was implemented, then adapted my code accordingly.

The only thing left was recording the video. Ironically, I had literally no time to use my own pitch coaching tool to practice. I still managed to record a video while using the app, and it actually kind of helped - but it was my own fault for postponing everything.

Just a few minutes before 2 AM, the video was done, uploaded to YouTube, and I finally clicked the **Submit** button.

## Lessons Learned

A few takeaways, but the most crucial one is something almost trivially simple: **build the things you love and are interested in.**

For months, I'd been grinding - looking for B2B SaaS ideas that didn't interest me at all. My only drive was potential money and the fact that someone might actually need the tool. In the end, I failed badly. None of those apps worked out and I started feeling burnout. After so many years, the main reason I switched to tech was losing its meaning.

I even felt regretful for spending time on "cool apps I liked" instead of chasing boring B2B enterprise tools. But I was wrong.

Of course money and business matter. But after all the plastic trees around us, maybe it's really about those moments of joy and satisfaction when we work on something we find purpose in.

That's probably also why I kept changing ideas and couldn't commit - I was focusing on business value first. Instead, maybe we should think about what we like to do, what we want to do, and how we could fix our own problem first - and only later help others.

Especially during events like hackathons, where we don't have to follow strict tasks. Our only limitation is our own imagination.