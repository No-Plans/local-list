# Local List
Honoring the list text file as an indestructible information vector, I'm trying to build the simplest way to update a text file and publish it online with the help of Dat and Beaker Browser. No terminal, no FTP, just write and save. The goal is to use a basic local file for storing knowledge and automatically distribute via p2p and https for backup and access.  

<img src="https://github.com/No-Plans/local-list/blob/master/examples/save-list.gif?raw=true" min-width ="300" max-width="800" height="auto">

Cloud services change business model, favorite Netflix movies and streaming tracks disappear, Filmstruck closes, Amazon wishlist serves you ads, Beaker could be gone. Keeping a few copies of a file is a safe practise.

## Release note
The script is dirty, contributions and tips are welcome.

## First time install
1. Download the folder in your machine where you want to store the list. 
We're using the Dat protocol with Beaker Browser to publish it online and making it accessible from other machines.
2. Download and install [Beaker](https://beakerbrowser.com).
3. Open Beaker and in the toolbar click > 'create new' > 'from folder'. Pick your folder.
4. The first time you have to add a name and click 'Review' and then 'Publish all'. Then go to 'Settings' and disable preview mode to automatically publish your list from now on.
5. Optional: if you want the list to be accessible all the time and from any browser you need a https address. You can mirror your dat address with [Hashbase](https://hashbase.io), 1 minute setup and free.

## Usage
1. In your local folder open list.csv, add/edit your entries. Columns are separated by commas. 
2. Save file: that's it, the list is automatically updated on the dat and https addresses.

## Example

Films:
- https://films.hashbase.io
- dat://1145fb9767abe0e3f4796c504cf6f230a1abfa38dedcfc0cad8f256f4d78cfd9


## Next steps / wishlist
- [ ] cleaning
- [ ] templates for .txt and markdown.
- [ ] waiting for Beaker to support hyperdb to be able to edit the list remotely and edit collaboratively.
- [ ] export [Are.na](https://are.na) channel to local list (maybe with [Dropout](https://github.com/jondashkyle/dropout)?)
