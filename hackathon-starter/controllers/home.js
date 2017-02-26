/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

'use strict';

const async = require('async');
const ig = require('instagram-node').instagram();
const Twit = require('twit');

exports.scene = (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'instagram');
  ig.use({ client_id: process.env.INSTAGRAM_ID, client_secret: process.env.INSTAGRAM_SECRET });
  ig.use({ access_token: token.accessToken });

  async.parallel({
    searchByUsername: (done) => {
      ig.user_search('ianpetergreenburg', (err, users) => {
        done(err, users);
      });
    },
    searchByUserId: (done) => {
      ig.user('270705528', (err, user) => {
        done(err, user);
      });
    },
    myLikedMedia: (done) => {
      ig.user_self_liked((err, medias) => {
        done(err, medias);
      });
    },
    myRecentMedia: (done) => {
      ig.user_self_media_recent((err, medias) => {
        done(err, medias);
      });
    }
  }, (err, results) => {
    if (err) { return next(err); }
    res.render('scene', {
      title: 'Scene',
      usernames: results,
      userById: results.searchByUserId,
      myLikedMedia: results.myLikedMedia,
      myRecentMedia: results.myRecentMedia
    });
  });
};

exports.instagramData = (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'instagram');
  ig.use({ client_id: process.env.INSTAGRAM_ID, client_secret: process.env.INSTAGRAM_SECRET });
  ig.use({ access_token: token.accessToken });

  async.parallel({
    myRecentMedia: (done) => {
      ig.user_self_media_recent((err, medias) => {
        done(err, medias);
      });
    }
  }, (err, results) => {
    if (err) { return next(err); }
    res.send({ myRecentMedia: results.myRecentMedia });
  });
};

exports.twitterData = (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'twitter');
  const T = new Twit({
    consumer_key: process.env.TWITTER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token: token.accessToken,
    access_token_secret: token.tokenSecret
  });

  T.get('/statuses/home_timeline', {count: 10}, (err, reply) => {
    if (err) { return next(err); }
    res.send({tweets: reply});
  });
};
