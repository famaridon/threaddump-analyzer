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
  * [Spotify threaddump-analyzer](https://spotify.github.io/threaddump-analyzer/)
    * It's a very fast tool but don't support multiple files. 
    * It's hard to read result with long thread dump.
  * 

## Features

* Parse thread dump files 
* Display multiple thread dump in merged view
* Navigate to thread 
* Navigate to lock report (TODO)
 * display all thread waiting for this lock
 * display lock owner
 * display if lock is present in other threaddump
* Implement PWA (Progressive Web Apps) to be available offline

## Development

### Prerequisites

All version are only for indication of my current environment. 

* [NodeJs 9.5.0 +](https://nodejs.org/en/download/current/)
* [Angular CLI 6.0.1 +](https://github.com/angular/angular-cli)
* [Yarn 1.6.0 +](https://yarnpkg.com/en/docs/install#windows-stable)

### Build and start 
Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Authors

* **[Florent Amaridon](https://github.com/famaridon)**

See also the list of [contributors](https://github.com/famaridon/threaddump-analyzer/graphs/contributors) who participated in this project.

## License

This project is licensed under the LGPLv3.0 License - see the [LICENSE.md](LICENSE.md) file for details