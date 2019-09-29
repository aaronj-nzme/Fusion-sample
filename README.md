# Fusion-sample 🎉🎉🎉

## Get start🥰🥰🥰
```
git clone https://github.com/Nealyang/React-Express-Blog-Demo.git # clone repo
npm install # install dependencies
fusion start / fusion daemon 👍👍👍 #run fusion
```
## Tutorial ⚡️️️️️⚡️️️️️⚡️️️️️

2. [Cearting a Feature Component](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/creating-feature-component.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/2-creating-feature-component)
3. [Creating a Layout Component](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/creating-layout-component.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/3-creating-layout-component)
4. [Creating a Chain Component](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/creating-chain-component.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/4-creating-chain-component)
5. [Event Handling and Interaction](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/event-handling-interaction.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/5-event-handling-and-interaction)
6. [Defining a Content Source](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/defining-content-source.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/6-defining-content-source)
7. [Using Environment Variables and "Secrets"](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/using-environment-secrets.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/7-using-environment-variables)
8. [Using the Consumer Higher-Order Function](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/using-consumer-function.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/8-using-consumer-hoc-function)
9. [Using a GraphQL Schema](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/using-graphql-schema.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/9-using-GraphQL-shcema)
10. [Fetching Content](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/fetching-content.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/10-fetching-content)
11. [Dynamically Configuring Content](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/dynamically-configuring-content.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/11-dynamically-configuring-content)
12. [Using Site Properties](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/using-site-properties.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/12-using-site-properties)
13. [Adding Styling to Components](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/adding-styling.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/13-adding-styling-to-component)
14. [Adding Custom Fields to Components](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/adding-custom-fields.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/14-adding-custom-fields)
15. [Working with Display Properties](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/working-with-display-properties.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/15-woring-with-display-properties)
16. [Isomorphic vs. Server vs. SPA rendering](https://github.com/aaronj-nzme/Fusion-sample/tree/16-isomorphic-vs-server-spa) 👉🏻 [Repo Tag](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/isomorphic-server-spa-rendering.md)
17. [Using Third-Party Libraries](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/using-third-party-libraries.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/17-using-third-party-libraries)
18. [Messaging Between Components](https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/messaging-between-components.md) 👉🏻 [Repo Tag](https://github.com/aaronj-nzme/Fusion-sample/tree/18-messaging-between-components)

## Helpful Commands 🍻🍻🍻

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