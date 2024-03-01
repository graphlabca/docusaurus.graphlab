# Graphic Lab Web Services Documentation Node

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

Compiled by Senih Ucar

# Start Docker Service Script

This script is used to start Docker Compose services based on the provided service name or numerical option.

## Usage

### Running the Script

Make sure you have Docker Compose installed on your system before running this script.

To start the server, execute the `start_docker_service` script with the desired service name or numerical option as follows:

```bash
./start_server [option]
```
Options
    1 or caddy: Starts the Caddy service.
    2 or serve: Starts the Serve service.
    3 or dev: Starts the Dev service.

You can provide the option as a numerical value or the name of the service itself.

```bash
./start_server dev
```

This command will start the Caddy service using Docker Compose.

## Dockerfile Stages

The Dockerfile used by this script is broken up into multiple stages depending on the target. Here are the stages explained:

    Stage 1: Base: This stage is used by all targets. It pulls a base image, enables corepack, and sets the working directory.
    Stage 2a: Dev: This stage is used by the dev target. It installs the dependencies and starts the start process.
    Stage 2b: Build: This stage is used by the serve and caddy targets. It installs the dependencies and builds the site.
    Stage 3a: Serve: This stage is used by the serve target. It copies the site from the build stage and starts the serve process.
    Stage 3b: Caddy: This stage is used by the caddy target. It copies the site from the build stage and starts a Caddy webserver with optional automatic TLS.

Feel free to modify the docker-compose files to suit your specific environment or service configurations.
