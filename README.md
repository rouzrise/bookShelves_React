# MyReads Project
---

## MyReads Project Overview
MyReads is a project completed within Udacity Front-End Web Developer Nanodegree Program. 
This is an application that allows you to select and categorize books that you have read, are currently reading, or want to read.

## How to start

To start using App git clone or download it from [github](https://github.com/rouzrise/bookShelves_React.git).

After cloning or downloading the App - `cd` to the folder in Terminal.
Be sure you have React installed locally and globally (also you'll need 'react-router-dom' and 'prop-types' installed).

If you are not sure - just run 
`npm i --save prop-types react react-dom react-router-dom` and `npm i --save-dev react-scripts`

After that run `npm start` to open the Browser tab with working App.

## What You can do with the App

#### Search for Books 
Click '+' button in the right low corner and go to the search page. Search for the book you want by typing in the searchbox.

#### Put the book to the shelf
After searching you can add book to the shelf you want.
There are three shelves:
* Currently Reading
* Want to Read
* Read

__NOTE__: If book is on the shelf - select sign will be orange. If you haven't put the book to any shelf yet - the select sign will be blue.

#### Look at Book structure at Main page
On the main page of the App you can see all the Books you marked as Currently Reading, Want to Read or Read on the corresponding shelves.

#### Move book from one shelf to another
If you want - you can move the book between shelves. Just click the select sign in the low right corner of each book to choose the self.

#### Rate book
You can set rating for any book. (Please note - the rating won't be kept after page refresh).


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## License

The content of this repository is licensed under a [Creative Commons Attribution License](https://creativecommons.org/licenses/by/3.0/us/) 
