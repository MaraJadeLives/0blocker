# 0blocker
Trying to fix Firefox on Linux's 0.0.0.0 bug because the devs haven't yet.
Coding was done by ChatGPT because I don't have the time to learn to make Firefox extensions, but I did the art myself in GIMP.

To use:
- Download all files besides the readme.
- Dump them in a folder somewhere together.
- go to about:debugging#/runtime/this-firefox & select manifest.json

  It should load correctly, but I made this for me.
  About the bug
  - https://github.com/whatwg/fetch/pull/1763
  - https://www.oligo.security/blog/0-0-0-0-day-exploiting-localhost-apis-from-the-browser
