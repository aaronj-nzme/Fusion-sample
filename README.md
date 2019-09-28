# Fusion-sample
Sample Fusion Pagebuilder



## Helpful Commands

### Starting and stopping Docker
```python
npx fusion start # Builds and starts all containers. You can add the `--no-admin` flag to run the command without the PageBuilder Admin
npx fusion daemon # Runs the application in daemon mode (i.e. in the background)
npx fusion stop # Stops running containers without removing them
npx fusion down # Stops and removes all running containers
```
### Developing
```python
npx fusion rebuild # Manually rebuilds the webpack bundle (good to run when code changes aren't reflected)
npx fusion verify # This will run Webpack on your source code to see if there are any errors in the build.
```
### Keeping up to date
```python
docker-compose pull # Pulls the latest Docker images running Fusion. This command gets run whenever you invoke the `start` command, but you can also run it manually
npx fusion version # This will tell you the version of the Fusion CLI you are using. This is *NOT* the same thing as the Fusion engine version you are running! For that info, go to `http://localhost/release` while running Fusion.
```
### Cleaning up Docker artifacts
```python
npx fusion cleanContainers # Removes all exited containers
npx fusion cleanImages # Removes all unused images
npx fusion cleanNetworks # Prunes all unused networks
npx fusion cleanVolumes # Removes docker volumes
npx fusion nuke # Runs all of the 'clean' commands above to ensure no Docker artifacts remain
```
### Exporting data
```python
npx fusion dump # Creates a timestamped DB export in .tar.gz format in the ./data/dumps directory. Docker must be running.
npx fusion zip # Creates a timestamped zip of the Feature Pack (without node_modules) inside the ./dist directory
```