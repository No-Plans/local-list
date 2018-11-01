# Local List
Honoring the list text file as an indestructible information vector, I'm trying to build the simplest way to save a text file and publish it online with the help of Dat and Beaker Browser. The goal is to use a basic local file for storing your knowledge (no terminal, just write and save) and automatically distribute it as decentralized backup.  

This version has multiple columns and the list can be ordered by column entries.

Cloud services change business model, favorite Netflix movies and streaming tracks disappear, Filmstruck closes, Amazon wishlist serves you ads, Beaker could die. Keeping a few copies of a file is a safe excecise.

<img align="center" src=".gif" width="250" height="auto">

## Release note
The script is dirty and work in progress, contributions and tips are welcome.

## First time install
1. Download local-list and place it in the folder you want to store the list. 
We're using the Dat protocol with Beaker Browser to publish it online and making it accessible from other machines.
2. Download and install [Beaker] (https://beakerbrowser.com).
3. Open Beaker and on the toolbar click > create new > from folder. Pick your folder.
4. The first you have to add a name and click 'Review' and then 'Publish all'. Then go to 'Settings' and disable preview mode to automatically publish your list from now on.

<img align="center" src=".gif" width="250" height="auto">

5. Optional: if you want the list to be accessible all the time and from any browser you need a https address. You can mirror your dat address with [Hashbase] (https://hashbase.io) quickly and for free.

## Use
1. In your local folder open list.csv, add/edit your list. Column items need to be separated by commas. 
2. Save: that's it, it will automatically update the list on the dat and https addresses.

<img align="center" src=".gif" width="250" height="auto">

## Example

Films list:
dat://1145fb9767abe0e3f4796c504cf6f230a1abfa38dedcfc0cad8f256f4d78cfd9
https://films.hashbase.io


## Next steps / wishlist
- cleaning
- other templates for .txt and markdown formats.
- waiting for Beaker to support hyperdb to be able to edit the list remotely and collaborative editing.
- export [Are.na] (https://are.na)channel to the local list (maybe with @jondashkyle's [Dropout] (https://github.com/jondashkyle/dropout)?)

Contributions are more than welcome

