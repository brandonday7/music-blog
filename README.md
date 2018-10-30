# MUSIC BLOG REACT FRONTEND

### Welcome to the Music Blog Frontend! This application runs alongside the [MUSIC BLOG RAILS BACKEND](https://github.com/brandonday7/music-blog-api) to provide you with your very own music blog. If you haven't set up your backend yet, do that first so this app has data to render!

[Heroku example](http://brandonday-music-blog.herokuapp.com/) (Free dyno server may take up to a minute to boot up)

#### The frontend is written in ReactJS using React Apollo for data fetching and caching.

#### In this application, users can view top tracks posted by others, and contribute to the page themselves! Simply click the nav bar to ADD A TRACK, and a dialog box will open. Title, describe, and tag your post with a track and artist. Don't forget to upload an album art image reference too! When you're done, click create and Apollo takes care of the rest! If you don't like what you see, feel free to delete any post by clicking the X in the top right corner.

#### Here's how to get set up:

1. Clone repo:

```
git clone git@github.com:brandonday7/music-blog.git
```

2. Install dependencies:

```
npm install
```

3. Create environment variables
   Create a file under /blog called .env
   Paste this into it:

```
REACT_APP_API="localhost:3001"
```

4. Start server

```
npm start
```

#### Now you're all set up! Start posting!
