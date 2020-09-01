---
layout: post
title: Welcome to the Sleeping Giants!
date: 2020-09-01T16:59:44.233Z
author: Epos
categories:
  - blog
img: invitebg-web.png
---
# Who are we?

The Sleeping Giants never sleep! Busy streaming regularly on Twitch, designing graphics, making music, or just playing games with good company, SG is a community of all talents. We support each other by inviting self-promo, community movie nights, and all forms of positive vibes. You will easily find members that match your vibe within diverse backgrounds. Our community members often find themselves in a family at SGeSports. Our teams are still growing, so check out the [about](https://www.sgesports.club/about/) page for current information!

# What can you expect from SG?

## Community

Our community is always creating new content! From short clips to marathon streams, you and your contributions may be featured with SG. We may even ask members for testimonials to feature on our site. Everyone serves an important role.

## Giveaways

Your activity can earn you games! SG loves challenges, and small competitions may pop at any time for members to win Steam games. Challenges may be skill-based, activity-based, or random selection!

## Announcements

Keep in touch with our team updates and community changes! We are constantly adapting to keep the server interesting and promote involvement from all members.

## How can I learn more?

Join our community! We encourage suggestions and contributors to help our growth and positivity. Keep an eye out for blog updates for our current events.
<h1>
{% for network in site.social %}
    <a href="{{ network.url }}" class="btn-social btn-outline">
        <i class="{{ network.title }}" aria-hidden="true"></i>
        <span class="sr-only">{{network.title}}</span>
    </a>
{% endfor %}
</h1>