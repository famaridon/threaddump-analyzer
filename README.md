# ThreaddumpAnalyzer

This project aim to help java developers to read multiple threaddump files.

It's really simple to read short threaddump with your own eyes. 
But when you have a long threaddump and / or multiple files it become really hard for human brain to navigate between threads and files. 
This tool aim to build user friendly interface to help developers brain :smirk:.

## Build status 

master : [![Build Status](https://travis-ci.org/famaridon/threaddump-analyzer.svg?branch=master)](https://travis-ci.org/famaridon/threaddump-analyzer)
develop : [![Build Status](https://travis-ci.org/famaridon/threaddump-analyzer.svg?branch=develop)](https://travis-ci.org/famaridon/threaddump-analyzer)

## Demo

Last stable version is available here : https://famaridon.github.io/threaddump-analyzer/

## Why this project ?

I try a lot of tools :
  * [Samurai](http://samuraism.jp/samurai/en/index.html) my favorite tool
    * Really good view and navigation
    * Many crashes and ui latencies 
    
  * [Spotify threaddump-analyzer](https://spotify.github.io/threaddump-analyzer/)
    * It's a very fast tool but don't support multiple files. 
    * It's hard to read result with long thread dump.
    
  * [fastthread.io](http://fastthread.io/)
    * need to upload my threaddump to an untrusted server.
    * never get a result.

## Features

* Parse thread dump files 
* Display multiple thread dump in merged view
* Navigate to thread 
* Navigate to lock report
 * display all thread waiting for this lock
 * display lock owner
 * display if lock is present in other threaddump
* Implement PWA (Progressive Web Apps) to be available offline

## Development

### Prerequisites

All version are only for indication of my current environment. 

* [NodeJs 10.2.1](https://nodejs.org/en/download/current/)
* [Angular CLI 6.0.1 +](https://github.com/angular/angular-cli)
* [Yarn 1.6.0 +](https://yarnpkg.com/en/docs/install#windows-stable)

### Build and start 
Run `yarn start` for a dev server. Open a browser at http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Build for production
Run `yarn build` will build application in dist folder.

All is build to run in a sub path /threaddump-analyzer this is to simplify gh-page deployment. 
If you need to test production environment on localhost run `yarn start sw-start` and open http://localhost:8080/threaddump-analyzer


## Authors

* **[Florent Amaridon](https://github.com/famaridon)**

See also the list of [contributors](https://github.com/famaridon/threaddump-analyzer/graphs/contributors) who participated in this project.

## License

This project is licensed under the LGPLv3.0 License - see the [LICENSE.md](LICENSE.md) file for details
